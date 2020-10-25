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
export const AUTH_SIGNOUT_OK = 'AUTH_SIGNOUT_OK';
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

export const RECOVER_FRIENDS = "RECOVER_FRIENDS";
export const RECOVER_FRIENDS_OK = "RECOVER_FRIENDS_OK";
export const RECOVER_FRIENDS_NOK = "RECOVER_FRIENDS_NOK";

export const DELETE_FRIEND = "DELETE_FRIEND";
export const DELETE_FRIEND_OK = "DELETE_FRIEND_OK";
export const DELETE_FRIEND_NOK = "DELETE_FRIEND_NOK";

export const ADD_FRIEND = "ADD_FRIEND";
export const ADD_FRIEND_OK = "ADD_FRIEND_OK";
export const ADD_FRIEND_NOK = "ADD_FRIEND_NOK";

export const RECOVER_SHARE_FILES = "RECOVER_SHARE_FILES";
export const RECOVER_SHARE_FILES_OK = "RECOVER_SHARE_FILES_OK";
export const RECOVER_SHARE_FILES_NOK = "RECOVER_SHARE_FILES_NOK";

export const SHARING_FILE = "SHARE_FILE";
export const SHARING_FILE_OK = "SHARE_FILE_OK";
export const SHARING_FILE_NOK = "SHARE_FILE_NOK";

export const STOP_SHARING_FILE = "STOP_SHARING_FILE";
export const STOP_SHARING_FILE_OK = "STOP_SHARING_FILE_OK";
export const STOP_SHARING_FILE_NOK = "STOP_SHARING_FILE_NOK";

export const SHARE_FILE_WITH_FRIEND = "SHARE_FILE_WITH_FRIEND";
export const SHARE_FILE_WITH_FRIEND_OK = "SHARE_FILE_WITH_FRIEND_OK";
export const SHARE_FILE_WITH_FRIEND_NOK = "SHARE_FILE_WITH_FRIEND_NOK";

export const STOP_SHARE_FILE_WITH_FRIEND = "STOP_SHARE_FILE_WITH_FRIEND";
export const STOP_SHARE_FILE_WITH_FRIEND_OK = "STOP_SHARE_FILE_WITH_FRIEND_OK";
export const STOP_SHARE_FILE_WITH_FRIEND_NOK = "STOP_SHARE_FILE_WITH_FRIEND_NOK"; 

interface shareFileWithFriendAction {
    type: typeof SHARE_FILE_WITH_FRIEND
}
interface shareFileWithFriendOkAction {
    type: typeof SHARE_FILE_WITH_FRIEND_OK,
    payload: any
}
interface shareFileWithFriendNokAction {
    type: typeof SHARE_FILE_WITH_FRIEND_NOK,
    payload: any
}

interface stopShareFileWithFriendAction {
    type: typeof STOP_SHARE_FILE_WITH_FRIEND
}
interface stopShareFileWithFriendOkAction {
    type: typeof STOP_SHARE_FILE_WITH_FRIEND_OK,
    payload: any
}
interface stopShareFileWithFriendNokAction {
    type: typeof STOP_SHARE_FILE_WITH_FRIEND_NOK,
    payload: any
}

interface sharingFileAction {
    type: typeof SHARING_FILE
}
interface sharingFileOkAction {
    type: typeof SHARING_FILE_OK,
    payload: any
}
interface sharingFileNokAction {
    type: typeof SHARING_FILE_NOK,
    payload: any
}

interface stopSharingFileAction {
    type: typeof STOP_SHARING_FILE
}
interface stopSharingFileOkAction {
    type: typeof STOP_SHARING_FILE_OK,
    payload: any
}
interface stopSharingFileNokAction {
    type: typeof STOP_SHARING_FILE_NOK,
    payload: any
}

interface RecoverShareFilesAction {
    type: typeof RECOVER_SHARE_FILES
}
interface RecoverShareFilesOkAction {
    type: typeof RECOVER_SHARE_FILES_OK
    payload: any
}
interface RecoverShareFilesNokAction {
    type: typeof RECOVER_SHARE_FILES_NOK
    payload: any
}

