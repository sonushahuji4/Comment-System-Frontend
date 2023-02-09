import { useContext } from "react";
import { GlobalStateContext  } from "../../context/GlobalContextProvider";

const Profile = () => {
    const stateContext: any = useContext(GlobalStateContext);
    const credential: any = JSON.parse(sessionStorage.getItem("customer") || '{}');
    
    return (
        <div className="profile-container">
            <div className="profile-card">
                <div className="profile-img">
                    <img src={credential?.picture} alt="profile-img"></img>
                </div>

                <div className="profile-content">
                    <div className="title">
                        <span>{credential?.customer_name}</span>
                    </div>
                    <div className="email">
                        <span>{credential?.email}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;