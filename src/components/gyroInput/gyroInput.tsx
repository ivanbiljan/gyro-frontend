import "./gyroInput.scss";

export interface GyroInputProps {
    placeholder: string;
    onTextChange?: (event: any) => void;
    type: "text" | "password";
    name?: string;
    defaultValue?: string;
    header?: string;
    disabled?: boolean;
    value?: string;
    onEnterClick?: () => void;
    autofocus?: boolean;
    error?: string;
    width?: string;
    height?: string;
}

function GyroInput(props: GyroInputProps) {
    const handleKeypress = (e: any) => {
        if (props.onEnterClick && e.charCode === 13) {
            props.onEnterClick();
        }
    };

    return (
        <div className="gyro-input-wrapper" style={{ width: props.width, height: props.height }}>
            <input
                name={props.name}
                className="gyro-input"
                type={props.type}
                placeholder={props.placeholder}
                onKeyPress={handleKeypress}
                onChange={props.onTextChange}
            />
        </div>
    );
}

export default GyroInput;
