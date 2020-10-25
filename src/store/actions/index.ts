export {
    uploadFile,
    removeFile,
} from './FileManager';

export {
    recoverFiles,
    recoverRecentFiles,
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
    deleteFriend,
    addFriend,
} from './FriendManager';

export {
    sharingFile,
    stopSharingFile,
    recoverShareFiles,
    shareFileToFriend,
    stopSharingFileToFriend,
} from './ShareFileManager';