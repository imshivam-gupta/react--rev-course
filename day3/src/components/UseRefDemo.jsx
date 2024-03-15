import { useState,useRef, useEffect } from "react";

export default function UseRefDemo() {
    const [inputValue,setInputValue] = useState("");
    const inputRef = useRef(null);
    const prevInputRef = useRef("");
    const countRef = useRef(0);


    // ab
    useEffect(()=>{
        // currValue as ab
        prevInputRef.current = inputValue;
    },[inputValue])

    useEffect(()=>{
        countRef.current = countRef.current+1;
    })

    const focusInput = () => {
        if(inputRef.current){
            inputRef.current.focus();
        }
    }

    return(
        <>
            <input
                type="text"
                value={inputValue}
                onChange={(e)=>setInputValue(e.target.value)}
                ref={inputRef}
            ></input>
            <h2>Current Value: {inputValue}</h2>
            <h2>Previous Value: {prevInputRef.current}</h2>
            <h2>Render Count: {countRef.current}</h2>
            <button onClick={focusInput}> Focus</button>
        </>
    )
}