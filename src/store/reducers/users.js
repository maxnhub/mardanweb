  
import * as types from '../types/users';

const initialState = {
    users: []
};

export default function usersReducer(state = initialState, action) {
    const { type } = action;

    switch(type) {
        case types.SET_USERS:
            return {
                ...state,
                users: action.users
            };
        default:
            return state;
    }
}