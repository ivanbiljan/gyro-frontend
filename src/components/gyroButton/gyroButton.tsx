import "./gyroButton.scss";

export interface GyroButtonProps {
    text: string;
    color: string;
    textColor: string;
    onClick?: () => void;
    width?: string;
    height?: string;
}

function GyroButton(props: GyroButtonProps) {
    return (
        <button
            className="gyro-button"
            onClick={props.onClick}
            style={{
                width: props.width,
                height: props.height,
                backgroundColor: props.color,
                color: props.textColor,
            }}
        >
            {props.text}
        </button>
    );
}

export default GyroButton;
