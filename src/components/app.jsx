import * as React from "react";
import {ModalActions} from "../context.js";

import TodoList from "./todoList.jsx";
import {FilterDesktop, FilterButton} from "./filter.jsx";
import ChangeThemeButton from "./changeTheme.jsx";
import Modal from "./modal.jsx";
import {AddTodoButton} from "./todoModal.jsx";
import {IconOptions} from "./icons.jsx";

import "./app.css";

/**
@type {() => React.ReactElement} */
function App() {
    return (
        <>
            <h1 className="visual-hidden">React Todo App</h1>
            <header>
                <FilterButton
                    className="header-button left"
                    onClick={ModalActions.openFilter}
                >
                    <IconOptions/>
                </FilterButton>
                <AddTodoButton className="header-button center"/>
                <ChangeThemeButton className="header-button right"/>
            </header>
            <div className="container">
                <main>
                    <TodoList/>
                </main>
                <FilterDesktop/>
            </div>
            <footer>
                <p>
                     by <a
                        className=""
                        href="https://github.com/AxelArielSaravia/"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        Axel Ariel Saravia
                    </a>
                </p>
            </footer>
            <Modal/>
        </>
    );
}

export default App;
