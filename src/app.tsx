import "bootstrap/dist/css/bootstrap.min.css";
import GyroLoginContainer from "containers/gyroLoginContainer/gyroLoginContainer";
import GyroRegisterContainer from "containers/gyroRegisterContainer/gyroRegisterContainer";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import GyroModalContainer from "./containers/gyroModalContainer/gyroModalContainer";
import { PATHS } from "./utils/paths";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
    return (
        <div className="app">
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
            />
            <GyroModalContainer />
            <Routes>
                <Route path={PATHS.Register} element={<GyroRegisterContainer />} />
                <Route path={PATHS.Login} element={<GyroLoginContainer />} />
            </Routes>
        </div>
    );
};
