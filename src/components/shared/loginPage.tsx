import { GoogleLogin } from "@react-oauth/google";
import useLogin from "../../hooks/useLogin";
import { welcomeText, signUpText } from "../../constants/constant";
import { GoogleOAuthProvider } from '@react-oauth/google';
const clientId = '894720398292-60h39t5cbgnk1ens4p7p21mtgrb3fmk9.apps.googleusercontent.com';

const LoginPage = () => {
    const { onLoginSuccess,onLoginError } = useLogin()

    return (
        <GoogleOAuthProvider clientId={clientId}>
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
        </GoogleOAuthProvider>
    )
}

export default LoginPage;