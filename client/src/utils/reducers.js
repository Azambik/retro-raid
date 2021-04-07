import { useReducer } from 'react';
import{
    CREATE_POST,
    UPDATE_POST,
    DELETE_POST,
    CREATE_REPLY,
    UPDATE_REPLY,
    DELETE_REPLY
} from './actions';

export const reducer = (state, action) => {
    //main switch to determin witch action was used
    switch (action.type) {
        case CREATE_POST:
            return{
            }
    }
}