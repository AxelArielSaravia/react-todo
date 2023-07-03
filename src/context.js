import {fakeDispatch, changeState, createId} from "./utils.js";

const TodosState = {
    // Keeps Existing Todos Ids
    /**
    @type {Array<string>} */
    ids: (function () {
        //initialize IDS
        const storageIds = localStorage.getItem("todo.ids");
        if (storageIds !== null) {
            if (storageIds.length > 2) {
                //throw an error in bad json schemma
                try {
                    return JSON.parse(localStorage["todo.ids"]);
                } catch {
                // if there is a error assume that everything
                // in localstorage is wrong
                    const theme = localStorage.getItem("theme");
                    localStorage.clear();
                    localStorage.setItem("todo.ids", "[]");
                    if (theme !== null) {
                        localStorage.setItem("theme", theme);
                    }
                }
            }
        } else {
            localStorage.setItem("todo.ids", "[]");
        }
        return [];
    }()),
    // Keeps all Todos objects
    /**
    @type {{[k: string]: Todo}} */
    todos: {},
    // This are the todos that render in the view
    /**
    @type {Array<string>} */
    selected: [],
    /**
    @type {React.Dispatch<React.SetStateAction<boolean>>}*/
    selectedDispatch: fakeDispatch,
    /**
    @type {{[k:string]: React.Dispatch<React.SetStateAction<boolean>>}} */
    todosDispatch: {},
    /**
    @type {(id: string, todo: Todo) => undefined} */
    addTodo(id, todo) {
        TodosState.ids.push(id);
        TodosState.todos[id] = todo;
        TodosState.todosDispatch[id] = fakeDispatch;
    },
    /**
    @type {(id: string) => boolean} */
    removeTodo(id) {
        let i = TodosState.ids.indexOf(id);
        if (i !== -1) {
            delete TodosState.todos[id];
            delete TodosState.todosDispatch[id];

            for (; i < TodosState.ids.length - 1; i += 1) {
                TodosState.ids[i] = TodosState.ids[i + 1];
            }
            TodosState.ids.pop();
            return true;
        }
        return false;
    },
    /**
    @type {(id: string) => boolean} */
    removeSelected(id) {
        let i = TodosState.selected.indexOf(id);
        if (i !== -1) {
            const selected = TodosState.selected;
            for (; i < selected.length - 1; i += 1) {
                selected[i] = selected[i + 1];
            }
            TodosState.selected.pop();
            return true;
        }
        return false;
    },
    /**
    @type {(color: Colors) => undefined} */
    filterByColor(color) {
        let head = 0;
        for (const id of TodosState.selected) {
            if (TodosState.todos[id].color === color) {
                TodosState.selected[head] = id;
                head += 1;
            }
        }
        // Remove the extra ids at the end
        if (head < TodosState.selected.length) {
            TodosState.selected.length = head;
        }
    },
    /**
    @type {(tag: string) => undefined} */
    filterByTag(tag) {
        let head = 0;
        for (const id of TodosState.selected) {
            const todo = TodosState.todos[id];
            //we assume that todo exist, but can be undefiend;
            for (const todoTag of todo.tags) {
                if (todoTag === tag) {
                    TodosState.selected[head] = id;
                    head += 1;
                }
            }
        }
        // Remove the extra ids at the end
        if (head < TodosState.selected.length) {
            TodosState.selected.length = head;
        }
    },
    /**
    @type {(filterState: FilterState) => undefined} */
    filter(filterState) {
        if (filterState.status === "active") {
            let head = 0;
            for (const id of TodosState.ids) {
                if (!TodosState.todos[id].completed) {
                    TodosState.selected[head] = id;
                    head += 1;
                }
            }
            //Remove the extra ids at the end
            if (head < TodosState.selected.length) {
                TodosState.selected.length = head;
            }
        } else if (filterState.status === "completed") {
            let head = 0;
            for (const id of TodosState.ids) {
                if (TodosState.todos[id].completed) {
                    TodosState.selected[head] = id;
                    head += 1;
                }
            }
            //Remove the extra ids at the end
            if (head < TodosState.selected.length) {
                TodosState.selected.length = head;
            }
        } else {
            for (let i = 0; i < TodosState.ids.length; i += 1) {
                TodosState.selected[i] = TodosState.ids[i];
            }
        }

        if (filterState.colors.length > 0) {
            let head = 0;
            for (const id of TodosState.selected) {
                for (const color of filterState.colors) {
                    if (TodosState.todos[id].color === color) {
                        TodosState.selected[head] = id;
                        head += 1;
                        break;
                    }
                }
            }
            //Remove the extra ids at the end
            if (head < TodosState.selected.length) {
                TodosState.selected.length = head;
            }
        }
        if (filterState.tags.length > 0) {
            let head = 0;
            for (const id of TodosState.selected) {
                include:
                for (const tag of filterState.tags) {
                    for (const todotag of TodosState.todos[id].tags) {
                        if (todotag === tag) {
                            TodosState.selected[head] = id;
                            head += 1;
                            break include;
                        }
                    }
                }
            }
            //Remove the extra ids at the end
            if (head < TodosState.selected.length) {
                TodosState.selected.length = head;
            }
        }
    }
};

