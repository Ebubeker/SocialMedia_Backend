const express = require("express");
const router = express.Router();
const path = require("path");
const Users = require("../models/userLogin.model");
const jwt = require("jsonwebtoken");
const Post = require("../models/contentPost.model");
const Comment = require("../models/Comment.model");
const Message = require("../models/Message.model");

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 1;

router.route("/createUser").post((req, res) => {
  const username = req.body.username;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;

  const newUser = new Users({
    username,
    firstName,
    lastName,
    email,
    password,
    activity: {
      followers: 0,
      followerUsers: [],
      following: 0,
      followingUsers: [],
      Likes: 0,
    },
  });

  newUser.save();
});

router.route("/confirmAccount/:id").get((req, res) => {
  const info = req.params.id;
  const username = info.split("_")[0];
  const password = info.split("_")[1];
  Users.findOne({ username: username, password: password }).then((resp) => {
    if (resp) {
      const id = resp._id;
      const token = jwt.sign({ id }, process.env.TOKEN_VALUE, {
        expiresIn: "24h",
      });
      res.json({ auth: true, token: token, result: resp });
    } else {
      res.json({ auth: false, message: "no user exists" });
    }
  });
});

router.route("/postContent").post((req, res) => {
  const post_Content = req.body.postContent;
  const tags = req.body.tags;
  const file = req.body.file;
  const user = req.body.id;

  const newPost = new Post({
    content: post_Content,
    tags: tags,
    imgUrl: file,
    user_id: user,
    activity: {
      likes: 0,
      usersLiking: [],
    },
  });

  newPost.save();
});

router.route("/postContent").get((req, res) => {
  Post.find()
    .sort({ field: "asc", _id: -1 })
    .then((resp) => {
      res.send(resp);
    });
});

router.route("/postContent/:id").get((req, res) => {
  Post.find({ user_id: req.params.id })
    .sort({ field: "asc", _id: -1 })
    .then((resp) => {
      res.send(resp);
    });
});

router.route("/getuser/:id").get((req, res) => {
  const id = req.params.id;
  Users.findOne({ _id: id }).then((resp) => {
    res.send(resp);
  });
});

router.route("/getuser").get((req, res) => {
  Users.find().then((resp) => {
    res.send(resp);
  });
});

const VerifyJWT = (req, res, next) => {
  const token = req.headers["x-access-token"];

  if (!token) {
    res.send("I guess you need a toke lad");
  } else {
    jwt.verify(token, process.env.TOKEN_VALUE, (err, decoded) => {
      if (err) {
        res.json({ auth: false, message: "authentication failed" });
      } else {
        req.userId = decoded.id;
        next();
      }
    });
  }
};

router.get("/isUserAuth", VerifyJWT, (req, res) => {
  res.send("You are authenticated");
});

router.route("/update").post((req, res) => {
  const id = req.body.id;
  const newLikes = req.body.newLikes;
  const user = req.body.userCurrent;
  const currentPeopleLiking = req.body.currentLikedList;
  const whatToDo = req.body.whatToDo;

  let updated;
  if (whatToDo === "like") {
    if (newLikes === 1) {
      updated = {
        activity: {
          likes: newLikes,
          usersLiking: [user],
        },
      };
    } else {
      updated = {
        activity: {
          likes: newLikes,
          usersLiking: [...currentPeopleLiking, user],
        },
      };
    }
  } else {
    if (newLikes === 0) {
      updated = {
        activity: {
          likes: newLikes,
          usersLiking: [],
        },
      };
    } else {
      let newUpd = [...currentPeopleLiking];
      newUpd.splice(newUpd.indexOf(user), 1);
      updated = {
        activity: {
          likes: newLikes,
          usersLiking: [...newUpd],
        },
      };
    }
  }

  Post.findOneAndUpdate({ _id: id }, updated).catch((err) => console.log(err));
});

//Following router
const checkIfItsIn = (followingActivity, user) => {
  let count = 0;

  followingActivity.followingUsers.forEach((us) => {
    if (us === user) {
      count++;
    }
  });
  if (count == 1) {
    return true;
  } else {
    return false;
  }
};

router.route("/follow").post((req, res) => {
  //the two users
  let following = req.body.following;
  let followed = req.body.followed;
  let followingActivity = following.activity;
  let newArr = [];
  let newFArr = [];
  let uptadedFollowing = {};
  let uptadedFollowed = {};

  if (checkIfItsIn(followingActivity, followed._id)) {
    newArr = [...followingActivity.followingUsers];
    newArr.splice(newArr.indexOf(followed._id), 1);
    newFArr = [...followed.activity.followerUsers];
    newFArr.splice(newArr.indexOf(following._id), 1);

    uptadedFollowing = {
      activity: {
        followers: followingActivity.followers,
        following: followingActivity.following - 1,
        followerUsers: [...followingActivity.followerUsers],
        followingUsers: [...newArr],
        Likes: 0,
      },
    };

    uptadedFollowed = {
      activity: {
        followers: followed.activity.followers - 1,
        following: followed.activity.following,
        followerUsers: [...newFArr],
        followingUsers: [...followed.activity.followerUsers],
        Likes: 0,
      },
    };
  } else {
    if (followingActivity.following === 0) {
      console.log("hi");
      newArr = [followed._id];
    } else {
      newArr = [...followingActivity.followingUsers];
      newArr.push(followed._id);
    }

    if (followed.activity.followers === 0) {
      console.log("hi");
      newFArr = [following._id];
    } else {
      newFArr = [...followed.activity.followingUsers];
      newFArr.push(following._id);
    }

    uptadedFollowing = {
      activity: {
        followers: followingActivity.followers,
        following: followingActivity.following + 1,
        followerUsers: [...followingActivity.followerUsers],
        followingUsers: [...newArr],
        Likes: 0,
      },
    };

    uptadedFollowed = {
      activity: {
        followers: followed.activity.followers + 1,
        following: followed.activity.following,
        followerUsers: [...newFArr],
        followingUsers: [...followed.activity.followerUsers],
        Likes: 0,
      },
    };
  }

  Users.findOneAndUpdate({ _id: following._id }, uptadedFollowing).catch(
    (err) => console.log(err)
  );

  Users.findOneAndUpdate({ _id: followed._id }, uptadedFollowed).catch((err) =>
    console.log(err)
  );
});

router.route("/comment").post((req, res) => {
  const content = req.body.content;
  const user = req.body.user_id;
  const post = req.body.post_id;

  const newComment = new Comment({
    content: content,
    user_made_id: user,
    post_id: post,
  });

  newComment.save();
});

router.route("/getComments/:id").get((req, res) => {
  const postId = req.params.id;

  Comment.find({ post_id: postId }).then((resp) => {
    res.send(resp);
  });
});

router.route("/message").post((req, res) => {
  const content = req.body.content;
  const userSent = req.body.userSent;
  const userRecieved = req.body.userRecieved;

  const newMessage = new Message({
    content: content,
    useSend: userSent,
    userRecieved: userRecieved,
  });

  newMessage.save();
});

router.route("/getMessage/:id").get((req, res) => {
  const id = req.params.id.split(" ");

  Message.find({
    useSend: { $in: [id[0], id[1]] },
    userRecieved: { $in: [id[1], id[0]] },
  }).then((resp) => res.send(resp));
});

router.route("/getuserExcept/:id").get((req, res) => {
  const id = req.params.id;
  Users.find({ _id: { $ne: id } }).then((resp) => {
    res.send(resp);
  });
});

module.exports = router;
