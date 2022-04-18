import GyroButton from "components/gyroButton/gyroButton";
import GyroInput from "components/gyroInput/gyroInput";
import variables from "./../../_variables.module.scss";
import "./gyroRegisterContainer.scss";

function GyroRegisterContainer() {
    return (
        <div className="gyro-register-container">
            <div className="gyro-register">
                <h6>Sign up for your account</h6>

                <div className="gyro-register-input">
                    <GyroInput type={"text"} placeholder={"Enter email address"} width={"100%"} height={"100%"} />
                </div>

                <div className="gyro-register-input">
                    <GyroInput type={"text"} placeholder={"Enter full name"} width={"100%"} height={"100%"} />
                </div>

                <div className="gyro-register-input">
                    <GyroInput type={"password"} placeholder={"Create password"} width={"100%"} height={"100%"} />
                </div>

                <p>By signing up, I accept the Gyro Cloud Terms of Service and acknowledge the Privacy Policy</p>

                <GyroButton
                    text="Sign up"
                    width="100%"
                    height="2.5rem"
                    color={variables.bluecolor}
                    textColor={variables.whitecolor}
                />

                <div className="gyro-register-hr" />

                <div className="gyro-register-links">
                    <a href="#">Already have a Gyro account? Log in</a>
                </div>
            </div>
        </div>
    );
}

export default GyroRegisterContainer;
