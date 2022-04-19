import GyroButton from "components/gyroButton/gyroButton";
import GyroInput from "components/gyroInput/gyroInput";
import { useDispatch } from "react-redux";
import "./gyroLoginContainer.scss";
import variables from "./../../_variables.module.scss";
import { Link } from "react-router-dom";
import { PATHS } from "utils/paths";
import SvgImage from "components/svgImage/svgImage";
import { GyroSvgEnum } from "utils/imageIconEnum";

function gyroLoginContainer() {
    const dispatch = useDispatch();

    const handleContinueClick = () => {
        // dispatch login
    };

    return (
        <div className="gyro-login-container">
            <SvgImage svg={GyroSvgEnum.AtlassianLogo} />
            <div className="gyro-login">
                <h6>Log in to your account</h6>

                <div className="gyro-login-input">
                    <GyroInput type={"text"} placeholder={"Enter email"} width={"100%"} height={"100%"} />
                </div>

                <div className="gyro-login-input">
                    <GyroInput type={"password"} placeholder={"Enter password"} width={"100%"} height={"100%"} />
                </div>

                <GyroButton text="Continue" className="gyro-login-input" />

                <div className="gyro-login-hr" />

                <div className="gyro-login-links">
                    <Link to={PATHS.ForgotPassword}>Forgor 💀 password?</Link>
                    <p>•</p>
                    <Link to={PATHS.Register}>Create an account</Link>
                </div>
            </div>
        </div>
    );
}

export default gyroLoginContainer;
