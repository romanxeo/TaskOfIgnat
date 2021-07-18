import {UserType} from "../HW8";

export type sortUpAT = {
    type: 'sortUp'
}
export type sortDownAT = {
    type: 'sortDown'
}
export type checkAT = {
    type: 'check'
}

export type actionsType = sortUpAT | sortDownAT | checkAT

export const homeWorkReducer = (state: UserType, action: actionsType): UserType => { // need to fix any
    switch (action.type) {
        case 'sortUp': {
            // need to fix
            let newState = [...state].sort((a,b) => a.name < b.name ? -1 : 1)
            return newState
        }
        case 'sortDown': {
            // need to fix
            let newState = [...state].sort((a,b) => a.name < b.name ? 1 : -1)
            return newState
        }
        case 'check': {
            return state.filter(s => s.age > 18)
        }
        default: return state
    }
}

export const sortUpAC = (): sortUpAT => {
    return {
        type: 'sortUp'
    }
}

export const sortDownAC = (): sortDownAT => {
    return {
        type: 'sortDown'
    }
}

export const checkAC = (): checkAT => {
    return {
        type: 'check'
    }
}