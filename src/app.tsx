import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import GyroModalContainer from "./containers/gyroModalContainer/gyroModalContainer";
import { devConsoleLog } from "./utils/logging";
import { PATHS } from "./utils/paths";
import { getUserLocalStorageData } from "./utils/localStorage";

const App = () => {
    return (
        <div className="app">
            <GyroModalContainer />
                <Routes>
                    <Route
                        path={PATHS.Login}
                    />
                </Routes>
        </div>
    );
};
