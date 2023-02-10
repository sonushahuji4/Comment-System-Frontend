import { useNavigate } from "react-router-dom";

const useLogout = () => {
    const navigate = useNavigate();
    
    const onLogout = () => {
        sessionStorage.clear();
        navigate("/");
    }  

    return onLogout
}

export default useLogout;