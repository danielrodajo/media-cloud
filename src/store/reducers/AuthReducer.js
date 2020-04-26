import * as types from '../actions/ActionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    username: null,
    password: "",
    phone_number: "",
    code: "",
    user: null,
    authRedirectPath: '/',
    verifying: false,
    logged: false,
    signUpError: null,
    signInError: null,
    verifyError: null,
}

const signUp = (state, action) => {
    return updateObject( state )
}

const signUpFail = (state, action) => {
    return updateObject( state, {
        signUpError: action.error
    })
}

const signIn = (state, action) => {
    return updateObject( state, {
        user: action.user
    });
}

const signInFail = (state, action) => {
    return updateObject( state, {
        signInError: action.error
    })
}

const verify = (state, action) => {
    return updateObject( state )
}

const verifyFail = (state, action) => {
    return updateObject( state, {
        verifyError: action.error
    } )
}

const signOut = (state, action) => {
    return updateObject(state, {
        user: null
    })
}


const reducer = ( state = initialState, action ) => {
    switch (action.type) {
        case types.AUTH_SIGNUP: return signUp(state, action);
        case types.AUTH_SIGNUP_NOK: return signUpFail(state, action);
        case types.AUTH_SIGNIN: return signIn(state, action);
        case types.AUTH_SIGNIN_NOK: return signInFail(state, action);
        case types.AUTH_VERIFY: return verify(state, action);
        case types.AUTH_VERIFY_NOK: return verifyFail(state, action);
        case types.AUTH_SIGNOUT: return signOut(state, action);
        default: return state;
    }
}

export default reducer;