type maybe<T> = undefined | T;

type Colors = (
    "default"
    |"purple"
    | "red"
    | "green"
    | "brown"
    | "yellow"
    | "blue"
    | "pink"
);

type Todo = {
    color: Colors,
    completed: boolean,
    date: number,
    id: string,
    tags: Array<string>,
    text: string,
};

type FilterColors = [
    "default"?,
    "purple"?,
    "red"?,
    "green"?,
    "brown"?,
    "yellow"?,
    "blue"?,
    "pink"?
];

type FilterStatus = "all" | "active" | "completed";

