import { useContext } from "react";
import { GlobalStateContext  } from "../../context/GlobalContextProvider";

const Profile = () => {
    const stateContext: any = useContext(GlobalStateContext );
    return (
        <div className="profile-container">
            <div className="profile-card">
                <div className="profile-img">
                    <img src={stateContext.customer?.picture} alt="profile-img"></img>
                </div>

                <div className="profile-content">
                    <div className="title">
                        <span>{stateContext.customer?.name}</span>
                    </div>
                    <div className="email">
                        <span>{stateContext.customer?.email}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;