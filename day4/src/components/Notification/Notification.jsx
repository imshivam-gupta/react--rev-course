// import './style.css'
import { useEffect, useState } from 'react'
import styles from './style.module.css'
import { X } from 'react-feather';

export default function Notification({ visible, setVisible, closeAutomatically,text, delay = 3000 }) {

    const [isOpen, setIsOpen] = useState(visible);
    const [progress,setProgress] = useState(100);

    const handleClose = () => {
        setIsOpen(false);
        setVisible(false);
    }

    useEffect(() => {
        
        if(!closeAutomatically) return;

        // let intervalId = setTimeout(() => { handleClose() }, delay);

        // return () => {
        //     clearInterval(intervalId);
        // }

        console.log(delay);


        let intervaId = setInterval(()=>{
           
            setProgress(prevProgrss=>{
                if(prevProgrss<=0){
                    clearInterval(intervaId);
                    handleClose();
                    return 0;
                } else{
                    return prevProgrss-1;
                }
            })
        }
        ,delay/100);


        return ()=>{
            clearInterval(intervaId);
        }
    }, [visible]
    );

    useEffect(() => {
        setIsOpen(visible);
        setProgress(100);
    },
        [visible])

    if (!isOpen) return (<></>);

    return (
        // <div className="notification">
        <div className={styles.notification}>
            <X className={styles.icon} onClick={handleClose} />
            {text}
            {closeAutomatically && 
                <div className={styles.progressBar}>
                    <div 
                        className={styles.progressIndicator}
                        style={{width: `${progress}%`}}
                    >
                    </div>
                </div>
            }
        </div>
    )
}