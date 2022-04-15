import { useSelector } from "react-redux";
import { ModalBaseProps, ShowModalPayload } from "redux/models/modalModels";
import { RootState } from "redux/store";
import { ModalTypeEnum } from "utils/enums";
import "./gyroModalContainer.scss";

const modalMapping: { [modalType in ModalTypeEnum]: Function } = {
    [ModalTypeEnum.None]: () => {
        <></>;
    },
};

function GyroModalContainer() {
    const { modalDescriptors } = useSelector((state: RootState) => state.modal);

    if (modalDescriptors.length == 0) {
        return <></>;
    }

    return (
        <>
            {modalDescriptors.map((value: ShowModalPayload<ModalBaseProps>) => {
                const Modal = modalMapping[value.modalType];
                return <Modal key={value.modalType} {...value.actionContext} />;
            })}
        </>
    );
}

export default GyroModalContainer;
