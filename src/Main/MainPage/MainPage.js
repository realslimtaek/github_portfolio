import React, {useEffect, useState} from 'react';
import styles from './MainPage.module.css';

function MainPage(props) {
    // const [width, setScreenWidth] = useState(window.innerWidth);

    // window.addEventListener('resize', (event) => {
    //     setScreenWidth(window.innerWidth);
    //     console.log(width);
    // })


    return (

        <div>
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

            <div className={styles.buttonContainer}>

                <button className={styles.GoRepoButton}>
                    FindOutWhatIDone
                </button>
            </div>

        </div>
    );
}

export default MainPage;