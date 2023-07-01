import * as React from "react";
import {useState} from "react";
import {TodosState} from "../context.js";

import Todo from "./todoItem.jsx";

/**
@type {Array<React.ReactNode>} */
const ReactTodosSelected = [];

/**
@type {() => Array<React.ReactNode>} */
function TodoList() {
    TodosState.selectedDispatch = useState(true)[1];
    ReactTodosSelected.length = 0;
    for (const todo of TodosState.selected) {
        ReactTodosSelected.push(
            <Todo key={todo} id={todo}/>
        );
    }
    return ReactTodosSelected;
}

export default TodoList;
