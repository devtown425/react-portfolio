import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Portfolio() {
    return (
        <div>
            <ul>
                <li>
                    <Link to={{ pathname: "https://github.com/devtown425" }} target="_blank">github</Link>
                </li>
                <li>
                    <Link to={{ pathname: "www.linkedin.com/in/sam-guan-b16a051a0" }} target="_blank">linkedin</Link>
                </li>
                <li>
                    <Link to={{ pathname: "https://github.com/devtown425/Venu" }} target="_blank">app 1</Link>
                </li>
                <li>
                    <Link to={{ pathname: "https://github.com/devtown425/emp-dir" }} target="_blank">app 2</Link>
                </li>
                <li>
                    <Link to={{ pathname: "https://github.com/devtown425/project-2-job-posting-app" }} target="_blank">app 3</Link>
                </li>

            </ul>
        </div>
    )
}

export default Portfolio;