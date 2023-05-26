import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {SETUSEREMAIL, SETUSERREPO} from "../atoms/redux/UserData";

export function GithubApi() {
    const dispatch = useDispatch();
    const githubUser = "realslimtaek"
    const [githubRepoList, setGithubRepoList] = useState([]);

    const fetchRepo = () => {
        return fetch(`https://api.github.com/users/${githubUser}/repos`)
            .then((response) => response.json())
            .then((data) => setGithubRepoList(data));
    }

    useEffect(() => {
        fetchRepo();
    },[])
    // console.log(githubData);
    dispatch(SETUSEREMAIL(githubUser));
    dispatch(SETUSERREPO(githubRepoList));
}
