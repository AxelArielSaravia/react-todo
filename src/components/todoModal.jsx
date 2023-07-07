import * as React from "react";
import {useState} from "react";

import {fakeDispatch, changeState} from "../utils.js";
import {ModalActions, TagsState, TodosState} from "../context.js";

import ColorContainer from "./color.jsx";
import {
    TagAddButton,
    TagDeleteButton,
    TagSection
} from "./tag.jsx";

import {IconClose, IconAdd} from "./icons.jsx";

const TodoModalState = {
    /**
    @type {Colors} */
    color: "default",
    /**
    @type {string} */
    text: "",
    /**
    @type {boolean} */
    date: false,
    /**
    @type {Array<string>} */
    tagsSelected: [],
    /**
    @type {Array<string>} */
    tagsSuggested: [],
    /**
    @type {string} */
    newTag: "",
    reset() {
        TodoModalState.color = "default";
        TodoModalState.text = "";
        TodoModalState.date = false;
        TodoModalState.tagsSelected.length = 0;
        TodoModalState.tagsSuggested.length = 0;
        TodoModalState.newTag = "";
    },
};

const TodoModalDispatch = {
    /**
    @type {{[k in Colors]: React.Dispatch<React.SetStateAction<boolean>>}} */
    color: {
        default: fakeDispatch,
        purple: fakeDispatch,
        red: fakeDispatch,
        brown: fakeDispatch,
        blue:fakeDispatch,
        yellow: fakeDispatch,
        green: fakeDispatch,
        pink: fakeDispatch
    },
    date: {
        true: fakeDispatch,
        false: fakeDispatch
    },
    text: fakeDispatch,
    tagsSelected: fakeDispatch,
    tagsSuggested: fakeDispatch,
    newTag:fakeDispatch,
};


// Text section

/**
@type {React.ChangeEventHandler<HTMLTextAreaElement>} */
function setText(e) {
    const value = e.currentTarget.value;
    TodoModalState.text = value;
    TodoModalDispatch.text(changeState);
}

/**
@type {() => React.ReactElement} */
function TodoText() {
    TodoModalDispatch.text = useState(true)[1];
    return (
        <textarea
            name="text"
            title="todo text"
            value={TodoModalState.text}
            onChange={setText}
            rows={2}
            required
        />
    );
}


// Date section

const setDate = {
    /**
    @type {React.ChangeEventHandler<HTMLInputElement>} */
    toFalse() {
        TodoModalState.date = false;
        TodoModalDispatch.date.true(changeState);
        TodoModalDispatch.date.false(changeState);
    },
    /**
    @type {React.ChangeEventHandler<HTMLInputElement>} */
    toTrue() {
        TodoModalState.date = true;
        TodoModalDispatch.date.true(changeState);
        TodoModalDispatch.date.false(changeState);
    }
}

/**
@type {(p: {
    value: boolean,
    onChange: React.ChangeEventHandler<HTMLInputElement>,
    TodoModalDispatchName: "true" | "false"
}) => React.ReactElement} */
function TodoDateRadio({
    value,
    onChange,
    TodoModalDispatchName
}) {
    TodoModalDispatch.date[TodoModalDispatchName] = useState(false)[1];
    return (
        <input
            className="visual-hidden"
            type="radio"
            checked={value === TodoModalState.date}
            onChange={onChange}
        />
    );
}


// Color section

/**
@type {React.ChangeEventHandler<HTMLInputElement>} */
function setColor(e) {
    /**
    @type {Colors} */
    const color = e.currentTarget.value;
    const prevColor = TodoModalState.color;
    if (color !== prevColor) {
        TodoModalState.color = color;
        TodoModalDispatch.color[color](changeState);
        TodoModalDispatch.color[prevColor](changeState);
    }
}

/**
@type {(color: Colors) => boolean} */
function checkColor(color) {
    return TodoModalState.color === color;
}


// Tags Section

