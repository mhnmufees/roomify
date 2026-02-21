interface AuthState {
    isLoggedIn: boolean,
    userName: string | null,
    userId: string | null
}


type AuthContext = {
     isLoggedIn: boolean,
    userName: string | null,
    userId: string | null,
    refreshAuth: () => Promise<boolean>,
    signIn: () => Promise<boolean>
    signOut: () => Promise<boolean>
}