/**
 * 
 * Store: Holds the application state.
 * Actions: Payloads of information sent to the store.
 * Reducers: Specifies how the application's state changes in response to actions sent to the store.
 * Dispatch: Method of the store used to dispatch actions.
 */
/*
Redux Interview Problems
- What is Redux and why to use it -> props drilling
- Any alternative by react -> context api
- Why redux inplace of Context API -> as our app grows we shoudl use redux because it provides middlewares -> debugging and also we can use api calls simplly by thunk midddleware. Suppose you created a small app and at 3rd level you feel the need to shift your state to parent component then you can use context api. But as our apps grow we evcentially shift ot redux
- What is store,action,reducer,dispatch
- What should we not do in reducer !!! -> hint is reducer is a pure function
- What is middleware in redux
- Explain the flow of redux 
- How to use apis in Redux -> thunk and explin the updated flow
- Redux can be used in any js application
*/

// Redux is a global state managment library

import { createStore } from "redux";


// counter component -> type and payload via action


const BUY_CAKE = 'BUY_CAKE';


// we can only return plain js objects without using middleware in action creator
// action creator -> what to do 
function buyCake(){
    return{
        type: BUY_CAKE,
    }
}

// After using thunk
// Action - Function | Object
// Action - Function -> dipatch action manually
// Action - Object -> dispatch action automatically and this action will be performed by reducer

const initialState = {
    numOfCakes:10
}

// this is uodating state -> how to do 
const reducer = (state=initialState,action) => {
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}

const store = createStore(reducer);
console.log('Initial state', store.getState()); // Initial state { numOfCakes: 10 }
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()));

store.dispatch(buyCake()); // Updated state { numOfCakes: 9 }
store.dispatch(buyCake()); // Updated state { numOfCakes: 8 }
unsubscribe();