import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { ModalBaseProps } from "redux/models/modalModels";
import { hideModal } from "redux/reducers/modalReducer";
import "./gyroModal.scss";

export interface GyroModalProps extends ModalBaseProps {
    title: string;
    closeButtonText?: string;
    confirmButtonText?: string;
    onConfirm?: () => void;
    children: React.ReactNode;
    className?: string;
    confirmButtonState: boolean;
}

function GyroModal(props: GyroModalProps) {
    const { title, onConfirm, children, closeButtonText, confirmButtonText, className, confirmButtonState } = props;

    const dispatch = useDispatch();

    const onCancelClick = () => {
        dispatch(hideModal());
    };

    const onOkClick = () => {
        if (onConfirm) {
            onConfirm();
        }

        dispatch(hideModal());
    };
    return (
        <Modal show={true} onHide={onCancelClick} className={`gyro-modal ${className ? className : ""}`}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{children}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onCancelClick}>
                    {closeButtonText ? closeButtonText : "Close"}
                </Button>
                {onConfirm && (
                    <Button variant="primary" onClick={onOkClick} disabled={!confirmButtonState}>
                        {confirmButtonText ?? "Confirm"}
                    </Button>
                )}
            </Modal.Footer>
        </Modal>
    );
}

export default GyroModal;
