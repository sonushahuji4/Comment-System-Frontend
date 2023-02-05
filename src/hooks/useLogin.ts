
import { useContext } from 'react';
import jwt_decode from "jwt-decode";
import { GlobalDispatchContext } from '../context/GlobalContextProvider';
import { CUSTOMER } from '../context/actions';
const useLogin = () => {
    const dispatch: any = useContext(GlobalDispatchContext);
    const onLoginSuccess = async (res: any) => {
        const decodeCredential: any = jwt_decode(res.credential);
        const credential = {
            customerId : decodeCredential.sub,
            name : decodeCredential.name,
            email : decodeCredential.email,
            picture: decodeCredential.picture,
            isLoggedIn: true
        }
        dispatch({
            type : CUSTOMER,
            payload : {customer : credential}
        });

        sessionStorage.setItem("customer",JSON.stringify(credential));
    }  
    
    const onLoginError = () => {
        throw ({err:'Login failed'});
    }

    return {
        onLoginSuccess,
        onLoginError
    }
}

export default useLogin;