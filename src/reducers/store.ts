import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk'
import {registerReducer} from "./register-reducer";
import {authReducer} from "./auth-reduser";

const rootReducer = combineReducers({
    example: registerReducer,
    auth: authReducer,
    register: registerReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppStateType = ReturnType<typeof rootReducer>
// export type AppActionsType