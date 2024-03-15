// memo in React

import { useState,memo, useCallback } from "react";

const Todos = ({todos, addTodo}) => {
    console.log('todos component');
    return(
        <div>
            {todos.map((todo, index) => {
                return <div key={index}>{todo.name}</div>
            })}
            <button onClick={addTodo}>Add Todo</button>
        </div>
    )
}


/*

grandfather compnent
    father component
        child component x
            grandchild component        gradnchild2 component
*/
const MemorisedTodos = memo(Todos);

const CallbackDemo = () => {
    const [count, setCount] = useState(0);
    const [todos,setTodos] = useState([{ name:'todo1'},{name:'todo2'}]);
    
    const increment = () => {
        setCount(count+1);
    }

    // const addTodo = () => {
    //     setTodos([...todos, {name:'todo3'}]);
    // }

    const addTodowithCallback = useCallback(()=>{
        setTodos([...todos, {name:'todo3'}]);
    },[todos])


    return(
        <div>
            <h2>My Todos</h2>
            <MemorisedTodos todos={todos} addTodo={addTodowithCallback} />
            {/* <MemorisedTodos todos={todos} addTodo={addTodo} /> */}
            {/* <Todos todos={todos}  /> */}
           
            <hr />

            <div>
                Count: {count}
                <button onClick={increment}>Increment</button>
            </div>
        </div>
    )
}

export default CallbackDemo;