/**
@type {Array<React.ReactElement>} */
const TMTagsSelectedArray = [];

/**
@type {Array<React.ReactElement>} */
const TMTagsSuggestedArray = [];

/**
@type {(tags: Array<string>) => undefined} */
function populateTagsSelected(tags) {
    TodoModalState.tagsSelected.length = 0;
    TMTagsSelectedArray.length = 0;
    for (let i = 0; i < tags.length; i += 1) {
        const tag = tags[i];
        TodoModalState.tagsSelected.push(tag);
        TMTagsSelectedArray.push(
            <TagDeleteButton
                key={`tag-${tag}`}
                tag={tag}
                index={i}
                onClick={removeTag}
            />
        );
    }
}

/**
@type {React.MouseEventHandler<HTMLButtonElement>} */
function removeTag(e) {
    const i = e.currentTarget.getAttribute("data-index");
    if (i !== null) {
        for (
            let j = Number(i);
            j < TodoModalState.tagsSelected.length - 1;
            j += 1
        ) {
            TodoModalState.tagsSelected[j] = TodoModalState.tagsSelected[j + 1];
            TMTagsSelectedArray[j] = TMTagsSelectedArray[j + 1];
        }
        TodoModalState.tagsSelected.pop();
        TMTagsSelectedArray.pop();
        TodoModalDispatch.tagsSelected(changeState);
    }
}


/**
@type {() => undefined}} */
function addNewTag() {
    if (TodoModalState.newTag !== "") {
        if (!TodoModalState.tagsSelected.includes(TodoModalState.newTag)) {
            TodoModalState.tagsSelected.push(TodoModalState.newTag);
            TMTagsSelectedArray.push(
                <TagDeleteButton
                    key={`tag-${TodoModalState.newTag}`}
                    tag={TodoModalState.newTag}
                    index={TMTagsSelectedArray.length}
                    onClick={removeTag}
                />
            );
            TodoModalDispatch.tagsSelected(changeState);
        }
        TodoModalState.newTag = "";
        TodoModalState.tagsSuggested.length = 0;
        TMTagsSuggestedArray.length = 0;
        TodoModalDispatch.newTag(changeState);
        TodoModalDispatch.tagsSuggested(changeState);
    }
}

const TMSuggestedTemporal = {
    char: "",
    /**
    @type {Array<string>} */
    tags: [],
    /**
    @type {Array<React.ReactElement>} */
    react: [],
    reset() {
        TMSuggestedTemporal.char = "";
        TMSuggestedTemporal.tags.length = 0;
        TMSuggestedTemporal.react.length = 0;
    }
};

/**
@type {React.MouseEventHandler<HTMLButtonElement>} */
function selectSuggestedTag(e) {
    const value = e.currentTarget.getAttribute("data-value");
    if (value !== null) {
        TodoModalState.newTag = value;
        addNewTag();
    }
}

