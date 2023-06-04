import React from 'react';
import {useSelector} from "react-redux";
import styles from "./RepositoryAll.module.css";
import {Link} from "react-router-dom";

function RepositoryAll(props) {

    const UserRepo = useSelector((state) => state.user.repo);

    return (
        <div>
            <div className={styles.repoAllTitle}> Projects</div>

            <div className={styles.repoAllContainer}>
                {UserRepo.map((d, index) => {
                    return (
                        <>

                            <div className={styles.repoContainer} key={index}>
                                <Link to={"/repos/" + `${d.name}`}>
                                    <div className={styles.repoTitle}>
                                        {d.name}
                                    </div>
                                    <div className={styles.repoDescription}>
                                        {d.description}
                                    </div>
                                </Link>
                            </div>

                        </>
                    )
                })}
            </div>

        </div>
    );
}

export default RepositoryAll;