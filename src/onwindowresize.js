//@ts-check
import {ModalState, ModalActions} from "./context";
import {fakeDispatch, changeState} from "./utils";


const MatchDispatch = {
    filterDesktop: fakeDispatch,
    filterBtn: fakeDispatch,
};

const MATCH_MIN_WIDTH_780 = window.matchMedia("(min-width: 780px)");

MATCH_MIN_WIDTH_780.onchange = function mnw780oc(e) {
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

export {
    MatchDispatch,
    MATCH_MIN_WIDTH_780,
};
