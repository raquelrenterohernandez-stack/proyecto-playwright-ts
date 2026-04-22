import { loginPageData } from "./login-page.data"

export interface User {
    username: string;
    password: string;
}

export const standardUser: User = {
    username: loginPageData.credentials.usernames.standardUser,
    password: loginPageData.credentials.password
}

export const lockedOutUser: User = {
    username: loginPageData.credentials.usernames.lockedOutUser,
    password: loginPageData.credentials.password
} 

export const performanceGlitchUser: User = {
    username: loginPageData.credentials.usernames.performanceGlitchUser,
    password: loginPageData.credentials.password
} 

export const problemUser: User = {
    username: loginPageData.credentials.usernames.problemUser,
    password: loginPageData.credentials.password
}
