import {useState} from "react";

import {fakeDispatch, changeState} from "../utils.js";

import {IconMoon, IconSunny} from "./icons.jsx";

const theme = {
    /**
    @type {"dark" | "light"} */
    state: "dark",
    /**
    @type {React.Dispatch<React.SetStateAction<boolean>>} */
    dispatch: fakeDispatch,
};

// Init state
{
    /** @type {"dark" | "light" | null} */
    const t = localStorage.getItem("theme");
    if (t !== null) {
        theme.state = t;
    } else {
        if (
            window.matchMedia !== undefined
            && window.matchMedia("(prefers-color-scheme: dark)").matches
        ) {
            theme.state = "dark";
        } else {
            theme.state = "light";
        }
        localStorage.setItem("theme", theme.state);
    }
    document.body.className = theme.state;
}

/**
@type {() => undefined} */
function changeTheme() {
    if (theme.state === "dark") {
        theme.state = "light";
    } else {
        theme.state = "dark";
    }
    document.body.className = theme.state;
    localStorage.setItem("theme", theme.state);
    theme.dispatch(changeState);
}

/**
@type {() => React.ReactElement} */
function IconsThemeButton() {
    theme.dispatch = useState(false)[1];
    return (
        theme.state === "dark"
        ? <IconSunny/>
        : <IconMoon/>
    );
}

/**
@type {(p: {className: string}) => React.ReactElement} */
function ChangeThemeButton({className}) {
    return (
        <button
            type="button"
            className={className}
            onClick={changeTheme}
        >
            <IconsThemeButton/>
        </button>
    );
}

export default ChangeThemeButton;
