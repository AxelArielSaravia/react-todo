//@ts-check
import React, {useState} from "react";

import  {ModalState} from "../context.js";

import {AddTodoModal, EditTodoModal} from "./todoModal.jsx";
import {FilterModal} from "./filter.jsx";

import "./modal.css";



/**
@type {() => React.ReactElement} */
function Modal() {
    ModalState.dispatch = useState(true)[1];
    const display = ModalState.show ? "" : "display-none";

    const modalChild = (
        ModalState.type === "add" ? <AddTodoModal/>
        : ModalState.type === "edit" ? <EditTodoModal/>
        : /*otherwise*/ <FilterModal/>
    );

    return (
        <div className={`modal-root ${display}`}>
            <div id="modal" className="modal">
                {modalChild}
            </div>
        </div>
    );
}

export default Modal;