/**
@type {React.ChangeEventHandler<HTMLInputElement>} */
function onChangeTagsInput(e) {
    const value = e.currentTarget.value;
    if (value[value.length - 1] !== " ") {
        let change = false;
        if (value === "") {
            change = true;
            TodoModalState.tagsSuggested.length = 0;
            TMTagsSuggestedArray.length = 0;
        } else if (value.length === 1) {
            change = true;
            if (TMSuggestedTemporal.char === value) {
                for (let i = 0; i < TMSuggestedTemporal.tags.length; i += 1) {
                    TodoModalState.tagsSuggested[i] = (
                        TMSuggestedTemporal.tags[i]
                    );
                    TMTagsSuggestedArray[i] = TMSuggestedTemporal.react[i];
                }
           } else {
                TMSuggestedTemporal.char = value;
                TMSuggestedTemporal.tags.length = 0;
                TMSuggestedTemporal.react.length = 0;
                TodoModalState.tagsSuggested.length = 0;
                TMTagsSuggestedArray.length = 0;
                let i = 0;
                for (const tag in TagsState.tags) {
                    if (value === tag[0]) {
                        TodoModalState.tagsSuggested.push(tag);
                        TMTagsSuggestedArray.push(
                            <TagAddButton
                                key={`tag-${tag}`}
                                tag={tag}
                                onClick={selectSuggestedTag}
                            />
                        );
                        TMSuggestedTemporal.tags.push(tag);
                        TMSuggestedTemporal.react.push(
                            TMTagsSuggestedArray[i]
                        );
                        i += 1;
                    }
                }
           }
        } else if (
            value.length > TodoModalState.newTag.length
            && TodoModalState.tagsSuggested.length !== 0
        ) {
            change = true;
            let head = 0;
            for (let i = 0; i < TodoModalState.tagsSuggested.length; i += 1) {
                const tag = TodoModalState.tagsSuggested[i];
                if (tag.startsWith(value)) {
                    TodoModalState.tagsSuggested[head] = tag;
                    TMTagsSuggestedArray[head] = TMTagsSuggestedArray[i];
                    head += 1;
                }
            }
            TodoModalState.tagsSuggested.length = head;
            TMTagsSuggestedArray.length = head;
        } else if (value.length < TodoModalState.newTag.length) {
            change = true;
            let head = 0;
            for (let i = 0; i < TMSuggestedTemporal.tags.length; i += 1) {
                const tag = TMSuggestedTemporal.tags[i];
                if (tag.startsWith(value)) {
                    TodoModalState.tagsSuggested[head] = tag;
                    TMTagsSuggestedArray[head] = TMSuggestedTemporal.react[i];
                    head += 1;
                }
            }
        }
        TodoModalState.newTag = value;
        TodoModalDispatch.newTag(changeState);
        if (change) {
            TodoModalDispatch.tagsSuggested(changeState);
        }
    }
}

/**
@type {React.KeyboardEventHandler<HTMLInputElement>} */
function onEnterTagsInput(e) {
    if (e.key === "Enter") {
        addNewTag();
    }
}

/**
@type {() => React.ReactElement} */
function TagInput() {
    TodoModalDispatch.newTag = useState(true)[1];
    return (
        <input
            name="tag"
            type="text"
            value={TodoModalState.newTag}
            placeholder="add a tag"
            onChange={onChangeTagsInput}
            onKeyDown={onEnterTagsInput}
        />
    );
}

/**
@type {() => React.ReactNode} */
function RemoveTagsSection() {
    TodoModalDispatch.tagsSelected = useState(true)[1];
    if (TodoModalState.tagsSelected.length === 0) {
        return;
    }
    return (
        <section className="tags-selected-section">
            <p>Remove tags:</p>
            <div className="tags-selected">
                {TMTagsSelectedArray}
            </div>
        </section>
    );
}

/**
@type {() => React.ReactNode} */
function TagsSuggested() {
    TodoModalDispatch.tagsSuggested = useState(true)[1];
    if (TMTagsSuggestedArray.length === 0) {
        return;
    }
    return (
        <div className="suggested-tags">
            {TMTagsSuggestedArray}
        </div>
    );
}

// General Todo Modal Component

