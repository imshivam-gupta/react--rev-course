import { useState } from "react";


export default function BatchUpdateCounter() {
    const [count,setCount] = useState(0);


    // prevstatesnapshot -> count 0

    // react maintains seperate dom called react dom or virtual dom
    // <ReactDom> -> <VirtualDom> -> <RealDom>

    // Whenver state change will occur -> update our vitual dom
    // we have to sybchronise virtual dom and real dom
    
    /* 
    * update count to 1
    * update count to 1
    * update count to 1
    */

    // batch update and virtual dom

    // dom -> tree of elements
    // virtual dom -> tree of elements
    // react maintains virtual dom in memory 


    // setCount(count+1) -> update count to (precstate+1)=1
    // setCount(count+1) -> update count to (precstate+1)=1
    // setCount(count+3) -> update count to (precstate+3)=3

    // setCount((x)=>x+1) -> update count to (precstate+1)=1 prevstate = 1
    // setCount((x)=>x+1) -> update count to (precstate+1)=2 prevstate = 2
    // setCount((x)=>x+3) -> update count to (precstate+1)=3 prevstate = 3


    // let prevstate = count = 0;
    // setCount((x)=>x+1) -> update count to (precstate+1)=1 prevstate = 1
    // setCount((x)=>x+1) -> update count to (precstate+1)=2 prevstate = 2
    // setCount(count+3) -> update count to (count+3)=3  
    return(
        <div>
            <h1> Update Counter</h1>
            <h2>Count: {count}</h2>
            <button onClick={
                () =>{ 

                    // setCount(count+1) 
                    // setCount(count+1)
                    // setCount(count+3)

                    setCount((x)=>x+1);
                    setCount((x)=>x+1);
                    setCount(count+3);
                }           
            }>Increment</button>
            <button onClick={() => setCount(count-1)}>Decrement</button>
        </div>
    )
}