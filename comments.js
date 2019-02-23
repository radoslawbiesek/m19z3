import './actions';
import { ADD_COMMENT, REMOVE_COMMENT, THUMB_UP_COMMENT, EDIT_COMMENT, THUMB_DOWN_COMMNET } from './actions';

function comments(state = [], action) {
    switch(action.type) {
        case ADD_COMMENT:
            return [
                {
                    id: action.id,
                    text: action.text,
                    votes: 0
                }
                , ...state
            ];
        case REMOVE_COMMENT:
            return state.filter(comment => comment.id !== action.id);
        case EDIT_COMMENT:
            return state.map(comment => {
                if (comment.id === action.id) {
                    return Object.assign({}, comment, {
                        text: action.text
                    })
                }
                return comment;
            });
        case THUMB_UP_COMMENT:
            return state.map(comment => {
                if (comment.id === action.id) {
                    return Object.assign({}, comment, {
                        votes: comment.votes + 1
                    })
                }
            });
        case THUMB_DOWN_COMMENT:
            return state.map(comment => {
                if (comment.id === action.id) {
                    return Object.assign({}, comment, {
                        votes: comment.votes - 1
                    })
                }
            });
        default:
            return state;
    }
}

export default comments;