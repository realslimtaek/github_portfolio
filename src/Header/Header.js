import React, {useState} from 'react';
import styles from './Header.module.css';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

export default function Header() {

    const UserRepo = useSelector((state) => state.user.repo);
    const [click, setClick] = useState(false);
    console.log(UserRepo);

    function showRepoList(e) {
        const repoList = document.getElementById("repoList");
        repoList.style.display = "block";
        if (!click) setClick(true);
        else hideRepoList(e);

    }

    function hideRepoList(e) {
        const repoList = document.getElementById("repoList");
        if (e.target.id === "repoListButton") {
            showRepoList(e);
        } else {
            repoList.style.display = "none";
            setClick(false);
        }

    }


    return (
        <div className={styles.HeadDiv} id="HeadDIv" onMouseLeave={hideRepoList} onClick={(e) => hideRepoList(e)}>
            {/*Header*/}
            <div className={styles.MainBannerIcon}>
                <ul className={styles.MenuListContainer} style={{paddingLeft: "0"}}>
                    <li style={{display: "flex"}}>
                        <div className={styles.eachNavContainer}>
                            <Link to="/">
                                <button className={`${styles.EachIcon} ${styles.EachIcon_details}`}>
                                    REALSLIMTAEK
                                </button>
                            </Link>
                        </div>

                    </li>

                    <li>
                        <div className={styles.eachNavContainer}>
                            {/*<Link to={"/repos"}>*/}
                            <button id="repoListButton" className={`${styles.EachIcon} ${styles.EachIcon_details}`}
                                    onClick={showRepoList}
                                    style={{height: "100%"}}>
                                REPOSITORY
                            </button>
                            {/*</Link>*/}
                        </div>

                    </li>
                    <div className={styles.repo_list} id={"repoList"}>
                        {
                            UserRepo.map((data, index) => {
                                return (
                                    <div className={styles.repo_list_each}>
                                        <span>{data.name}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </ul>

            </div>


            <div style={{ position:"relative", right:"20px"}}>
                <ul className={styles.MenuListContainer}>

                    <li>
                        <div className={styles.eachNavContainer}>
                            <Link to={"/about"}>
                                <button className={`${styles.EachIcon} ${styles.EachIcon_details}`}>
                                    About
                                </button>
                            </Link>
                        </div>
                    </li>

                    <li>
                        <div className={styles.eachNavContainer}>
                            <Link to={"/contact"}>
                                <button className={`${styles.EachIcon} ${styles.EachIcon_details}`}>
                                    Contact
                                </button>
                            </Link>
                        </div>
                    </li>
                </ul>

            </div>

        </div>
    );
}