import { USERS_FAILURE, USERS_LOADING, USERS_SUCCESS } from "../actionlist";


const initialState = {
    loading: false,
    error:null,
    data: [],
};

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case USERS_LOADING:
            return {
                ...state,
                loading: true,
                error: null,
            }
        case USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            }
        case USERS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
}

export default userReducer;