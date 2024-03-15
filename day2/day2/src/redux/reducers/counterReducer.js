import { DECREMENT, INCREMENT, INCREMENT_BY } from "../actionlist"

const initialState = {
    counter:0,
}

// 1. we should not call any apis or side effects or transition in reducer
// 2. Mutate reducer arguments -> unpredictable behaviour -> reducer is a pure function this should not update anything directly always return a new state
// 3. Never call non pure functions inside a reducer LIKE Date.now() or Math.random() -> unpredictable behaviour

export default function counterReducer(state = initialState, action){
    switch(action.type){
        case INCREMENT:
            // state.counter+=1;
            // return state;
            return{
                counter: state.counter + 1
            }
        case DECREMENT:
            return{
                counter: state.counter - 1
            }
        case INCREMENT_BY:
            // api here
            // then update my data to a database -> not be used
            return{
                counter: state.counter + action.payload
            }
        default:
            return state
    }
}