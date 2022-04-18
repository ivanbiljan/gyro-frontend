import classNames from "classnames";
import "./gyroButton.scss";

export interface GyroButtonProps {
    text: string;
    color?: "blue" | "white";
    className?: string;
    onClick?: () => void;
}

function GyroButton(props: GyroButtonProps) {
    const buttonColor = `gyro-button-${props.color ?? "blue"}`;

    return (
        <button className={classNames("gyro-button", buttonColor, props.className)} onClick={props.onClick}>
            {props.text}
        </button>
    );
}

export default GyroButton;
