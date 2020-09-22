import { File, AuthState } from "../types";

export const RECOVER_FILES = 'RECOVER_FILES';
export const RECOVER_FILES_NOK = 'RECOVER_FILES_NOK';

export const UPLOAD_FILE = 'UPLOAD_FILE';
export const UPLOADING_FILE = 'UPLOADING_FILE';
export const UPLOAD_FILE_OK = 'UPLOAD_FILE_OK';
export const UPLOAD_FILE_OK_WAIT = 'UPLOAD_FILE_OK_WAIT';
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

export const AUTH_FORGOT_PASSWORD_SUBMIT = 'AUTH_FORGOT_PASSWORD_SUBMIT'
export const AUTH_FORGOT_PASSWORD_SUBMIT_OK = 'AUTH_FORGOT_PASSWORD_SUBMIT_OK'
export const AUTH_FORGOT_PASSWORD_SUBMIT_NOK = 'AUTH_FORGOT_PASSWORD_SUBMIT_NOK'

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
    payload: any
}

interface UploadFileAction {
    type: typeof UPLOAD_FILE
}
interface UploadingFileAction {
    type: typeof UPLOADING_FILE
    payload: {
        loaded: number
        total: number
    }
}
interface UploadFileokAction {
    type: typeof UPLOAD_FILE_OK
}
interface UploadFileokWaitAction{
    type: typeof UPLOAD_FILE_OK_WAIT
    payload: File
}
interface UploadFileNokAction {
    type: typeof UPLOAD_FILE_NOK
    payload: any
}

interface RemoveFileAction {
    type: typeof REMOVE_FILE
    payload: string
}
interface RemoveFileNokAction {
    type: typeof REMOVE_FILE_NOK
    payload: any
}


interface AuthSignUpAction {
    type: typeof AUTH_SIGNUP
    payload: AuthState
}
interface AuthSignUpNokAction {
    type: typeof AUTH_SIGNUP_NOK
    payload: any
}

interface AuthSignInAction {
    type: typeof AUTH_SIGNIN
    payload: any
}
interface AuthSignInNokAction {
    type: typeof AUTH_SIGNIN_NOK
    payload: any
}

interface AuthForgotPasswordAction {
    type: typeof AUTH_FORGOT_PASSWORD
    payload: string
}
interface AuthForgotPasswordNokAction {
    type: typeof AUTH_FORGOT_PASSWORD_NOK
    payload: any
}

interface AuthForgotPasswordSubmitAction {
    type: typeof AUTH_FORGOT_PASSWORD_SUBMIT
    payload: any
}
interface AuthForgotPasswordSubmitNokAction {
    type: typeof AUTH_FORGOT_PASSWORD_SUBMIT_NOK
    payload: any
}

interface AuthSignOutAction {
    type: typeof AUTH_SIGNOUT
}
interface AuthSignOutNokAction {
    type: typeof AUTH_SIGNOUT_NOK
    payload: any
}

interface VerifyAction {
    type: typeof AUTH_VERIFY
    payload: number
}
interface VerifyNokAction {
    type: typeof AUTH_VERIFY_NOK
    payload: any
}

interface SwitchComponentAction {
    type: typeof AUTH_SWITCH_COMPONENT
    payload: any
}


export type ActionTypes = RecoverFilesAction|RecoverFilesNokAction | UploadFileAction|UploadingFileAction|UploadFileokAction|UploadFileokWaitAction|UploadFileNokAction | RemoveFileAction|RemoveFileNokAction |
                            AuthSignInAction|AuthSignInNokAction | AuthSignOutAction|AuthSignOutNokAction | AuthSignUpAction|AuthSignUpNokAction | VerifyAction|VerifyNokAction | SwitchComponentAction |
                            AuthForgotPasswordAction|AuthForgotPasswordNokAction | AuthForgotPasswordSubmitAction|AuthForgotPasswordSubmitNokAction