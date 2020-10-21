export interface UserData { 
    email: string, 
    username: string,
    password: string,
    code: string, 
}

export interface File {
    eTag: string;
    key: string;
    size: number;
    url: string;
    name: string;
}

export interface FriendsState {
    friends: any | null;
    recoverFriendsError: Object | null;
    downloadingFriends: boolean;
}

export interface NotificationState {
    notifications: any | null;
    recoverNotificationError: Object | null;
    saveNotificationError: Object | null;
}


export interface AuthState {
    user: any | null;
    loading: boolean;
    status: string;
    signUpError: Object | null;
    signInError: Object | null;
    verifyError: Object | null;
    signOutError: Object | null;
    forgotPasswordError: Object | null;
    forgotPasswordSubmitError: Object | null;
}

export interface FileState {
    files: File[];
    recoverError: Object | null;
    uploadError: Object | null;
    removeError: Object | null;
    uploading: boolean;
    uploadSuccess: boolean;
    loadedFile: number;
    totalFile: number;
    downloading: boolean;
}

export interface ShareFileState {
    files: any | null;
    recoverError: Object | null;
    downloading: boolean;
}

export interface FolderState {
    currentPath: string;
    folders: File[];
    createFolderError: Object | null;
    creating: boolean;
    createSuccess: boolean;
}