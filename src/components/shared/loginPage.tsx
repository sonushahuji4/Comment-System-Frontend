import { GoogleLogin } from "@react-oauth/google";
import useLogin from "../../hooks/useLogin";
import { welcomeText, signUpText } from "../../constants/constant";

const LoginPage = () => {
    const { onLoginSuccess,onLoginError } = useLogin()

    return (
        <div className="login-container">
            <div className="modal">
                <div className="modal-content">
                    <div className="welcome-title">
                        <span>{welcomeText}</span>
                    </div>
                    <div className="google-login">
                        <div className="sign-up-title">
                            <span>{signUpText}</span>
                        </div>
                        <div className="login-bar">
                            <GoogleLogin
                                onSuccess={onLoginSuccess}
                                onError={onLoginError}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;