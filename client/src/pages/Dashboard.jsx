import Navbar from "../Components/Navbar";
import CreatePost from "../Components/CreatePost";
import DashboardCss from './Dashboard.module.css';
import store from "../redux/store/store";
import PostList from "../Components/PostList";
import SuggestedList from "../Components/SuggestedList";

const Dashboard = () => {

    let stor = JSON.parse(localStorage.reduxState);
    return (
        <div>
            <Navbar profileName={stor.username}></Navbar>
            <div className={DashboardCss.divider}>
                <div className={DashboardCss.actionMiddle}>
                    <CreatePost profileName={stor.username}></CreatePost>
                    <PostList name={stor.username}></PostList>
                </div>
                <div className={DashboardCss.sideBar}>
                    <SuggestedList name={stor.username}></SuggestedList>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
