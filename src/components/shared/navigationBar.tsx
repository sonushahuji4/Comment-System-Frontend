import flexiple from "../../statics/images/flexipleIcon.png";
const NavigationBar = () => {

    return (
        <div className="nav-container">
            <div className="flexiple-tab">
                <img src={flexiple} alt="flexiple-icon"></img>
            </div>
            <div className="nav-tabs">
                <div className="home-tab">
                    <span>{"Home"}</span>
                </div>
                <div className="profile-tab">
                    <span>{"Profile"}</span>
                </div>
                <div className="logout-tab">
                    <span>{"Logout"}</span>
                </div>
            </div>
        </div>
    )
}

export default NavigationBar;