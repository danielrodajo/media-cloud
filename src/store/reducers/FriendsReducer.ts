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
        recoverFriendsError: null,
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

const deleteFriend = (state: FriendsState, payload: any) => {
    return updateObject( state, {
        friends: state.friends.filter((friend:any) => friend.id !== payload)
    })
}

const addFriend = (state: FriendsState, payload: any) => {
    return updateObject( state, {
        friends: [payload].concat(state.friends)
    })
}

const reducer = ( state = initialState, action: types.ActionTypes ) => {
    switch (action.type) {
        case types.RECOVER_FRIENDS: return getFriends(state);
        case types.RECOVER_FRIENDS_OK: return getFriendsSuccess(state, action.payload);
        case types.RECOVER_FRIENDS_NOK: return getFriendsFail(state, action.payload);
        case types.DELETE_FRIEND_OK: return deleteFriend(state, action.payload);
        case types.ADD_FRIEND_OK: return addFriend(state, action.payload);
        default: return state;
    }
}

export default reducer;