interface addFriendAction {
    type: typeof ADD_FRIEND
}
interface addFriendOkAction {
    type: typeof ADD_FRIEND_OK
    payload: any
}
interface addFriendNokAction {
    type: typeof ADD_FRIEND_NOK
    payload: any
}

interface deleteFriendAction {
    type: typeof DELETE_FRIEND
}
interface deleteFriendOkAction {
    type: typeof DELETE_FRIEND_OK
    payload: any
}
interface deleteFriendNokAction {
    type: typeof DELETE_FRIEND_NOK
    payload: any
}

interface RecoverFriendsAction {
    type: typeof RECOVER_FRIENDS
}
interface RecoverFriendsOkAction {
    type: typeof RECOVER_FRIENDS_OK,
    payload: any
}
interface RecoverFriendsNokAction {
    type: typeof RECOVER_FRIENDS_NOK,
    payload: any
}

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
}
interface AuthSignUpOkAction {
    type: typeof AUTH_SIGNUP_OK
    payload: AuthState
}
interface AuthSignUpNokAction {
    type: typeof AUTH_SIGNUP_NOK
    payload: any
}

interface AuthSignInAction {
    type: typeof AUTH_SIGNIN
}
interface AuthSignInOkAction {
    type: typeof AUTH_SIGNIN_OK
    payload: any
}
interface AuthSignInNokAction {
    type: typeof AUTH_SIGNIN_NOK
    payload: any
}

interface AuthForgotPasswordAction {
    type: typeof AUTH_FORGOT_PASSWORD
}
interface AuthForgotPasswordOkAction {
    type: typeof AUTH_FORGOT_PASSWORD_OK
    payload: string
}
interface AuthForgotPasswordNokAction {
    type: typeof AUTH_FORGOT_PASSWORD_NOK
    payload: any
}

interface AuthForgotPasswordSubmitAction {
    type: typeof AUTH_FORGOT_PASSWORD_SUBMIT
}
interface AuthForgotPasswordSubmitOkAction {
    type: typeof AUTH_FORGOT_PASSWORD_SUBMIT_OK
    payload: any
}
interface AuthForgotPasswordSubmitNokAction {
    type: typeof AUTH_FORGOT_PASSWORD_SUBMIT_NOK
    payload: any
}

interface AuthSignOutAction {
    type: typeof AUTH_SIGNOUT
}
interface AuthSignOutOkAction {
    type: typeof AUTH_SIGNOUT_OK
}
interface AuthSignOutNokAction {
    type: typeof AUTH_SIGNOUT_NOK
    payload: any
}

interface VerifyAction {
    type: typeof AUTH_VERIFY
}
interface VerifyOkAction {
    type: typeof AUTH_VERIFY_OK
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
                            AuthSignInAction|AuthSignInOkAction|AuthSignInNokAction | AuthSignOutAction|AuthSignOutOkAction|AuthSignOutNokAction | AuthSignUpAction|AuthSignUpOkAction|AuthSignUpNokAction | VerifyAction|VerifyOkAction|VerifyNokAction | SwitchComponentAction |
                            AuthForgotPasswordAction|AuthForgotPasswordOkAction|AuthForgotPasswordNokAction | AuthForgotPasswordSubmitAction|AuthForgotPasswordSubmitOkAction|AuthForgotPasswordSubmitNokAction | SwitchDarkModeAction |
                            RecoverNotificationAction|RecoverNotificationNokAction|RecoverNotificationOkAction | SaveNotificationAction|SaveNotificationOkAction|SaveNotificationNokAction | DeleteNotificationAction|DeleteNotificationOkAction|DeleteNotificationNokAction |
                            RecoverFriendsAction|RecoverFriendsOkAction|RecoverFriendsNokAction | deleteFriendAction|deleteFriendOkAction|deleteFriendNokAction | addFriendAction|addFriendNokAction|addFriendOkAction |
                            RecoverShareFilesAction|RecoverShareFilesOkAction|RecoverShareFilesNokAction | sharingFileAction|sharingFileOkAction|sharingFileNokAction | stopSharingFileAction|stopSharingFileOkAction|stopSharingFileNokAction |
                            shareFileWithFriendAction|shareFileWithFriendOkAction|shareFileWithFriendNokAction | stopShareFileWithFriendAction|stopShareFileWithFriendOkAction|stopShareFileWithFriendNokAction
