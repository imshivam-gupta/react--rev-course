import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";


export default function Login(){
    const {login} = useContext(UserContext);
    const navigate = useNavigate();

    const HandleAuth = () => {
        login();
        navigate("/");
    }

    return(
        <div>
            <h1> Login</h1>
            <button onClick={HandleAuth}>Login</button>
        </div>
    )


}