import './App.css';
import RouteRouter from "./routes/RouteRouter";
import {GithubApi} from "./API/githubApi";

function App() {

    GithubApi();

    // GetRepoReadeMe("realslimtaek");
    return (
        <div className={"APP"}>
            <RouteRouter/>
        </div>
    );
}

export default App;
