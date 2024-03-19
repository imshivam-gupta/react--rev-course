import { useEffect, useState } from "react";

export default function useIdle() {
    const [idle, setIsIdle] = useState(false);

    useEffect(() => {
        let timeout;
        function handleEvent() {
            clearTimeout(timeout);
            setIsIdle(false);
            timeout = setTimeout(()=>{
                setIsIdle(true);
            },30000)
        }

        window.addEventListener('mousemove', handleEvent);
        window.addEventListener('click', handleEvent);
        window.addEventListener('keypress', handleEvent);

        return () => {
            window.removeEventListener('mousemove', handleEvent);
            window.removeEventListener('click', handleEvent);
            window.removeEventListener('keypress', handleEvent);
        }

    }, []);

    return idle;
}