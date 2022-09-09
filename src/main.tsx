import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from 'react-router-dom'
import GameContextProvider from "./GameContextProvider";
import "uno.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
            <GameContextProvider>
        <BrowserRouter>
                <App />
        </BrowserRouter>
            </GameContextProvider>
    </React.StrictMode>
);
