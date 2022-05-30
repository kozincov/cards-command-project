import {LoginArgsType, UsersAPI} from "../API/UsersAPI";
import {Dispatch} from "redux";

const initialState = {
    isLoggedIn: false
}


export const authReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch(action.type) {
        case "login/SET-IS-LOGGED-IN":
            return {...state, isLoggedIn: action.value}
        default:
            return state
    }
}

//actions
export const setIsLoggedInAC = (value: boolean) => ({type: 'login/SET-IS-LOGGED-IN', value} as const)

//thunks
export const loginTC = (data: LoginArgsType) => (dispatch: Dispatch) => {
    UsersAPI.login(data)
        .then(() => {
            dispatch(setIsLoggedInAC(true))
        })
}

//types
type InitialStateType = typeof initialState
type ActionType = ReturnType<typeof setIsLoggedInAC>
