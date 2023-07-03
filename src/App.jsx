import { useState } from "react";
import "./App.css";
import DarkMood from "./DarkMood";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
    const [isDark, setIsDark] = useState([]);
    return (
        <div className="App">
            <DarkMood.Provider value={isDark}>
                <Header setIsDark={setIsDark} />
                <Home />
            </DarkMood.Provider>
        </div>
    );
}

export default App;
