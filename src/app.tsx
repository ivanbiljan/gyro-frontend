import "bootstrap/dist/css/bootstrap.min.css";
import GyroLoginContainer from "containers/gyroLoginContainer/gyroLoginContainer";
import GyroRegisterContainer from "containers/gyroRegisterContainer/gyroRegisterContainer";
import { Route, Routes } from "react-router-dom";
import GyroModalContainer from "./containers/gyroModalContainer/gyroModalContainer";
import { PATHS } from "./utils/paths";

export const App = () => {
    return (
        <div className="app">
            <GyroModalContainer />
            <Routes>
                <Route path={PATHS.Login} element={<GyroRegisterContainer />} />
            </Routes>
        </div>
    );
};
