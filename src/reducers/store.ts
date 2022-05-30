import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk'
import {exampleReducer} from "./example-reducer";
import {authReducer} from "./auth-reduser";

const rootReducer = combineReducers({
    example: exampleReducer,
    auth: authReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppStateType = ReturnType<typeof rootReducer>
// export type AppActionsType