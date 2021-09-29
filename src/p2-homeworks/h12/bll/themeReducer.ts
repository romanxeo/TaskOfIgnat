export const setThemeAC = (theme: string) => {
    return {
        type: "SET-THEME",
        theme
    } as const
}

export type setThemeAT = ReturnType<typeof setThemeAC>

export type actionType =
  setThemeAT

const initState = {
    theme: 'dark'
};

type InitStateType = typeof initState

export const themeReducer = (state: InitStateType = initState, action: actionType): InitStateType => { // fix any
    switch (action.type) {
        case "SET-THEME": {
            let copyState = {...state};
            copyState.theme = action.theme
            return copyState;
        }
        default:
            return state;
    }
};

