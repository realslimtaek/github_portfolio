import {selector} from "recoil";

let name = "";
export const currentRepo = (repoName) => selector({
    key: "currentRepo",
    get: ({get}) => {
        name = get(repoName);
        return name;
    },
});

export default currentRepo;

