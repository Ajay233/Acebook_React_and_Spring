import React from 'react'

const Modal = ({handleClose, show, children}) => {
const showHideClassName = show ? "modal display-block" : "modal display-none";
    return(
        <div className={showHideClassName}>
            <section className="modal-main">
                <span onClick={handleClose} className="close">&times;</span>
                {children}
            </section>
        </div>
    );

};

export default Modal;