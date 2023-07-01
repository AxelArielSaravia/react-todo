import * as React from "react";
/**
@type {() => React.ReactElement} */
function IconOptions() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            className="icon icon-options"
            viewBox="0 0 512 512"
        >
            <title>Options</title>
            <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
                d="M368 128h80M64 128h240M368 384h80M64 384h240M208 256h240M64 256h80"
            />
            <circle
                cx="336"
                cy="128"
                r="32"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
            />
            <circle
                cx="176"
                cy="256"
                r="32"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
            />
            <circle
                cx="336"
                cy="384"
                r="32"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
            />
        </svg>
    );
}

/**
@type {(p: {title: string}) => React.ReactElement} */
function IconAdd({title}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            className="icon icon-add"
            viewBox="0 0 512 512"
        >
            <title>{title}</title>
            <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
                d="M256 112v288M400 256H112"
            />
        </svg>
    );
}

/**
@type {(p: {stroke?: string}) => React.ReactElement} */
function IconClose({stroke}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            className="icon icon-close"
            viewBox="0 0 512 512"
        >
            <path fill="none"
                stroke={stroke !== undefined ? stroke : "currentColor"}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32" d="M368 368L144 144M368 144L144 368"
            />
        </svg>
    );
}

/**
@type {() => React.ReactElement} */
function IconMoon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            className="icon icon-moon"
            viewBox="0 0 512 512"
        >
            <title>Dark</title>
            <path
                d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
            />
        </svg>
    );
}

/**
@type {() => React.ReactElement} */
function IconSunny() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-sunny"
            viewBox="0 0 512 512"
        >
            <title>Light</title>
            <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="32"
                d="M256 48v48M256 416v48M403.08 108.92l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48M96 256H48M403.08 403.08l-33.94-33.94M142.86 142.86l-33.94-33.94"
            />
            <circle
                cx="256"
                cy="256"
                r="80"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="32"
            />
        </svg>
    );
}

export {
    IconAdd,
    IconClose,
    IconMoon,
    IconOptions,
    IconSunny
};
