import {Modal} from "shared/ui/Modal";
import {LoginForm} from "../LoginForm/LoginForm";

interface Props {
    isOpen?: boolean;
    onClose?: () => void;
}

export const LoginModal = (props: Props) => {
    const {
        isOpen,
        onClose
    } = props;

    const closeHandler = () => {
        onClose?.();
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={closeHandler}
            lazy
        >
            <LoginForm/>
        </Modal>
    );
};