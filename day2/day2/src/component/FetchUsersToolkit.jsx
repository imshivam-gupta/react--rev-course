
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux-toolkit/actions/userActions";

function FetchUsersToolkit() {
    const userState = useSelector(state => state.users);
    const dispatch = useDispatch();

    const getUsersFun = async() => {
        console.log("Fetching users");
        dispatch(getUsers())
    }

    return(
        <div>
            <h1> Fetch Users</h1>
            <button onClick={getUsersFun}>Fetch Users</button>

            <h2>Users are:</h2>
            {userState.loading && <p>Loading...</p>}
            {userState.error && <p>{userState.error}</p>}
            {userState.data.length > 0 && userState.data.map((user, index) => {
                return <p key={index}>{user.name}</p>
            })}
        </div>
    )
}

export default FetchUsersToolkit;