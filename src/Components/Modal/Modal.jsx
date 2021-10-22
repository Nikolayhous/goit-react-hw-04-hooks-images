import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import IconButton from '../IconButton';
import { ReactComponent as AddIcon } from '../../Icon/add_close.svg';
import s from './Modal.module.css';
import { useEffect } from 'react';

function Modal({ onModal, children }) {
    useEffect(() => {
        const handleKeyDown = e => {
            if (e.code === 'Escape') {
                onModal();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        window.removeEventListener('keydown', handleKeyDown);
    }, [onModal]);

    const handBackdropClick = e => {
        if (e.currentTarget === e.target) {
            onModal();
        }
    };

    return createPortal(
        <div className={s.Overlay} onClick={handBackdropClick}>
            <div className={s.Modal}>
                {children}
                <IconButton onClick={onModal} aria-label="close modal">
                    <AddIcon width="35" height="35" />
                </IconButton>
            </div>
        </div>,
        document.getElementById('modalRoot'),
    );
}

Modal.propTypes = {
    onModal: PropTypes.func.isRequired,
    children: PropTypes.node,
};

export default Modal;
