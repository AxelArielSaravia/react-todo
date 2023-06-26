import {useState} from "react";
import {
    TodosState,
    TodoActions,
    TodoListActions,
} from "../context.js";

import {Tag} from "./tag.jsx";
import {EditTodoButton} from "./todoModal.jsx";
import {IconClose} from "./icons.jsx";

import "./todoItem.css"

const DateTimeFormatter = Intl.DateTimeFormat(
    undefined,
    {
        dateStyle: "short",
        timeStyle: "short"
    }
);

/**
@type {React.MouseEventHandler<HTMLButtonElement>} */
function deleteTodo(e) {
    const id = e.currentTarget.getAttribute("data-id");
    if (id !== null) {
        TodoListActions.delete(id);
    }
}

/**
@type {React.MouseEventHandler<HTMLButtonElement>} */
function toggleCompleted(e) {
    const id = e.currentTarget.getAttribute("data-id");
    if (id !== null) {
        TodoActions.toggleComplete(id);
    }
}

/**
@type {(this: string, tag: string) => React.ReactElement} */
function forEachTag(tag) {
    return <Tag key={`${this}-tag-${tag}`} text={tag}/>;
}

const TODO_CLASS_NAME = "todo-item";
/**
@type {(p: {id: string}) => React.ReactElement} */
function Todo({id}) {
    TodosState.todosDispatch[id] = useState(false)[1];
    const todo = TodosState.todos[id];
    const styleVars = {
        "--color": `var(--color-${todo.color})`,
        "--right-background-color": `var(--color-${todo.color})`,
    };
    const todoClassName = (
        todo.completed
        ? TODO_CLASS_NAME + " completed"
        : TODO_CLASS_NAME
    );
    return (
        <div className={todoClassName} style={styleVars}>
            <div className="left">
                <div className="todo-header">
                    <p>
                        {DateTimeFormatter.format(todo.date)}
                    </p>
                    {
                        todo.completed
                        ? (
                            <button
                                type="button"
                                aria-label="delete"
                                title="delete todo"
                                data-id={id}
                                onClick={deleteTodo}
                            >
                                <IconClose/>
                            </button>
                        )
                        : <EditTodoButton id={id}/>
                    }
                </div>
                <div className="todo-main">
                    <p>{todo.text}</p>
                </div>
                {todo.tags.length > 0 && (
                    <div className="todo-footer">
                        {Array.from(todo.tags, forEachTag, id)}
                    </div>
                )}
            </div>
            <div className="right">
                <button
                    type="button"
                    aria-label="toggle completed"
                    title={
                        todo.completed
                        ? "mark as non completed"
                        : "mark as competed"
                    }
                    data-id={id}
                    onClick={toggleCompleted}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="icon icon-check-square"
                        viewBox="0 0 16 16"
                    >
                        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                        {todo.completed && (
                            <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z"/>
                        )}
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default Todo;