const ModalState = {
    /**
    @type {"edit" | "add" | "filter" | "init"} */
    type: "edit",
    /**
    @type {boolean} */
    show: false,
    /**
    @type {string} */
    editId: "",
    dispatch: fakeDispatch
};

const FilterState = {
    /**
    @type {FilterColors} */
    colors: [],
    /**
    @type {FilterStatus} */
    status: "all",
    /**
    @type {Array<string>} */
    tags: [],
    /**
    @type {(tags: Array<string>) => boolean} */
    includeTags(tags) {
        let end = tags.length;
        if (end < FilterState.tags.length) {
            return false;
        }
        let ctag = "";
        outer: for (const ftag of FilterState.tags) {
            for (let i = 0; i < end; i += 1) {
                ctag = tags[i];
                if (ctag === ftag) {
                    tags[i] = tags[end - 1];
                    tags[end - 1] = ctag;
                    end -= 1;
                    continue outer;
                }
            }
            return false;
        }
        return true;
    },
    /**
    @type {(color: Colors) => boolean} */
    includeColor(color) {
        for (const filterColor of FilterState.colors) {
            if (color === filterColor) {
                return true;
            }
        }
        return false;
    }
};

const TagsState = {
    /**
    @type {{[k: string]: number}} */
    tags: {},
    /**
    @type {(tags: Array<string>, i?: maybe<number>) => undefined} */
    addTags(tags, i) {
        if (i === undefined) {
            i = 0;
        }
        for (; i < tags.length; i += 1) {
            const tag = tags[i];
            if (TagsState.tags[tag] !== undefined) {
                TagsState.tags[tag] += 1;
            } else {
                TagsState.tags[tag] = 1;
            }
        }
    },
    /**
    @type {(tags: Array<string>, i?: maybe<number>) => undefined} */
    removeTags(tags, i) {
        if (i === undefined) {
            i = 0;
        }
        for (; i < tags.length; i += 1) {
            const tag = tags[i];
            if (TagsState.tags[tag] !== undefined) {
                TagsState.tags[tag] -= 1;
                if (TagsState.tags[tag] === 0) {
                    delete TagsState.tags[tag];
                }
            }
        }
    }
};

//Return -1 if are equals
//otherwise return the index of the first inequality
/**
@type {<T>(A: Array<T>, B: Array<T>) => number} */
function compareArrays(A, B) {
    if (
        A.length !== B.length
        && (A.length === 0 || B.length === 0)
    ) {
        return 0;
    }
    const min = (
        A.length < B.length
        ? A.length
        : B.length
    );
    for (let i = 0; i < min; i += 1) {
        if (A[i] !== B[i]) {
            return i;
        }
    }
    if (A.length !== B.length) {
        return min;
    }
    return -1;
}

// ACTIONS
// We call the dispatches when we need to update the view

