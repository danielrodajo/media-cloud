import { File, AuthState } from "../types";

export const CHANGE_FOLDER = "CHANGE_FOLDER";
export const CHANGE_FOLDER_OK = "CHANGE_FOLDER_OK";
export const CHANGE_FOLDER_NOK = "CHANGE_FOLDER_NOK";

export const RECOVER_FOLDERS = "RECOVER_FOLDERS";
export const RECOVER_FOLDERS_OK = "RECOVER_FOLDERS_OK";
export const RECOVER_FOLDERS_NOK = "RECOVER_FOLDERS_NOK";

export const CREATE_FOLDER = "CREATE_FOLDER";
export const CREATE_FOLDER_OK = "CREATE_FOLDER_OK";
export const CREATE_FOLDER_NOK = "CREATE_FOLDER_NOK";

export const REMOVE_FOLDER = "REMOVE_FOLDER";
export const REMOVE_FOLDER_OK = "REMOVE_FOLDER_OK";
export const REMOVE_FOLDER_NOK = "REMOVE_FOLDER_NOK";

export const RECOVER_FILES = 'RECOVER_FILES';
export const RECOVER_FILES_OK = 'RECOVER_FILES_OK';
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

export const SWITCH_DARKMODE = 'SWITCH_DARKMODE';

export const RECOVER_NOTIFICATION = "RECOVER_NOTIFICATION";
export const RECOVER_NOTIFICATION_OK = "RECOVER_NOTIFICATION_OK";
export const RECOVER_NOTIFICATION_NOK = "RECOVER_NOTIFICATION_NOK";

export const SAVE_NOTIFICATION = "SAVE_NOTIFICATION";
export const SAVE_NOTIFICATION_OK = "SAVE_NOTIFICATION_OK";
export const SAVE_NOTIFICATION_NOK = "SAVE_NOTIFICATION_NOK";

export const DELETE_NOTIFICATION = "DELETE_NOTIFICATION";
export const DELETE_NOTIFICATION_OK = "DELETE_NOTIFICATION_OK";
export const DELETE_NOTIFICATION_NOK = "DELETE_NOTIFICATION_NOK";

interface DeleteNotificationAction {
    type: typeof DELETE_NOTIFICATION
}
interface DeleteNotificationOkAction {
    type: typeof DELETE_NOTIFICATION_OK,
    payload: any
}
interface DeleteNotificationNokAction {
    type: typeof DELETE_NOTIFICATION_NOK,
    payload: any
}

interface SaveNotificationAction {
    type: typeof SAVE_NOTIFICATION
}
interface SaveNotificationOkAction {
    type: typeof SAVE_NOTIFICATION_OK,
    payload: any
}
interface SaveNotificationNokAction {
    type: typeof SAVE_NOTIFICATION_NOK,
    payload: any
}

interface RecoverNotificationAction {
    type: typeof RECOVER_NOTIFICATION
}
interface RecoverNotificationOkAction {
    type: typeof RECOVER_NOTIFICATION_OK
    payload: any
}
interface RecoverNotificationNokAction {
    type: typeof RECOVER_NOTIFICATION_NOK
    payload: any
}

interface ChangeFolderAction {
    type: typeof CHANGE_FOLDER,
    payload: string
}
interface ChangeFolderActionNok {
    type: typeof CHANGE_FOLDER,
    payload: any
}

interface RecoverFoldersAction {
    type: typeof RECOVER_FOLDERS,
    payload: any
}
interface RecoverFoldersActionNok {
    type: typeof RECOVER_FOLDERS_NOK,
    payload: any
}

interface CreateFolderAction {
    type: typeof CREATE_FOLDER
}
interface CreateFolderActionOk {
    type: typeof CREATE_FOLDER_OK,
    payload: any
}
interface CreateFolderActionNok {
    type: typeof CREATE_FOLDER_NOK,
    payload: any
}

interface RemoveFolderAction {
    type: typeof REMOVE_FOLDER,
    payload: string
}
interface RemoveFolderActionNok {
    type: typeof REMOVE_FOLDER_NOK,
    payload: any
}

interface RecoverFilesAction {
    type: typeof RECOVER_FILES
}
interface RecoverFilesOkAction {
    type: typeof RECOVER_FILES_OK,
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

interface SwitchDarkModeAction {
    type: typeof SWITCH_DARKMODE
    payload: any
}

export type ActionTypes =   RecoverFilesOkAction | ChangeFolderAction|ChangeFolderActionNok | RecoverFoldersAction|RecoverFoldersActionNok | CreateFolderAction|CreateFolderActionOk|CreateFolderActionNok | RemoveFolderAction|RemoveFolderActionNok |
                            RecoverFilesAction|RecoverFilesNokAction | UploadFileAction|UploadingFileAction|UploadFileokAction|UploadFileokWaitAction|UploadFileNokAction | RemoveFileAction|RemoveFileNokAction |
                            AuthSignInAction|AuthSignInNokAction | AuthSignOutAction|AuthSignOutNokAction | AuthSignUpAction|AuthSignUpNokAction | VerifyAction|VerifyNokAction | SwitchComponentAction |
                            AuthForgotPasswordAction|AuthForgotPasswordNokAction | AuthForgotPasswordSubmitAction|AuthForgotPasswordSubmitNokAction | SwitchDarkModeAction |
                            RecoverNotificationAction|RecoverNotificationNokAction|RecoverNotificationOkAction | SaveNotificationAction|SaveNotificationOkAction|SaveNotificationNokAction | DeleteNotificationAction|DeleteNotificationOkAction|DeleteNotificationNokAction 
