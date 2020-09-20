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
}

export interface Error {
    code: string;
    message: string;
    name: string;
}

export interface AuthState {
    user: any | null;
    status: string;
    signUpError: Object | null;
    signInError: Object | null;
    verifyError: Object | null;
    signOutError: Object | null;
}

export interface FileState {
    files: File[];
    recoverError: Object | null;
    uploadError: Object | null;
    removeError: Object | null;
}