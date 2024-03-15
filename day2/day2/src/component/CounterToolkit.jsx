import { connect, useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux-toolkit/slices/counterSlice";

function CounterToolkit(props) {
    const counter = useSelector(state => state.counter.counter);
    // it is provided to us by react-redux
    // accepts a callback function that takes argument as state of our redux store
    const dispatch = useDispatch();
    // this hook is provided to us by react-redux
    // it is used to dispatch an action to our redux store
    
    const inc = () => {
        dispatch(increment());
    }
    const dec = () => {
        dispatch(decrement());
    }

    return(
        <div>
            <h2>Counter: {counter}</h2>
            <button onClick={inc}>Increment</button>
            <button onClick={dec}>Decrement</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch({type: INCREMENT}),
        decrement: () => dispatch({type: DECREMENT})
    }
}

export default CounterToolkit;
