import * as types from '../actions/ActionTypes';
import { updateObject } from '../../shared/utility';
import { UserState } from '../types';

const initialState: UserState = {
    userImage: null,
    recoverError: null,
    uploadError: null,
    removeError: null,
    uploading: false,
    uploadSuccess: false,
    loadedUserImage: 0,
    totalUserImage: 0,
    downloading: false,
}

//Reseteamos valores de visualizacion de la subida
const uploadUserImage = (state: UserState) => {
    return updateObject( state, {
        uploadError: null,
        uploading: true,
        uploadSuccess: false,
        loadedUserImage: 0,
        totalUserImage: 1,
    });
}

const uploadingUserImage = (state: UserState, payload: {
    loaded: number
    total: number
}) => {
    return updateObject( state, {
        loadedUserImage: payload.loaded,
        totalUserImage: payload.total,
    });
}

const uploadUserImageSuccessWait = (state: UserState, payload: any) => {
    return updateObject( state, {
        userImage: payload,
        uploadSuccess: true,
    });
}

const uploadUserImageSuccess = (state: UserState) => {
    return updateObject( state, {
        uploading: false
    });
}

const uploadUserImageFail = (state: UserState, payload: Error) => {
    return updateObject( state, {
        uploadError: payload,
        uploading: false
    })
}

const removeFileSuccess = (state: UserState) => {
    return updateObject( state, {
        removeError: null,
        userImage: null,
    })
}

const removeFail = (state: UserState, payload: Error) => {
    return updateObject( state, {
        removeError: payload
    })
}

const recoverUserImage = (state: UserState) => {
    return updateObject( state, {
        recoverError: null,
        downloading: true,
    })
}
const recoverUserImageSuccess = (state: UserState, payload: any) => {
    return updateObject( state, {
        userImage: payload,
        downloading: false,
    })
}
const recoverUserImageFail = (state: UserState, payload: any) => {
    return updateObject( state, {
        recoverError: payload,
        downloading: false,
    })
}

const reducer = ( state = initialState, action: types.ActionTypes ): UserState => {
    switch (action.type) {
        case types.UPLOAD_USER_IMAGE: return uploadUserImage(state);
        case types.UPLOADING_USER_IMAGE: return uploadingUserImage(state, action.payload);
        case types.UPLOAD_USER_IMAGE_OK: return uploadUserImageSuccess(state);
        case types.UPLOAD_USER_IMAGE_OK_WAIT: return uploadUserImageSuccessWait(state, action.payload);
        case types.UPLOAD_USER_IMAGE_NOK: return uploadUserImageFail(state, action.payload);
        case types.REMOVE_USER_IMAGE_OK: return removeFileSuccess(state);
        case types.REMOVE_USER_IMAGE_NOK: return removeFail(state, action.payload);
        case types.RECOVER_USER_IMAGE: return recoverUserImage(state);
        case types.RECOVER_USER_IMAGE_OK: return recoverUserImageSuccess(state, action.payload);
        case types.RECOVER_USER_IMAGE_NOK: return recoverUserImageFail(state, action.payload);
        default: return state;
    }
}

export default reducer;