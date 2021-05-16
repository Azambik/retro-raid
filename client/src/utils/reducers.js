import { useReducer } from 'react';
import{
    CREATE_POST,
    UPDATE_POST,
    DELETE_POST,
    CREATE_REPLY,
    UPDATE_REPLY,
    DELETE_REPLY,
    UPDATE_FORUM,
    UPDATE_CURRENT_FORUM,
    POST_OPEN,
    POST_CLOSED
} from './actions';

export const reducer = (state, action) => {
    //main switch to determin witch action was used
    switch (action.type) {
        case UPDATE_FORUM:
            return{
                ...state,
                forum: [...action.forum]
            };
        case UPDATE_CURRENT_FORUM:
            return{
                ...state,
                currentForum: {...action.currentForum}
            };
        case UPDATE_POST:
            return{
                ...state,
                posts: [...action.posts]
            };
        case POST_OPEN:
            return{
                ...state,
                displayPost: true
            };
        case POST_CLOSED:
            return{
                ...state,
                displayPost: false
            }
    
        //if it's none of these actions, do not update state at all and keep things the same!
        default:
        return state;
    }
}

export function useForumReducer(initialState) {
    return useReducer(reducer, initialState);
  }