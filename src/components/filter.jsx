import * as React from "react";
import {useState} from "react";

import {
    FilterState,
    FilterActions,
    TodoListActions,
    ModalActions,
    TagsState
} from "../context.js";
import {MATCH_MIN_WIDTH_780, MatchDispatch} from "../onwindowresize.js";

import {changeState, fakeDispatch} from "../utils.js";

import {TagDeleteButton, TagAddButton, TagSection} from "./tag.jsx";
import ColorContainer from "./color.jsx";
import {IconClose} from "./icons.jsx";

const FilterModalState = {
    // WARNNING:
    // if exist a filter state in localstorage this object need to be updated
    /**
    @type {{[k in Colors]: boolean}} */
    color: {
        default: false,
        blue: false,
        purple: false,
        pink: false,
        red: false,
        brown: false,
        yellow: false,
        green: false,
    },
    newTag: "",
    /**
    @type {Array<string>} */
    tagsSelected: [],
    /**
    @type {Array<string>} */
    tagsSuggested: [],
};

const FilterModalDispatch = {
    status: {
        all: fakeDispatch,
        active: fakeDispatch,
        completed: fakeDispatch
    },
    /**
    @type {{[k in Colors]: React.Dispatch<React.SetStateAction<boolean>>}} */
    color: {
        default: fakeDispatch,
        blue: fakeDispatch,
        purple: fakeDispatch,
        pink: fakeDispatch,
        red: fakeDispatch,
        brown: fakeDispatch,
        yellow: fakeDispatch,
        green: fakeDispatch,
    },
    newTag: fakeDispatch,
    tagsSelected: fakeDispatch,
    tagsSuggested: fakeDispatch,
};

// Status Section

/**
@type {React.ChangeEventHandler<HTMLInputElement>} */
function setStatus(e) {
    /**
    @type {FilterStatus} */
    const value = e.currentTarget.value;
    const prevVal = FilterState.status;
    if (value !== prevVal) {
        FilterActions.changeStatus(value);

        FilterModalDispatch.status[prevVal](changeState);
        FilterModalDispatch.status[value](changeState);
    }
}

/**
@type {(p: {status: FilterStatus}) => React.ReactElement} */
function StatusInput({status}) {
    FilterModalDispatch.status[status] = useState(true)[1];
    return (
        <input
            className="visual-hidden"
            type="radio"
            value={status}
            checked={FilterState.status === status}
            onChange={setStatus}
        />
    );
}

/**
@type {() => React.ReactElement} */
function StatusContainer() {
    return (
        <div className="status-container">
            <label className="radio">
                <StatusInput status="all"/>
                <p title="All">All</p>
            </label>
            <label className="radio">
                <StatusInput status="active"/>
                <p title="Active">Active</p>
            </label>
            <label className="radio">
                <StatusInput status="completed"/>
                <p title="Completed">Completed</p>
            </label>
        </div>
    );
}


//Color section

/**
@type {React.ChangeEventHandler<HTMLInputElement>} */
function setColor(e) {
    /**
    @type {Colors} */
    const color = e.currentTarget.value;
    const v = FilterModalState.color[color];
    FilterActions.changeColors(color, !v);
    FilterModalState.color[color] = !v;
    FilterModalDispatch.color[color](changeState);
}

/**
@type {(color: Colors) => boolean} */
function checkColor(color) {
    return FilterModalState.color[color];
}


// Tags Section

/**
@type {Array<React.ReactElement>} */
const FTagsSelectedArray = [];

/**
@type {Array<React.ReactElement>} */
const FTagsSuggestedArray = [];

/**
@type {React.MouseEventHandler<HTMLButtonElement>} */
function removeTag(e) {
    const i = e.currentTarget.getAttribute("data-index");
    if (i !== null) {
        let k = Number(i);
        FilterActions.changeTags(FilterModalState.tagsSelected[k], false);
        for (
            let j = k;
            j < FilterModalState.tagsSelected.length - 1;
            j += 1
        ) {
            FilterModalState.tagsSelected[j] = (
                FilterModalState.tagsSelected[j + 1]
            );
            FTagsSelectedArray[j] = FTagsSelectedArray[j + 1];
        }
        FilterModalState.tagsSelected.pop();
        FTagsSelectedArray.pop();
        FilterModalDispatch.tagsSelected(changeState);
    }
}

/**
@type {() => undefined} */
function addNewTag() {
    if (FilterModalState.newTag !== "") {
        if (!FilterModalState.tagsSelected.includes(FilterModalState.newTag)) {
            FilterModalState.tagsSelected.push(FilterModalState.newTag);
            FTagsSelectedArray.push(
                <TagDeleteButton
                    key={`tag-${FilterModalState.newTag}`}
                    tag={FilterModalState.newTag}
                    index={FTagsSelectedArray.length}
                    onClick={removeTag}
                />
            );
            FilterModalDispatch.tagsSelected(changeState);
            FilterActions.changeTags(FilterModalState.newTag, true);
        }
        FilterModalState.newTag = "";
        FilterModalState.tagsSuggested.length = 0;
        FTagsSuggestedArray.length = 0;
        FilterModalDispatch.newTag(changeState);
        FilterModalDispatch.tagsSuggested(changeState);
    }
}

