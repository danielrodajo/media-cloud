import * as types from '../actions/ActionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    user: null,
    status: "signin", //en que fase del proceso de autenticacion se encuentra
    signUpError: null,
    signInError: null,
    verifyError: null,
    signOutError: null
}

const signUp = (state, action) => {
    return updateObject( state, {
        status: action.status,
        signUpError: null
    } )
}

const signUpFail = (state, action) => {
    return updateObject( state, {
        signUpError: action.error
    })
}

const signIn = (state, action) => {
    return updateObject( state, {
        user: action.user,
        signUpError: null,
        signInError: null,
        verifyError: null,
        signOutError: null
    });
}

const signInFail = (state, action) => {
    return updateObject( state, {
        signInError: action.error
    })
}

const verify = (state, action) => {
    return updateObject( state, {
        status: action.status
    } )
}

const verifyFail = (state, action) => {
    return updateObject( state, {
        verifyError: action.error
    } )
}

const signOutFail = (state, action) => {
    return updateObject( state, {
        signOutError: action.error
    })
}

const switchComponent = (state, action) => {
    return updateObject(state, {
        status: action.component
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
        case types.AUTH_SIGNOUT_NOK: return signOutFail(state, action);
        case types.AUTH_SWITCH_COMPONENT: return switchComponent(state, action);
        default: return state;
    }
}

export default reducer;