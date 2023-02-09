import NavigationBar from "./navigationBar";
import Footer from "./footer";
import Profile from "./profile";
import Comment from "./comment";

const Home = () => {
    return (
        <div className="main-container">
            <NavigationBar/>
            <div className="page-container">
                <Profile />
                <Comment />
            </div>
            <Footer/>
        </div>
    )
}

export default Home;