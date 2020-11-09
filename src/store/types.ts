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
    shared: boolean;
    sharers: any[];
}

export interface FriendsState {
    friends: any | null;
    recoverFriendsError: Object | null;
    downloadingFriends: boolean;
    deleting: boolean;
    deletingFriendError: Object | null;
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

export interface UserState {
    userImage: File | null;
    uploadError: Object | null;
    removeError: Object | null;
    recoverError: Object | null;
    uploading: boolean;
    uploadSuccess: boolean;
    downloading: boolean;
    loadedUserImage: number;
    totalUserImage: number;
}

export interface FileState {
    files: File[];  
    filterFiles: File[];
    recoverError: Object | null;
    recoverFilterError: Object | null;
    uploadError: Object | null;
    removeError: Object | null;
    sharingError: Object | null;
    stopSharingError: Object | null;
    uploading: boolean;
    uploadSuccess: boolean;
    loadedFile: number;
    totalFile: number;
    downloading: boolean;
    sharing: boolean;
}

export interface ShareFileState {
    files: any | null;
    recoverError: Object | null;
    downloading: boolean;
    sharingToUserOperation: boolean;
    sharingToUserError: Object | null;
    stopSharingToUserError: Object | null;
}

export interface FolderState {
    currentPath: string;
    folders: File[];
    createFolderError: Object | null;
    creating: boolean;
    createSuccess: boolean;
    removing: boolean;
}