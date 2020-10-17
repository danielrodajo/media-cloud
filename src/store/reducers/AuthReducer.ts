import * as types from '../actions/ActionTypes';
import { updateObject } from '../../shared/utility';
import { AuthState } from '../types';
import { userInfo } from 'os';

const initialState: AuthState = {
    user: null,
    status: "signin", //en que fase del proceso de autenticacion se encuentra
    signUpError: null,
    signInError: null,
    verifyError: null,
    signOutError: null,
    forgotPasswordError: null,
    forgotPasswordSubmitError: null,
}

const signUp = (state: AuthState, payload: AuthState) => {
    return updateObject( state, {
        status: payload,
        signUpError: null
    } )
}

const signUpFail = (state: AuthState, payload: Error) => {
    return updateObject( state, {
        signUpError: payload
    })
}

const signIn = (state: AuthState, payload: AuthState) => {
    return updateObject( state, {
        user: payload,
        signUpError: null,
        signInError: null,
        verifyError: null,
        signOutError: null
    });
}

const signInFail = (state: AuthState, payload: Error) => {
    return updateObject( state, {
        signInError: payload
    })
}

const verify = (state: AuthState, payload: number) => {
    return updateObject( state, {
        status: payload
    } )
}

const verifyFail = (state: AuthState, payload: Error) => {
    return updateObject( state, {
        verifyError: payload
    } )
}

const signOutFail = (state: AuthState, payload: Error) => {
    return updateObject( state, {
        signOutError: payload
    })
}

const forgotPassword = (state: AuthState, payload: string) => {
    return updateObject( state, {
        status: payload
    })
}
const forgotPasswordFail = (state: AuthState, payload: Error) => {
    return updateObject( state, {
        forgotPasswordError: payload
    })
}

const forgotPasswordSubmit = (state: AuthState, payload: string) => {
    return updateObject( state, {
        status: payload
    })
}
const forgotPasswordSubmitFail = (state: AuthState, payload: Error) => {
    return updateObject( state, {
        forgotPasswordSubmitError: payload
    })
}

const switchComponent = (state: AuthState, payload: string) => {
    return updateObject(state, {
        status: payload,
        signUpError: null,
        signInError: null,
        verifyError: null,
        signOutError: null,
        forgotPasswordError: null,
        forgotPasswordSubmitError: null,
    })
}

const switchDarkMode = (state: AuthState, payload: boolean) => {
    state.user.attributes['custom:darkMode'] = payload
    return updateObject(state, {})
}

const reducer = ( state = initialState, action: types.ActionTypes ): AuthState => {
    switch (action.type) {
        case types.AUTH_SIGNUP: return signUp(state, action.payload);
        case types.AUTH_SIGNUP_NOK: return signUpFail(state, action.payload);
        case types.AUTH_SIGNIN: return signIn(state, action.payload);
        case types.AUTH_SIGNIN_NOK: return signInFail(state, action.payload);
        case types.AUTH_VERIFY: return verify(state, action.payload);
        case types.AUTH_VERIFY_NOK: return verifyFail(state, action.payload);
        case types.AUTH_SIGNOUT_NOK: return signOutFail(state, action.payload);
        case types.AUTH_FORGOT_PASSWORD: return forgotPassword(state, action.payload);
        case types.AUTH_FORGOT_PASSWORD_NOK: return forgotPasswordFail(state, action.payload);
        case types.AUTH_FORGOT_PASSWORD_SUBMIT: return forgotPasswordSubmit(state, action.payload);
        case types.AUTH_FORGOT_PASSWORD_SUBMIT_NOK: return forgotPasswordSubmitFail(state, action.payload);
        case types.AUTH_SWITCH_COMPONENT: return switchComponent(state, action.payload);
        case types.SWITCH_DARKMODE: return switchDarkMode(state, action.payload);
        default: return state;
    }
}

export default reducer;