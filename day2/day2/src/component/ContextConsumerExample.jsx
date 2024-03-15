import { useContext } from "react";
import { CounterContext } from "../contexts/CounterContext";

function ContextConsumerExample() {
    const {count, increment, decrement} = useContext(CounterContext);
    return(
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default ContextConsumerExample;