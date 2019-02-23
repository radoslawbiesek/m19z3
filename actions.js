import uuid from 'uuid';

// Action types
const ADD_COMMENT = 'ADD_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMNET = 'THUMN_DOWN_COMMENT';

// Action creators
function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
}

export function editComment(id, text) {
    return {
        type: EDIT_COMMENT,
        id,
        text
    };
}

export function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id
    };
}

export function thumbUpComment(id) {
    return {
        type: THUMB_UP_COMMENT,
        id
    };
}

export function thumbDownComment(id) {
    return {
        type: THUMB_DOWN_COMMNET,
        id
    };
}

