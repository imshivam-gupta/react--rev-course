import { useState } from 'react';
import styles from './style.module.css';




export default function Tabs({tabs,defaultSelect}) {
    const [selectedTabIndex, setSelectedTabIndex] = useState(defaultSelect);


    const handleTabIndex = (index) => {
        setSelectedTabIndex(index);
    }

    return (
        <div className={styles.main}>
            <div className={styles.tabs}>
                {tabs.map((tab, ind) => (
                    <div
                        key={ind}
                        className={`${styles.tab} ${selectedTabIndex==ind && styles.active}`}
                        onClick={() => handleTabIndex(ind)}
                    >
                        {tab.title}
                    </div>
                ))}
            </div>

            <div className={styles.data}>
                {tabs[selectedTabIndex].data}
            </div>
        </div>
    )
}