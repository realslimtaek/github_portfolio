import React, {useEffect, useState} from 'react';
import styles from './MainPage.module.css';

function MainPage(props) {
    // const [width, setScreenWidth] = useState(window.innerWidth);

    // window.addEventListener('resize', (event) => {
    //     setScreenWidth(window.innerWidth);
    //     console.log(width);
    // })





    return (
        <div style={{height:"700px"}}>
            <div className={styles.mainContent}>
            <span className={styles.mainWordSpan}>
                FULLSTACK
            </span>
            </div>
            <div className={styles.mainContent}>
        <span className={styles.mainWordSpan}>
                DEVELOPER
            </span>
            </div>
        </div>
    );
}

export default MainPage;