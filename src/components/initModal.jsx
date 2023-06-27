import {ModalActions} from "../context.js";

import {IconClose} from "./icons.jsx";

/**
@type {() => React.ReactElement} */
function InitModal() {
    return (
        <>
            <button
                type="button"
                className="close-button"
                title="close"
                onClick={ModalActions.close}
            >
                <IconClose/>
            </button>
            <section className="section">
                <h3>Hello</h3>
                <div className="section">
                    <p>I am Axel Ariel Saravia.</p>
                    <p>I create this ToDo app for fun.</p>
                    <p>Enjoy it.</p>
                </div>
                <hr/>
                <section className="section">
                    <h4>Features:</h4>
                    <ul className="section">
                        <li><p>Use React</p></li>
                        <li>
                            <p>
                                Minimalist and responsive design
                            </p>
                        </li>
                        <li>
                            <p>
                                Use the browser local storage
                                (I don't keeps your data)
                            </p>
                        </li>
                    </ul>
                </section>
            </section>
            <div className="complete-button-parent">
                <button
                    className="complete-button"
                    type="button"
                    title="don't show again"
                    onClick={ModalActions.completeInit}
                >
                    don't show again
                </button>
            </div>
        </>
    );
}

export default InitModal;
