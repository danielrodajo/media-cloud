export {
    uploadFile,
    removeFile,
} from './FileManager';

export {
    recoverFiles,
    recoverRecentFiles,
    getSharedFile,
} from './RecoverManager';

export {
    signIn,
    signUp,
    verify,
    signOut,
    forgotPassword,
    forgotPasswordSubmit,
    switchComponent,
    authCheckState,
    switchDarkMode,
} from './AuthManager';

export {
    createFolder,
    removeFolder,
    changeFolder,
} from './FolderManager';

export {
    recoverNotifications,
    saveNotification,
    deleteNotification,
} from './NotificationManager';

export {
    getFriends,
} from './FriendsManager';