/**
@type {React.MouseEventHandler<HTMLButtonElement>} */
function selectSuggestedTag(e) {
    const value = e.currentTarget.getAttribute("data-value");
    if (value !== null) {
        FilterModalState.newTag = value;
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
            FilterModalState.tagsSuggested.length = 0;
            FTagsSuggestedArray.length = 0;
        } else if (
            value.length === 1
            || value.length < FilterModalState.newTag.length
        ) {
            change = true;
            FilterModalState.tagsSuggested.length = 0;
            FTagsSuggestedArray.length = 0;
            let i = 0;
            for (const tag in TagsState.tags) {
                if (value === tag[0]) {
                    FilterModalState.tagsSuggested.push(tag);
                    FTagsSuggestedArray.push(
                        <TagAddButton
                            key={`tag-${tag}`}
                            tag={tag}
                            onClick={selectSuggestedTag}
                        />
                    );
                    i += 1;
                }
            }
        } else if (
            value.length > FilterModalState.newTag.length
            && FilterModalState.tagsSuggested.length !== 0
        ) {
            change = true;
            let head = 0;
            for (let i = 0; i < FilterModalState.tagsSuggested.length; i += 1) {
                const tag = FilterModalState.tagsSuggested[i];
                if (tag.startsWith(value)) {
                    FilterModalState.tagsSuggested[head] = tag;
                    FTagsSuggestedArray[head] = FTagsSuggestedArray[i];
                    head += 1;
                }
            }
            FilterModalState.tagsSuggested.length = head;
            FTagsSuggestedArray.length = head;
        }
        FilterModalState.newTag = value;
        FilterModalDispatch.newTag(changeState);
        if (change) {
            FilterModalDispatch.tagsSuggested(changeState);
        }
    }
}


/**
@type {() => React.ReactElement} */
function TagInput() {
    FilterModalDispatch.newTag = useState(true)[1];
    return (
        <input
            name="tag"
            type="text"
            value={FilterModalState.newTag}
            placeholder="add a tag"
            onChange={onChangeTagsInput}
        />
    );
}

/**
@type {() => React.ReactNode} */
function RemoveTagsSection() {
    FilterModalDispatch.tagsSelected = useState(true)[1];
    if (FilterModalState.tagsSelected.length === 0) {
        return;
    }
    return (
        <section className="tags-selected-section">
            <p>Remove tags:</p>
            <div className="tags-selected">
                {FTagsSelectedArray}
            </div>
        </section>
    );
}

/**
@type {() => React.ReactNode} */
function TagsSuggested() {
    FilterModalDispatch.tagsSuggested = useState(true)[1];
    if (FTagsSuggestedArray.length === 0) {
        return;
    }
    return (
        <div className="suggested-tags">
            {FTagsSuggestedArray}
        </div>
    );
}

// Gereal Filter

/**
@type {() => React.ReactElement} */
function Filter() {
    return (
        <>
            <section className="section filter">
                <h3>Actions</h3>
                <div className="actions">
                    <button
                        type="button"
                        className="action-button"
                        onClick={TodoListActions.completeAll}
                    >
                        <p>Mark all as completed</p>
                    </button>
                    <button
                        type="button"
                        className="action-button"
                        onClick={TodoListActions.clearCompleted}
                    >
                        <p>Clear completed</p>
                    </button>
                </div>
            </section>
            <section className="section filter">
                <h3>Filter by</h3>
                <section className="section status-section">
                    <h4>Status:</h4>
                    <StatusContainer/>
                </section>
                <section className="section color-section">
                    <h4>Colors:</h4>
                    <ColorContainer
                        dispatch={FilterModalDispatch.color}
                        onChange={setColor}
                        check={checkColor}
                        type="checkbox"
                    />
                </section>
                <section className="section tags-section">
                    <h4>Tags:</h4>
                    <TagSection
                        TagInput={<TagInput/>}
                        TagsSuggested={<TagsSuggested/>}
                        addButton={false}
                    />
                </section>
                <RemoveTagsSection/>
            </section>
        </>
    );
}

/**
@type {() => React.ReactNode} */
function FilterDesktop() {
    MatchDispatch.filterDesktop = useState(true)[1];
    if (!MATCH_MIN_WIDTH_780.matches) {
        return;
    }
    return (
        <aside>
            <Filter/>
        </aside>
    );
}

function FilterModal() {
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
            <Filter/>
        </>
    );
}

/**
@type {(p: {
    className: string,
    onClick: React.MouseEventHandler<HTMLButtonElement>,
    children: React.ReactNode,
}) => React.ReactNode} */
function FilterButton({className, onClick, children}) {
    MatchDispatch.filterBtn = useState(true)[1];
    if (MATCH_MIN_WIDTH_780.matches) {
        return;
    }
    return (
        <button
            type="button"
            className={className}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export {
    FilterDesktop,
    FilterModal,
    FilterButton
};
