import axios from "axios";
import { USERS_LOADING, USERS_SUCCESS } from "../actionlist";

export const getUsers = () => async(dispatch) => {
    const url = "https://jsonplaceholder.typicode.com/users";
    dispatch({type: USERS_LOADING});
    try{
        const res = await axios.get(url);
        const usersList = res.data;
        dispatch({type: USERS_SUCCESS,payload:usersList});
    } catch(e){
        dispatch({
            type: USERS_FAILURE,
            payload: e?.message ?? e.toString()
        })
    }
};