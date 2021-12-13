import {input, btn, containerforall, h3Design, contentCreationDiv} from './CreatePost.module.css';
import ModuleCss from '../Components/Navbar.module.css';
import { Link } from 'react-router-dom';
import {userAuthenticated} from '../security/checkAuth';

const CreatePost = ({profileName}) => {

    const PostContent = (e) => {
        e.preventDefault();
        userAuthenticated();
    } 

    return (
        <section>
            <div className={containerforall}>
                <h3 className={h3Design}>Share a new post</h3>
                <div className={contentCreationDiv}>
                    <Link to='/profile' className={ModuleCss.profile} style={{marginBottom: "20px"}}>
                        <img src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="human" />
                        <h3 style={{color: "black"}}>{profileName}</h3>
                    </Link>
                    <form action="">
                        <textarea className={input} name="postContent" id="" cols="30" rows="10" placeholder='Post Content' ></textarea>
                        <input className={input} type="text" placeholder='tags' />
                        <input className={input} type="file" />
                        <button onClick={PostContent} type='submit' className={btn}>Post</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default CreatePost;