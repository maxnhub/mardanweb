import * as types from '../types/users';

export function setUsers(users) {
    return {
        type: types.SET_USERS,
        users
    };
}

