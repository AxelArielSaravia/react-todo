import * as React from "react";

/**
@type {(p: {
    TagInput: React.ReactElement,
    TagsSuggested: React.ReactNode,
    addButton: boolean,
    addNewTag?: React.MouseEventHandler<HTMLButtonElement>
}) => React.ReactElement} */
function TagSection({TagInput, TagsSuggested, addButton, addNewTag}) {
    return (
        <div className="add-tags">
            <div className="input-tags">
                {TagInput}
                {TagsSuggested}
            </div>
            {addButton && (
                <button
                    className="add-button"
                    type="button"
                    onClick={addNewTag}
                >
                    <p>add</p>
                </button>
            )}
        </div>
    );
}

/**
@type {(p: {
    tag: string,
    index: number,
    onClick: React.MouseEventHandler<HTMLButtonElement>,
}) => React.ReactElement} */
function TagDeleteButton({tag, index, onClick}) {
    return (
        <button
            type="button"
            title={`remove ${tag} tag`}
            className="tag-button"
            data-index={index}
            onClick={onClick}
        >
            <span>{tag}</span>
        </button>
    );
}

/**
@type {(p: {
    tag: string,
    onClick: React.MouseEventHandler<HTMLButtonElement>,
}) => React.ReactElement} */
function TagAddButton({tag, onClick}) {
    return (
        <button
            type="button"
            title={`add ${tag} tag`}
            className="tag-button"
            data-value={tag}
            onPointerDown={onClick}
        >
            <span>{tag}</span>
        </button>
    );
}

/**
@type {(p: {text:string}) => React.ReactElement} */
function Tag({text}) {
    return (
        <div
            className="tag"
            title={`tag: ${text}`}
        >
            <span>{text}</span>
        </div>
     );
}


export {
    Tag,
    TagDeleteButton,
    TagAddButton,
    TagSection
};
