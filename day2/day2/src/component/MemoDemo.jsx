import React, {useMemo, useState} from 'react'

const MemoDemo = () => {
    const [count, setCount] = useState(0);
    const [todos,setTodos] = useState([{ name:'todo1'},{name:'todo2'}]);
    // const calc = expensiveCalculation(count);
    // how useMemo works
    const calc = useMemo(() => expensiveCalculation(count), [count]);

    const increment = () => {
        setCount(count+1);
    }

    const addTodo = () => {
        setTodos([...todos, {name:'todo3'}]);
    }

    return(
        <div>
            <h2>My Todos</h2>
            {todos.map((todo, index) => {
                return <div key={index}>{todo.name}</div>
            })}

            <button onClick={addTodo}>Add Todo</button>

            <hr />

            <div>
                Count: {count}
                <button onClick={increment}>Increment</button>
                {calc}
            </div>
        </div>
    )
}

const expensiveCalculation = (count) => {
    console.log('expensiveCalculation');
    for(let i=0; i<1000000; i++){}
    return count*2;
}

export default MemoDemo;