// Actions that affect only a one todo
const TodoActions = {
    /**
    @type {(
        id: string,
        date: boolean,
        text: maybe<string>,
        color: maybe<Colors>,
        tags: maybe<Array<string>>
    ) => undefined} */
    edit(id, date, text, color, tags) {
        const todo = TodosState.todos[id];
        if (todo !== undefined) {
            let change = false;
            if (date) {
                change = true;
                todo.date = Date.now();
                //moved at the end
                let i = TodosState.ids.indexOf(id);
                let end = TodosState.ids.length - 1;
                for (; i < end; i += 1) {
                    TodosState.ids[i] = TodosState.ids[i + 1];
                }
                TodosState.ids[end] = id;

                i = TodosState.selected.indexOf(id);
                end = TodosState.selected.length - 1;
                for (; i < end; i += 1) {
                    TodosState.selected[i] = TodosState.selected[i + 1];
                }
                TodosState.selected[end] = id;
                localStorage.setItem("todo.ids", JSON.stringify(TodosState.ids));
                TodosState.selectedDispatch(changeState);
            }
            if (text !== undefined && text !== todo.text) {
                change = true;
                todo.text = text;
            }
            if (color !== undefined && color !== todo.color) {
                change = true;
                todo.color = color;
            }
            if (tags !== undefined) {
                const index = compareArrays(tags, todo.tags);
                if (index !== -1) {
                    change = true;

                    TagsState.removeTags(todo.tags, index);
                    for (let i = index; i < tags.length; i += 1) {
                        todo.tags[i] = tags[i];
                    }
                    if (tags.length < todo.tags.length) {
                        todo.tags.length = tags.length;
                    }
                    TagsState.addTags(tags, index);
                }
            }
            if (change) {
                localStorage.setItem(`todo.${id}`, JSON.stringify(todo));
                TodosState.todosDispatch[id](changeState);
            }
        }
    },
    /**
    @type {(id: string) => undefined} */
    toggleComplete(id) {
        const todo = TodosState.todos[id];
        if (todo !== undefined) {
            todo.completed = !todo.completed;
            localStorage.setItem(`todo.${id}`, JSON.stringify(todo));
            TodosState.todosDispatch[id](changeState);
            if (
                (todo.completed && FilterState.status === "active")
                || (!todo.completed && FilterState.status === "completed")
            ) {
                TodosState.removeSelected(id);
                TodosState.selectedDispatch(changeState);
            }
        }
    }
}

