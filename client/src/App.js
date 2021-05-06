import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
    const [value, setValue] = useState(0);

    useEffect(() => {
        document.title = `${value}`;
    });

    return (
        <div className="App">
            <p>{value}</p>
            <button onClick={() => setValue(value + 1)}>Boa</button>
        </div>
    );
}

export default App;
