import { connect, useDispatch, useSelector } from "react-redux";
import { DECREMENT, INCREMENT } from "../redux/actionlist";

function ReduxConsumerExample(props) {
    // const counter = useSelector(state => state.counter.counter);
    // // it is provided to us by react-redux
    // // accepts a callback function that takes argument as state of our redux store
    // const dispatch = useDispatch();
    // // this hook is provided to us by react-redux
    // // it is used to dispatch an action to our redux store
    
    // const increment = () => {
    //     dispatch({type: INCREMENT});
    // }
    // const decrement = () => {
    //     dispatch({type: DECREMENT});
    // }

    return(
        <div>
            <h2>Counter: {props.counter}</h2>
            <button onClick={props.increment}>Increment</button>
            <button onClick={props.decrement}>Decrement</button>
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

// export default ReduxConsumerExample;
export default connect(mapStateToProps,mapDispatchToProps)(ReduxConsumerExample);