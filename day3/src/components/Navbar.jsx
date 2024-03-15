import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Navbar(){
    const {user,login,logout} = useContext(UserContext);
    const {theme,changeTheme} = useContext(ThemeContext);
    const navigate = useNavigate(); 

    const HandleAuth = () => {
        if(user){
            logout();
            navigate("/login");
        } else{
            login();
        }
    }

    const themeChahngeOnButtonClick = () => {
        changeTheme(theme);
    }

    return(
        <nav className="flex flex-row gap-x-10">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <span>{user && `Hello, ${user.name}`}</span>
            
            <button onClick={themeChahngeOnButtonClick}>
                {theme== "dark" ? "Light" : "Dark"}
            </button>

            <NavLink onClick={HandleAuth}>
                {user ? "Logout" : "Login"}
            </NavLink>
        </nav>
    )
}