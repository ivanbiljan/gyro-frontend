import GyroButton from "components/gyroButton/gyroButton";
import GyroInput from "components/gyroInput/gyroInput";
import { useDispatch } from "react-redux";
import "./gyroLoginContainer.scss";
import variables from "./../../_variables.module.scss";

function gyroLoginContainer() {
    const dispatch = useDispatch();

    const handleContinueClick = () => {
        // dispatch login
    };

    return (
        <div className="gyro-login-container">
            <div className="gyro-login">
                <h6>Log in to your account</h6>

                <div className="gyro-login-input">
                    <GyroInput type={"text"} placeholder={"Enter email"} width={"100%"} height={"100%"} />
                </div>

                <div className="gyro-login-input">
                    <GyroInput type={"password"} placeholder={"Enter password"} width={"100%"} height={"100%"} />
                </div>

                <GyroButton
                    text="Continue"
                    width="100%"
                    height="2.5rem"
                    color={variables.bluecolor}
                    textColor={variables.whitecolor}
                />

                <div className="gyro-login-hr" />

                <div className="gyro-login-links">
                    <a href="#">Forgor 💀 password?</a>
                    <p>•</p>
                    <a href="#">Create an account</a>
                </div>
            </div>
        </div>
    );
}

export default gyroLoginContainer;