// Actions that affect all todos in the list or some.
// This actions dispatch SelectedTodos change
const TodoListActions = {
    /**
    @type {(
        text: string,
        color: maybe<Colors>,
        tags: maybe<Array<string>>
    ) => undefined} */
    add(text, color, tags) {
        const id = createId();
        const newTodo = {
            color: (
                color === undefined
                ? "default"
                : color
            ),
            completed: false,
            date: Date.now(),
            id,
            tags: (
                tags === undefined
                ? []
                : Array.from(tags)
            ),
            text
        };

        TodosState.addTodo(id, newTodo);
        localStorage.setItem(`todo.${id}`, JSON.stringify(newTodo));
        localStorage.setItem("todo.ids", JSON.stringify(TodosState.ids));

        // set TagsState
        if (newTodo.tags.length > 0) {
            TagsState.addTags(newTodo.tags);
        }

        //Add to SelectedTodos and dispatch selectedTodos change
        if (FilterState.status !== "completed") {
            if (
                FilterState.colors.length > 0
                && !FilterState.includeColor(newTodo.color)
            ) {
                return;
            }
            if (
                FilterState.tags.length > 0
                && (
                    newTodo.tags.length === 0
                    || !FilterState.includeTags(newTodo.tags)
                )
            ) {
                return;
            }
            TodosState.selected.push(id);
            TodosState.selectedDispatch(changeState);
        }
    },
    /**
    @type {() => undefined} */
    clearCompleted() {
        let todoTr = -1;
        for (let i = 0; i < TodosState.ids.length; i += 1) {
            const id = TodosState.ids[i];
            const todo = TodosState.todos[id];
            if (todo.completed) {

                TagsState.removeTags(todo.tags);

                delete TodosState.todos[id];
                delete TodosState.todosDispatch[id];
                localStorage.removeItem(`todo.${id}`);

                if (todoTr === -1) {
                    todoTr = i;
                }
            } else {
                if (todoTr !== -1) {
                    TodosState.ids[todoTr] = TodosState.ids[i];
                    todoTr += 1;
                }
            }
        }
        //does no change
        if (todoTr === -1) {
            return;
        }
        //remove the extra ids at the end
        TodosState.ids.length = todoTr;
        localStorage.setItem("todo.ids", JSON.stringify(TodosState.ids));

        switch (FilterState.status) {
            case "active": return;
            case "all": {
                let selectTr = -1;
                for (let i = 0; i < TodosState.selected.length; i += 1) {
                    const id = TodosState.selected[i];
                    if (TodosState.todos[id] === undefined) {
                        if (selectTr === -1) {
                            selectTr = i;
                        }
                    } else {
                        if (selectTr !== -1) {
                            TodosState.selected[selectTr] = TodosState.selected[i]
                            selectTr += 1;
                        }
                    }
                }
                if (selectTr !== -1) {
                    TodosState.selected.length = selectTr;
                }
            }; break;
            case "completed": {
                TodosState.selected.length = 0;
            }
        }
        TodosState.selectedDispatch(changeState);
    },
    /**
    @type {() => undefined} */
    completeAll() {
        let change = false;
        for (const id of TodosState.ids) {
            const todo = TodosState.todos[id];
            if (!todo.completed) {
                change = true;
                todo.completed = true;
                localStorage.setItem(`todo.${id}`, JSON.stringify(todo));

                if (FilterState.status === "completed") {
                    TodosState.selected.push(id);
                } else if (FilterState.status === "all") {
                    TodosState.todosDispatch[id](changeState);
                }
            }
        }
        if (!change || FilterState.status === "all") {
            return;
        }
        if (FilterState.status === "active") {
            TodosState.selected.length = 0;
        }
        TodosState.selectedDispatch(changeState);
    },
    /**
    @type {(id: string) => undefined} */
    delete(id) {
        if (TodosState.todos[id] !== undefined) {
            TagsState.removeTags(TodosState.todos[id].tags);

            TodosState.removeTodo(id);

            localStorage.removeItem(`todo.${id}`);
            localStorage.setItem("todo.ids", JSON.stringify(TodosState.ids));

            if (TodosState.removeSelected(id)) {
                TodosState.selectedDispatch(changeState);
            }
        }
    }
};

const FilterActions = {
    /**
    @type {(color: Colors, add: boolean) => undefined} */
    changeColors(color, add) {
        if (FilterState.colors.length > 0) {
            const i = FilterState.colors.indexOf(color);
            if (add) {
                if (i !== -1) {
                    return;
                }
                FilterState.colors.push(color);
                TodosState.filter(FilterState);
            } else {
            //remove
                if (i === -1) {
                    return;
                }
                FilterState.colors[i] = (
                    FilterState.colors[FilterState.colors.length - 1]
                );
                FilterState.colors.pop();
                TodosState.filter(FilterState);
            }
            TodosState.selectedDispatch(changeState);
        } else {
            if (add) {
                FilterState.colors.push(color);
                //filter the current SelectedTodos array
                TodosState.filterByColor(color);
                TodosState.selectedDispatch(changeState);
            }
        }
    },
    /**
    @type {(tag: string, add: boolean) => undefined} */
    changeTags(tag, add) {
        if (FilterState.tags.length > 0) {
            const i = FilterState.tags.indexOf(tag);
            if (add) {
                if (i !== -1) {
                    return;
                }
                FilterState.tags.push(tag);
                //filter the current SelectedTodos array
                TodosState.filterByTag(tag);
            } else {
                if (i === -1) {
                    return;
                }
                FilterState.tags[i] = (
                    FilterState.tags[FilterState.tags.length - 1]
                );
                FilterState.tags.pop();
                //filter todos again
                TodosState.filter(FilterState);
            }
            TodosState.selectedDispatch(changeState);
        } else {
            if (add) {
                FilterState.tags.push(tag);
                //filter the current SelectedTodos array
                TodosState.filterByTag(tag);
                TodosState.selectedDispatch(changeState);
            }
        }
    },
    /**
    @type {(s: FilterStatus) => undefined} */
    changeStatus(s) {
        if (FilterState.status !== s) {
            FilterState.status = s;
            //filter todos again
            TodosState.filter(FilterState);
            TodosState.selectedDispatch(changeState);
        }
    }
};

