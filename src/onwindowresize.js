import {ModalState, ModalActions} from "./context.js";
import {fakeDispatch, changeState} from "./utils.js";


const MatchDispatch = {
    filterDesktop: fakeDispatch,
    filterBtn: fakeDispatch,
};

const MATCH_MIN_WIDTH_780 = window.matchMedia("(min-width: 780px)");

/**
@type {(e: MediaQueryListEvent) => undefined} */
function mnw780oc(e) {
    MatchDispatch.filterDesktop(changeState);
    MatchDispatch.filterBtn(changeState);
    if (
        e.matches
        && ModalState.show
        && ModalState.type === "filter"
    ) {
        ModalActions.close();
    }
}
MATCH_MIN_WIDTH_780.onchange = mnw780oc;

export {
    MatchDispatch,
    MATCH_MIN_WIDTH_780,
};
