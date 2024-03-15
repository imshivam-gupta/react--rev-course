// memo in React

import { useState,memo } from "react";

const Todos = ({todos, addTodo}) => {
    console.log('todos component');
    return(
        <div>
            {todos.map((todo, index) => {
                return <div key={index}>{todo.name}</div>
            })}
        </div>
    )
}

const MemorisedTodos = memo(Todos);

const MemoDemo2 = () => {
    const [count, setCount] = useState(0);
    const [todos,setTodos] = useState([{ name:'todo1'},{name:'todo2'}]);
    
    const increment = () => {
        setCount(count+1);
    }

 

    return(
        <div>
            <h2>My Todos</h2>
            <MemorisedTodos todos={todos}  />
            {/* <Todos todos={todos}  /> */}
           
            <hr />

            <div>
                Count: {count}
                <button onClick={increment}>Increment</button>
            </div>
        </div>
    )
}

export default MemoDemo2;