import { useNavigate } from "react-router-dom";
const useRedirect = (redirectTo: string) => {
    const navigate = useNavigate()

    const onNavigate = () => {
        navigate(redirectTo);
    }
    return onNavigate;
}

export default useRedirect;