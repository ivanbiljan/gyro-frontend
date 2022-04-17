import "bootstrap/dist/css/bootstrap.min.css";
import GyroLoginContainer from "containers/gyroLoginContainer/gyroLoginContainer";
import { Route, Routes } from "react-router-dom";
import GyroModalContainer from "./containers/gyroModalContainer/gyroModalContainer";
import { PATHS } from "./utils/paths";

export const App = () => {
    return (
        <div className="app">
            <GyroModalContainer />
                <Routes>
                    <Route
                        path={PATHS.Login}
                        element={<GyroLoginContainer/>}
                    />
                </Routes>
        </div>
    );
};
