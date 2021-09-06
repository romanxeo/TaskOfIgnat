
export const loadingAC = (isLoad: boolean) => {
    return {type: 'HW10/LOADING', isLoad} as const
}

export type loadingAT = ReturnType<typeof loadingAC>

//for extentions
export type ActionTypes = loadingAT

export type initStateType = {
    isLoad: boolean
}

const initState: initStateType = {
 isLoad: false
}

export const loadingReducer = (state: initStateType = initState, action: ActionTypes): initStateType => { // fix any
    switch (action.type) {
        case 'HW10/LOADING': {
            return {...state, isLoad: action.isLoad}
        }
        default: return state
    }
}

