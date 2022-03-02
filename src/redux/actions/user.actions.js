export const SET_User = "Set User"
export const Clear_User = "Clear User"

export const setUser = (username) => {
    return { type: SET_User, payload: username }
}

export const clearUser = () => {
    return { type: Clear_User }
}