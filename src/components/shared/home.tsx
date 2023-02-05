import NavigationBar from "./navigationBar";
import Footer from "./footer";
import Profile from "./profile";
import Feed from "./feedPage";

const Home = () => {
    return (
        <div className="main-container">
            <NavigationBar/>
            <div className="page-container">
                <Profile />
                <Feed />
            </div>
            <Footer/>
        </div>
    )
}

export default Home;