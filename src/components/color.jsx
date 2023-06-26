//@ts-check
import React, {useState} from "react";

import "./color.css";

/**
@type {(p:{
    color: Colors,
    check: (c: Colors) => boolean,
    onChange: React.ChangeEventHandler<HTMLInputElement>,
    dispatch: {[k in Colors]: React.Dispatch<React.SetStateAction<boolean>>}
    type: "radio"| "checkbox"
}) => React.ReactElement} */
function Color({
    color,
    check,
    onChange,
    dispatch,
    type
}) {
    dispatch[color] = useState(true)[1];
    return (
        <label className="color-item">
            <input
                className="display-none"
                type={type}
                value={color}
                checked={check(color)}
                onChange={onChange}
            />
            <div
                role="radio"
                className={`color-view ${color}`}
                title={color}
            />
        </label>
    );
}

/**
@type {(p:{
    check: (c: Colors) => boolean,
    onChange: React.ChangeEventHandler<HTMLInputElement>,
    dispatch: {[k in Colors]: React.Dispatch<React.SetStateAction<boolean>>}
    type: "radio" | "checkbox"
}) => React.ReactElement} */
function ColorContainer({type, check, onChange, dispatch}) {
    return (
        <div className="color-container" role="radiogroup">
            <Color
                color="default"
                check={check}
                onChange={onChange}
                dispatch={dispatch}
                type={type}
            />
            <Color
                color="blue"
                check={check}
                onChange={onChange}
                dispatch={dispatch}
                type={type}
            />
            <Color
                color="purple"
                check={check}
                onChange={onChange}
                dispatch={dispatch}
                type={type}
            />
            <Color
                color="pink"
                check={check}
                onChange={onChange}
                dispatch={dispatch}
                type={type}
            />
            <Color
                color="red"
                check={check}
                onChange={onChange}
                dispatch={dispatch}
                type={type}
            />
            <Color
                color="brown"
                check={check}
                onChange={onChange}
                dispatch={dispatch}
                type={type}
            />
            <Color
                color="yellow"
                check={check}
                onChange={onChange}
                dispatch={dispatch}
                type={type}
            />
            <Color
                color="green"
                check={check}
                onChange={onChange}
                dispatch={dispatch}
                type={type}
            />
        </div>
    );
}
export default ColorContainer;
