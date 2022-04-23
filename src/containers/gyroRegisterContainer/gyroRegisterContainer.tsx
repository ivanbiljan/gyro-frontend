import GyroButton from "components/gyroButton/gyroButton";
import GyroInput from "components/gyroInput/gyroInput";
import SvgImage from "components/svgImage/svgImage";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { nameof } from "ts-simple-nameof";
import { GyroSvgEnum } from "utils/imageIconEnum";
import { PATHS } from "utils/paths";
import variables from "./../../_variables.module.scss";
import "./gyroRegisterContainer.scss";

interface RegistrationForm {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
}

function GyroRegisterContainer() {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState<RegistrationForm>({
        email: "",
        firstName: "",
        lastName: "",
        password: "",
    });

    const handleFormInputChange = (event: Event) => {
        const target = event.target as HTMLInputElement;
        setFormData({ ...formData, [target.name]: target.value });
    };

    const showTodoToast = () => toast("This item is currently TODO");

    useEffect(() => console.log(formData), [formData]);

    return (
        <>
            <div className="gyro-register-container">
                <SvgImage svg={GyroSvgEnum.AtlassianLogo} />
                <div className="gyro-register">
                    <h6>Sign up for your account</h6>

                    <div className="gyro-register-input">
                        <GyroInput
                            name={nameof<RegistrationForm>(f => f.email)}
                            type={"text"}
                            placeholder={"Enter email address"}
                            width={"100%"}
                            height={"100%"}
                            onTextChange={handleFormInputChange}
                        />
                    </div>

                    <div className="gyro-register-input">
                        <GyroInput
                            name={nameof<RegistrationForm>(f => f.firstName)}
                            type={"text"}
                            placeholder={"Enter first name"}
                            width={"100%"}
                            height={"100%"}
                            onTextChange={handleFormInputChange}
                        />
                    </div>

                    <div className="gyro-register-input">
                        <GyroInput
                            name={nameof<RegistrationForm>(f => f.lastName)}
                            type={"text"}
                            placeholder={"Enter last name"}
                            width={"100%"}
                            height={"100%"}
                            onTextChange={handleFormInputChange}
                        />
                    </div>

                    <div className="gyro-register-input">
                        <GyroInput
                            name={nameof<RegistrationForm>(f => f.password)}
                            type={"password"}
                            placeholder={"Create password"}
                            width={"100%"}
                            height={"100%"}
                            onTextChange={handleFormInputChange}
                        />
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
                        <Link to={PATHS.Login}>Already have a Gyro account? Log in</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default GyroRegisterContainer;
