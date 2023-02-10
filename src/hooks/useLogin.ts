
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
const useLogin = () => {
    const navigate = useNavigate();

    const onLoginSuccess = async (res: any) => {
        const decodeCredential: any = jwt_decode(res.credential);
        const credential = {
            customer_id : decodeCredential.sub,
            customer_name : decodeCredential.name,
            email : decodeCredential.email,
            picture: decodeCredential.picture,
            isLoggedIn: true,
            createdAt : new Date().toISOString(),
            updatedAt: new Date().toISOString()
        }
        sessionStorage.setItem("customer",JSON.stringify(credential));
        sessionStorage.setItem("likesData",JSON.stringify([]));
        navigate("/home");
    }  
    
    const onLoginError = () => {
        navigate("/");
        throw ({err:'Login failed'});
    }

    return {
        onLoginSuccess,
        onLoginError
    }
}

export default useLogin;