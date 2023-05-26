import './App.css';
import RouteRouter from "./routes/RouteRouter";
import {GithubApi} from "./API/githubApi";

function App() {

    // GithubApi();

    // console.log(UserEmail);
    // console.log("repo");
    // console.log(UserRepo);


    return (
        <div className={"APP"}>

            <RouteRouter/>
        </div>
    );
}

export default App;
