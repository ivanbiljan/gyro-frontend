import GyroButton from "components/gyroButton/gyroButton";
import GyroInput from "components/gyroInput/gyroInput";
import SvgImage from "components/svgImage/svgImage";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { GyroSvgEnum } from "utils/imageIconEnum";
import { PATHS } from "utils/paths";
import variables from "./../../_variables.module.scss";
import "./gyroRegisterContainer.scss";

function GyroRegisterContainer() {
    const navigate = useNavigate();

    const showTodoToast = () => toast("This item is currently TODO");

    const navigateToLoginScreen = () => navigate(PATHS.Login);

    return (
        <>
            <div className="gyro-register-container">
                <SvgImage svg={GyroSvgEnum.AtlassianLogo} />
                <div className="gyro-register">
                    <h6>Sign up for your account</h6>

                    <div className="gyro-register-input">
                        <GyroInput type={"text"} placeholder={"Enter email address"} width={"100%"} height={"100%"} />
                    </div>

                    <div className="gyro-register-input">
                        <GyroInput type={"text"} placeholder={"Enter first name"} width={"100%"} height={"100%"} />
                    </div>

                    <div className="gyro-register-input">
                        <GyroInput type={"text"} placeholder={"Enter last name"} width={"100%"} height={"100%"} />
                    </div>

                    <div className="gyro-register-input">
                        <GyroInput type={"password"} placeholder={"Create password"} width={"100%"} height={"100%"} />
                    </div>

                    <p>
                        By signing up, I accept the <span className="blue-highlight">Gyro Cloud Terms of Service</span>{" "}
                        and acknowledge the <span className="blue-highlight">Privacy Policy</span>
                    </p>

                    <GyroButton text="Sign up" className="gyro-register-input" />

                    <p>OR</p>

                    <GyroButton
                        text="Continue with Google"
                        color="white"
                        className="gyro-register-input"
                        onClick={showTodoToast}
                    />

                    <GyroButton
                        text="Continue with GitHub"
                        color="white"
                        className="gyro-register-input"
                        onClick={showTodoToast}
                    />

                    <div className="gyro-register-hr" />

                    <div className="gyro-register-links">
                        <a href="" onClick={navigateToLoginScreen}>
                            Already have a Gyro account? Log in
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default GyroRegisterContainer;
