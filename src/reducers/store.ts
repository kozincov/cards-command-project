import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk, {ThunkDispatch} from 'redux-thunk'
import {RegisterActionType, registerReducer} from "./register-reducer";
import {authReducer, LoginActionType} from "./auth-reduser";
import {useDispatch} from "react-redux";

const rootReducer = combineReducers({
    example: registerReducer,
    auth: authReducer,
    register: registerReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
export const useTypedDispatch = () => useDispatch<TypedDispatch>();

//types
export type AppStateType = ReturnType<typeof rootReducer>
export type AppActionType = RegisterActionType | LoginActionType
export type TypedDispatch = ThunkDispatch<AppStateType, any, AppActionType>;