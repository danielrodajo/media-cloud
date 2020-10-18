import * as types from '../actions/ActionTypes';
import { updateObject } from '../../shared/utility';
import { FriendsState } from '../types';

const initialState: FriendsState = {
    friends: [],
    recoverFriendsError: null,
    downloadingFriends: false,
} 

const getFriends = (state: FriendsState) => {
    return updateObject( state, {
        downloadingFriends: true
    })
}

const getFriendsSuccess = (state: FriendsState, payload: any) => {
    return updateObject( state, {
        friends: payload,
        downloadingFriends: false
    })
}

const getFriendsFail = (state: FriendsState, payload: any) => {
    return updateObject( state, {
        recoverFriendsError: payload,
        downloadingFriends: false
    })
}



const reducer = ( state = initialState, action: types.ActionTypes ) => {
    switch (action.type) {
        case types.RECOVER_FRIENDS: return getFriends(state);
        case types.RECOVER_FRIENDS_OK: return getFriendsSuccess(state, action.payload);
        case types.RECOVER_FRIENDS_NOK: return getFriendsFail(state, action.payload);
        default: return state;
    }
}

export default reducer;