import {useRef,useState} from 'react';


export default function Timer(){
    const [startTime,setStartTime] = useState(null);
    const [currTime,setCurrTime] = useState(null);
    const intervalRef = useRef(null);
    

    function handleStart(){
        setStartTime(Date.now());
        setCurrTime(Date.now());

        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(()=>{
            setCurrTime(Date.now());
        },10);
    }

    function handleStop(){
        clearInterval(intervalRef.current);
    }

    let secondsPassed = 0;
    if(startTime!=null && currTime!=null){
        secondsPassed = (currTime-startTime)/1000;
    }

    return(
        <>
            <h1>Time Passes: {secondsPassed.toFixed(3)}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </>
    )
}