import * as React from "react";
import {useState} from "react";

import {ModalState} from "../context.js";
import InitModal from "./initModal.jsx";
import {AddTodoModal, EditTodoModal} from "./todoModal.jsx";
import {FilterModal} from "./filter.jsx";

import "./modal.css";


/**
@type {() => React.ReactElement} */
function Modal() {
    ModalState.dispatch = useState(true)[1];
    const display = ModalState.show ? "" : "display-none";

    const modalChild = (
        ModalState.type === "init" ? <InitModal/>
        : ModalState.type === "add" ? <AddTodoModal/>
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