/**
@type {(p: {
    title: string,
    editmode: boolean,
    onClickClose: React.MouseEventHandler<HTMLButtonElement>,
    onClickComplete: React.MouseEventHandler<HTMLButtonElement>,
    completeText: string
}) => React.ReactElement} */
function TodoModal({
    title,
    editmode,
    onClickClose,
    onClickComplete,
    completeText
})  {
    return (
        <div className="todo-parent">
            <button
                type="button"
                className="close-button"
                title="close"
                onClick={onClickClose}
            >
                <IconClose/>
            </button>
            <h3 className="todo title">{title}</h3>
            <section className="section todo text-section">
                <h4>What do you need to do?</h4>
                <TodoText/>
            </section>
            {editmode && (
                <section className="section todo date-section">
                    <h4>Set date to now:</h4>
                    <div>
                        <label className="radio">
                            <TodoDateRadio
                                value={false}
                                onChange={setDate.toFalse}
                                TodoModalDispatchName={"false"}
                            />
                            <p>No</p>
                        </label>
                        <label className="radio">
                            <TodoDateRadio
                                value={true}
                                onChange={setDate.toTrue}
                                TodoModalDispatchName={"true"}
                            />
                            <p>Yes</p>
                        </label>
                    </div>
                </section>
            )}
            <section className="section todo color-section">
                <h4>Select Color:</h4>
                <ColorContainer
                    check={checkColor}
                    onChange={setColor}
                    dispatch={TodoModalDispatch.color}
                    type="radio"
                />
            </section>
            <section className="section todo tags-section">
                <h4>Tags:</h4>
                <TagSection
                    TagInput={<TagInput/>}
                    TagsSuggested={<TagsSuggested/>}
                    addButton={true}
                    addNewTag={addNewTag}
                />
            </section>
            <RemoveTagsSection/>
            <div className="complete-button-parent">
                <button
                    type="button"
                    className="complete-button"
                    onClick={onClickComplete}
                >
                    {completeText}
                </button>
            </div>
        </div>
    );
}

/**
@type {() => undefined} */
function addComplete() {
    if (TodoModalState.text === "") {
        return;
    }
    ModalActions.addCompleted(
        TodoModalState.text,
        TodoModalState.color,
        TodoModalState.tagsSelected
    );
}

/**
@type {() => React.ReactElement} */
function AddTodoModal() {
    return (
        <TodoModal
            title="New Todo"
            editmode={false}
            onClickClose={ModalActions.close}
            onClickComplete={addComplete}
            completeText="create"
        />
    );
}

/**
@type {() => undefined} */
function editComplete() {
    if (TodoModalState.text === "") {
        return;
    }
    ModalActions.editComplete(
        TodoModalState.date,
        TodoModalState.text,
        TodoModalState.color,
        TodoModalState.tagsSelected
    );
}

/**
@type {() => React.ReactElement} */
function EditTodoModal() {
    return (
        <TodoModal
            title="Edit Todo"
            editmode={true}
            onClickClose={ModalActions.close}
            onClickComplete={editComplete}
            completeText="edit"
        />
    );
}

/**
@type {React.MouseEventHandler<HTMLButtonElement>} */
function openAdd() {
    TodoModalState.reset();
    TMTagsSelectedArray.length = 0;
    TMTagsSuggestedArray.length = 0;
    TMSuggestedTemporal.reset();
    ModalActions.openAdd();
}

/**
@type {(p: {className: string}) => React.ReactElement} */
function AddTodoButton({className}) {
    return (
        <button
            type="button"
            className={className}
            onClick={openAdd}
        >
            <IconAdd title="Add a new todo"/>
        </button>
    );
}

/**
@type {React.MouseEventHandler<HTMLButtonElement>} */
function openEdit(e) {
    const id = e.currentTarget.getAttribute("data-id");
    if (id !== null) {
        const todo = TodosState.todos[id];
        TodoModalState.text = todo.text;
        TodoModalState.date = false;
        TodoModalState.color = todo.color;
        TodoModalState.tagsSuggested.length = 0;
        TodoModalState.newTag = "";
        populateTagsSelected(todo.tags);
        TMTagsSuggestedArray.length = 0;
        TMSuggestedTemporal.reset();
        ModalActions.openEdit(id);
    }
}

/**
@type {(p:{id: string}) => React.ReactElement} */
function EditTodoButton({id}) {
    return (
        <button
            type="button"
            title="edit todo"
            data-id={id}
            onClick={openEdit}
        >
            <p>edit</p>
        </button>
    );
}


export {
    AddTodoModal,
    EditTodoModal,
    AddTodoButton,
    EditTodoButton
};
