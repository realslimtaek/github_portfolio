import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {SETCURRENTREPO} from "../atoms/redux/CurRepo";

export function GetRepoReadeMe(repo) {
    const dispatch = useDispatch();

    useEffect(() => {
        fetchRepo();
    }, [])

    function fetchRepo() {
        return fetch(`https://api.github.com/repos/realslimtaek/${repo}/readme`)
            .then((response) => response.json())
            .then((data) => {
                dispatch(SETCURRENTREPO(data));
            })
    }




}