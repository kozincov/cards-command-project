import {Dispatch} from "redux";
import {RegisterArgsType, UsersAPI} from "../API/UsersAPI";

const initialState = {
    isRegisterIn: false
}

export const registerReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "register/SET-IS-REGISTER-IN":
            return {...state, isRegisterIn: action.value}
        default:
            return state
    }
}

//actions
export const setIsRegisterInAC = (value: boolean) => ({type: 'register/SET-IS-REGISTER-IN', value} as const)
//thunks
export const registerTC = (data: RegisterArgsType) => (dispatch: Dispatch) => {
    UsersAPI.register(data)
        .then(()=>{
            dispatch(setIsRegisterInAC(true))
        })
}
//types
type InitialStateType = typeof initialState
type ActionType = ReturnType<typeof setIsRegisterInAC>