// Modal Action utiles

/**
@type {() => undefined} */
function fixRootOverflow() {
    const HRoot = document.getElementById("root");
    if (HRoot === null) {
        return;
    }
    HRoot.style.overflow = "hidden"
}
/**
@type {() => undefined} */
function removeRootOverflow() {
    const HRoot = document.getElementById("root");
   if (HRoot === null) {
        return;
    }
    HRoot.style.overflow = ""
}

const ModalActions = {
    /**
    @type {(id: string) => undefined} */
    openEdit(id) {
        ModalState.show = true;
        ModalState.type = "edit";
        ModalState.editId = id;
        fixRootOverflow();
        ModalState.dispatch(changeState);
    },
    /**
    @type {(
        date: boolean,
        text: maybe<string>,
        color: maybe<Colors>,
        tags: maybe<Array<string>>
    ) => undefined} */
    editComplete(date, text, color, tags) {
        ModalState.show = false;
        TodoActions.edit(ModalState.editId, date, text, color, tags);
        ModalState.dispatch(changeState);
        removeRootOverflow();
    },
    /**
    @type {() => undefined} */
    openAdd() {
        ModalState.show = true;
        ModalState.type = "add";
        fixRootOverflow();
        ModalState.dispatch(changeState);
    },
    /**
    @type {(
        text: string,
        color: maybe<Colors>,
        tags: maybe<Array<string>>
    ) => undefined} */
    addCompleted(text, color, tags) {
        ModalState.show = false;
        TodoListActions.add(text, color, tags);
        removeRootOverflow();
        ModalState.dispatch(changeState);
    },
    /**
    @type {() => undefined} */
    openFilter() {
        ModalState.show = true;
        ModalState.type = "filter";
        fixRootOverflow();
        ModalState.dispatch(changeState);
    },
    /**
    @type {() => undefined} */
    completeInit() {
        ModalState.show = false;
        removeRootOverflow();
        localStorage.setItem("show-init", "false");
        ModalState.dispatch(changeState);
    },
    /**
    @type {() => undefined} */
    close() {
        ModalState.show = false;
        removeRootOverflow();
        ModalState.dispatch(changeState);
    },
};

// Initialize

{ // Init TodoListState
    let tr = -1;
    const end = TodosState.ids.length;
    for (let i = 0; i < end; i += 1) {
        const id = TodosState.ids[i];
        const todo = localStorage.getItem(`todo.${id}`);
        if (todo !== null) {
            try {
                //throw an error in bad json schemma
                TodosState.todos[id] = JSON.parse(todo);
            } catch {
                localStorage.removeItem(`todo.${id}`);
                //works like the todo was null
                if (tr === -1) {
                    tr = i;
                }
                continue;
            }
            TodosState.todosDispatch[id] = fakeDispatch;
            if (tr !== -1) {
                TodosState.ids[tr] = TodosState.ids[i];
                tr += 1;
            }
        } else {
            if (tr === -1) {
                tr = i;
            }
        }
    }
    if (tr !== -1) {
        TodosState.ids.length = tr;
    }
}
{ // Init TagsState
    for (const id of TodosState.ids) {
        const todo = TodosState.todos[id];
        TagsState.addTags(todo.tags);
    }
}
{ // init Modal
    const showInit = localStorage.getItem("show-init");
    if (showInit === null || showInit === "true") {
        ModalState.show = true;
        ModalState.type = "init";
        localStorage.setItem("show-init", "true");
    } else {
        localStorage.setItem("show-init", "false");
    }
}
// Init Selected Todos
TodosState.filter(FilterState);

export {
    TodosState,
    FilterState,
    ModalState,
    TagsState,
    TodoActions,
    TodoListActions,
    FilterActions,
    ModalActions
};
