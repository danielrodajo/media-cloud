import { File, Error, AuthState } from "../types";

export const RECOVER_FILES = 'RECOVER_FILES';
export const RECOVER_FILES_NOK = 'RECOVER_FILES_NOK';

export const UPLOAD_FILE = 'UPLOAD_FILE';
export const UPLOAD_FILE_OK = 'UPLOAD_FILE_OK';
export const UPLOAD_FILE_NOK = 'UPLOAD_FILE_NOK';

export const REMOVE_FILE = 'REMOVE_FILE';
export const REMOVE_FILE_OK = 'REMOVE_FILE_OK';
export const REMOVE_FILE_NOK = 'REMOVE_FILE_NOK';

export const AUTH_SIGNUP = 'SIGNUP';
export const AUTH_SIGNUP_OK = 'SIGNUP_OK';
export const AUTH_SIGNUP_NOK = 'SIGNUP_NOK';

export const AUTH_SIGNIN = 'AUTH_SIGNIN';
export const AUTH_SIGNIN_OK = 'AUTH_SIGNIN_OK';
export const AUTH_SIGNIN_NOK = 'AUTH_SIGNIN_NOK';

export const AUTH_FORGOT_PASSWORD = 'AUTH_FORGOT_PASSWORD'
export const AUTH_FORGOT_PASSWORD_OK = 'AUTH_FORGOT_PASSWORD_OK'
export const AUTH_FORGOT_PASSWORD_NOK = 'AUTH_FORGOT_PASSWORD_NOK'

export const AUTH_VERIFY = 'AUTH_VERIFY';
export const AUTH_VERIFY_OK = 'AUTH_VERIFY_OK';
export const AUTH_VERIFY_NOK = 'AUTH_VERIFY_NOK';

export const AUTH_SWITCH_COMPONENT = 'AUTH_CHANGE_COMPONENT';

export const AUTH_SIGNOUT = 'AUTH_SIGNOUT';
export const AUTH_SIGNOUT_NOK = 'AUTH_SIGNOUT_NOK';


interface RecoverFilesAction {
    type: typeof RECOVER_FILES
    payload: File[]
}
interface RecoverFilesNokAction {
    type: typeof RECOVER_FILES_NOK
    payload: Error
}

interface UploadFileAction {
    type: typeof UPLOAD_FILE
    payload: File
}
interface UploadFileNokAction {
    type: typeof UPLOAD_FILE_NOK
    payload: Error
}

interface RemoveFileAction {
    type: typeof REMOVE_FILE
    payload: string
}
interface RemoveFileNokAction {
    type: typeof REMOVE_FILE_NOK
    payload: Error
}


interface AuthSignUpAction {
    type: typeof AUTH_SIGNUP
    payload: AuthState
}
interface AuthSignUpNokAction {
    type: typeof AUTH_SIGNUP_NOK
    payload: Error
}

interface AuthSignInAction {
    type: typeof AUTH_SIGNIN
    payload: any
}
interface AuthSignInNokAction {
    type: typeof AUTH_SIGNIN_NOK
    payload: Error
}

interface AuthForgotPasswordAction {
    type: typeof AUTH_FORGOT_PASSWORD
    payload: any
}
interface AuthForgotPasswordNokAction {
    type: typeof AUTH_FORGOT_PASSWORD_NOK
    payload: Error
}

interface AuthSignOutAction {
    type: typeof AUTH_SIGNOUT
}
interface AuthSignOutNokAction {
    type: typeof AUTH_SIGNOUT_NOK
    payload: Error
}

interface VerifyAction {
    type: typeof AUTH_VERIFY
    payload: number
}
interface VerifyNokAction {
    type: typeof AUTH_VERIFY_NOK
    payload: Error
}

interface SwitchComponentAction {
    type: typeof AUTH_SWITCH_COMPONENT
    payload: any
}


export type ActionTypes = RecoverFilesAction|RecoverFilesNokAction | UploadFileAction|UploadFileNokAction | RemoveFileAction|RemoveFileNokAction |
                            AuthSignInAction|AuthSignInNokAction | AuthSignOutAction|AuthSignOutNokAction | AuthSignUpAction|AuthSignUpNokAction | VerifyAction|VerifyNokAction | SwitchComponentAction |
                            AuthForgotPasswordAction | AuthForgotPasswordNokAction