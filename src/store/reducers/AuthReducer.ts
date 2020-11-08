import * as types from '../actions/ActionTypes';
import { updateObject } from '../../shared/utility';
import { AuthState } from '../types';

const initialState: AuthState = {
    user: null,
    status: "signin", //en que fase del proceso de autenticacion se encuentra
    loading: false,
    signUpError: null,
    signInError: null,
    verifyError: null,
    signOutError: null,
    changingUsername: false,
    editUsernameError: null,
    forgotPasswordError: null,
    forgotPasswordSubmitError: null,
}

const editUsername = (state: AuthState) => {
    return updateObject( state, {
        changingUsername: true,
        editUsernameError: null,
    })
}
const editUsernameSuccess = (state: AuthState, payload: string) => {
    state.user.attributes['name'] = payload
    return updateObject( state, {
        changingUsername: false,
    })
}
const editUsernameFail = (state: AuthState, payload: any) => {
    return updateObject( state, {
        changingUsername: false,
        editUsernameError: payload,
    })
}

const signUp = (state: AuthState) => {
    return updateObject( state, {
        loading: true,
    } )
}

const signUpSuccess = (state: AuthState, payload: AuthState) => {
    return updateObject( state, {
        status: payload,
        loading: false,
    } )
}

const signUpFail = (state: AuthState, payload: Error) => {
    return updateObject( state, {
        signUpError: payload,
        loading: false,
    })
}

const signIn = (state: AuthState) => {
    return updateObject( state, {
        loading: true,
    });
}

const signInSuccess = (state: AuthState, payload: AuthState) => {
    return updateObject( state, {
        user: payload,
        loading: false
    });
}

const signInFail = (state: AuthState, payload: Error) => {
    return updateObject( state, {
        signInError: payload,
        loading: false
    })
}

const verify = (state: AuthState) => {
    return updateObject( state, {
        loading: true
    } )
}

const verifySuccess = (state: AuthState, payload: number) => {
    return updateObject( state, {
        status: payload,
        loading: false
    } )
}

const verifyFail = (state: AuthState, payload: Error) => {
    return updateObject( state, {
        verifyError: payload,
        loading: false
    } )
}


const signOut = (state: AuthState) => {
    return updateObject( state, {
        loading: true
    })
}

const signOutSuccess = (state: AuthState) => {
    return updateObject( state, {
        loading: false
    })
}

const signOutFail = (state: AuthState, payload: Error) => {
    return updateObject( state, {
        signOutError: payload,
        loading: false
    })
}

const forgotPassword = (state: AuthState) => {
    return updateObject( state, {
        loading: true
    })
}
const forgotPasswordSuccess = (state: AuthState, payload: string) => {
    return updateObject( state, {
        status: payload,
        loading: false
    })
}
const forgotPasswordFail = (state: AuthState, payload: Error) => {
    return updateObject( state, {
        forgotPasswordError: payload,
        loading: false
    })
}

const forgotPasswordSubmit = (state: AuthState) => {
    return updateObject( state, {
        loading: true
    })
}
const forgotPasswordSubmitSuccess = (state: AuthState, payload: string) => {
    return updateObject( state, {
        status: payload,
        loading: false
    })
}
const forgotPasswordSubmitFail = (state: AuthState, payload: Error) => {
    return updateObject( state, {
        forgotPasswordSubmitError: payload,
        loading: false
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
        case types.AUTH_SIGNUP: return signUp(state);
        case types.AUTH_SIGNUP_OK: return signUpSuccess(state, action.payload);
        case types.AUTH_SIGNUP_NOK: return signUpFail(state, action.payload);
        case types.AUTH_SIGNIN: return signIn(state);
        case types.AUTH_SIGNIN_OK: return signInSuccess(state, action.payload);
        case types.AUTH_SIGNIN_NOK: return signInFail(state, action.payload);
        case types.AUTH_VERIFY: return verify(state);
        case types.AUTH_VERIFY_OK: return verifySuccess(state, action.payload);
        case types.AUTH_VERIFY_NOK: return verifyFail(state, action.payload);
        case types.AUTH_SIGNOUT: return signOut(state);
        case types.AUTH_SIGNOUT_OK: return signOutSuccess(state);
        case types.AUTH_SIGNOUT_NOK: return signOutFail(state, action.payload);
        case types.AUTH_FORGOT_PASSWORD: return forgotPassword(state);
        case types.AUTH_FORGOT_PASSWORD_OK: return forgotPasswordSuccess(state, action.payload);
        case types.AUTH_FORGOT_PASSWORD_NOK: return forgotPasswordFail(state, action.payload);
        case types.AUTH_FORGOT_PASSWORD_SUBMIT: return forgotPasswordSubmit(state);
        case types.AUTH_FORGOT_PASSWORD_SUBMIT_OK: return forgotPasswordSubmitSuccess(state, action.payload);
        case types.AUTH_FORGOT_PASSWORD_SUBMIT_NOK: return forgotPasswordSubmitFail(state, action.payload);
        case types.AUTH_SWITCH_COMPONENT: return switchComponent(state, action.payload);
        case types.SWITCH_DARKMODE: return switchDarkMode(state, action.payload);
        case types.EDIT_USERNAME: return editUsername(state);
        case types.EDIT_USERNAME_OK: return editUsernameSuccess(state, action.payload);
        case types.EDIT_USERNAME_NOK: return editUsernameFail(state, action.payload);
        default: return state;
    }
}

export default reducer;