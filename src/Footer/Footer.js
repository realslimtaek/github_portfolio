import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import styles from './Footer.module.css';
import {toast, ToastContainer} from "react-toastify";

function Footer(props) {
    const notify = () => toast.success("Copy Completed!");

    const moveTo = (where)  =>{
        if(where === "blog"){
            window.open("https://realslimtaek.tistory.com");
        }
        else
            // (where === "github")
        {
            window.open("https://github.com/realslimtaek")

        }
    }

    function copyEmail() {
        navigator.clipboard.writeText("realslimtaek@protonmail.com").then(() => {
            notify();
        });
    }

    return (
        <div className={styles.FooterWrapper}>
            <ul className={styles.FooterUl} style={{display:"flex"}}>
                <li className={styles.FooterLi}>
                    <div>
                        Github
                    </div>
                    <button onClick={(e) => moveTo("github")}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"
                             className={styles.githubSVG}>
                            <path
                                d="M0 0v24h24v-24h-24zm14.534 19.59c-.406.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.311-1.588-.824-2.147.083-.202.357-1.016-.079-2.117 0 0-.671-.215-2.198.82-.639-.18-1.323-.267-2.003-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"/>
                        </svg>
                    </button>
                </li>
                <li className={styles.FooterLi}>
                    <div>
                        Email
                    </div>
                    <button onClick={copyEmail}>
                        <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6zm3.519 0L12 11.671 18.481 6H5.52zM20 7.329l-7.341 6.424a1 1 0 0 1-1.318 0L4 7.329V18h16V7.329z"
                                fill="#ffffff"/>
                        </svg>
                    </button>
                </li>
                <li className={styles.FooterLi}>
                    <div>
                        Blog
                    </div>
                    <button onClick={(e) => moveTo("blog")}>
                        <svg fill="#ffffff" width="40px" height="40px" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg">

                            <title/>

                            <g>

                                <path d="M12,72A12,12,0,1,0,24,84,12.0119,12.0119,0,0,0,12,72Z"/>

                                <path d="M12,36a6,6,0,0,0,0,12A36.0393,36.0393,0,0,1,48,84a6,6,0,0,0,12,0A48.0512,48.0512,0,0,0,12,36Z"/>

                                <path d="M12,0a6,6,0,0,0,0,12A72.0788,72.0788,0,0,1,84,84a6,6,0,0,0,12,0A84.0981,84.0981,0,0,0,12,0Z"/>

                            </g>

                        </svg>
                    </button>
                </li>


            </ul>

            <ToastContainer/>

        </div>


    );
}

export default Footer;