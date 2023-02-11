import flexiple from "../../statics/images/flexipleIcon.png";
import useLogout from "../../hooks/useLogout";
import { useNavigate } from "react-router-dom";
const NavigationBar = () => {
    const navigate = useNavigate();
    const onLogout  = useLogout();
    return (
        <div className="nav-container">
            <div className="tab-holder">
                <div className="flexiple-tab">
                    <img src={flexiple} alt="flexiple-icon"></img>
                </div>
                <div className="nav-tabs">
                    <div className="home-tab">
                        <span onClick={() => navigate("/home")}>{"Home"}</span>
                    </div>
                    <div className="logout-tab">
                        <span onClick={onLogout}>{"Logout"}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavigationBar;