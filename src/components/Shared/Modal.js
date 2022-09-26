import { Fragment } from 'react';
import ReactDom from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = props => {
    return (<div className={classes.backdrop} onClick={props.onCloseCart}></div>)
};
const ModalOverlay = props => {
    return (<div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>)
};
const modalElement = document.getElementById('overlays');
const Modal = props => {
    return (
        <Fragment>
            {ReactDom.createPortal(<Backdrop onCloseCart={props.onCloseCart}/>, modalElement)}
            {ReactDom.createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>,
                modalElement
            )}
        </Fragment>
    )
}

export default Modal;