import { Form } from "react-bootstrap";
import "./gyroInput.scss";

export interface GyroInputProps {
    placeholder?: string;
    onTextChange?: (event: any) => void;
    type: "text" | "password";
    defaultValue?: string;
    header?: string;
    disabled?: boolean;
    value?: string;
    onEnterClick?: () => void;
    autofocus?: boolean;
    error?: string;
}

function GyroInput(props: GyroInputProps) {
    const handleKeypress = (e: any) => {
        if (props.onEnterClick && e.charCode === 13) {
            props.onEnterClick();
        }
    };
    
    return (
        <div className="gyro-input">
            {props.header ? (
                <Form.Group>
                    <Form.Label>{props.header}</Form.Label>
                    <Form.Control
                        size="lg"
                        type={props.type}
                        placeholder={props.placeholder ?? ""}
                        onChange={props.onTextChange}
                        defaultValue={props.defaultValue}
                        disabled={props.disabled}
                        value={props.value ?? undefined}
                        onKeyPress={handleKeypress}
                        autoFocus={props.autofocus}
                        isInvalid={props.error != null}
                    />
                    <Form.Control.Feedback type="invalid">{props.error}</Form.Control.Feedback>
                </Form.Group>
            ) : (
                <Form.Group>
                    <Form.Control
                        size="lg"
                        type={props.type}
                        placeholder={props.placeholder ?? ""}
                        onChange={props.onTextChange}
                        defaultValue={props.defaultValue}
                        disabled={props.disabled}
                        value={props.value ?? undefined}
                        onKeyPress={handleKeypress}
                        autoFocus={props.autofocus}
                        isInvalid={props.error != null}
                    />
                    <Form.Control.Feedback type="invalid">{props.error}</Form.Control.Feedback>
                </Form.Group>
            )}
        </div>
    );
}

export default GyroInput;
