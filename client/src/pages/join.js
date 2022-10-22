import React from "react";
import {StoreContext} from "../App";

function Join() {
    const data = React.useContext(StoreContext);
    return (
        <div className="App">
            <header className="App-header"></header>
        </div>
    )
}

export default Join;