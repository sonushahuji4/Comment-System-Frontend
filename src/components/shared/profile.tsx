const Profile = () => {
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
                        <div className="verified">
                            <img src="https://w7.pngwing.com/pngs/925/906/png-transparent-computer-icons-facebook-logo-verified-badge-facebook-blue-angle-text-thumbnail.png"></img>
                        </div>
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