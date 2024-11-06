
import userReducer from '@/reducers/user.reducer'
import {
    Action,
    combineReducers,
    configureStore,
    ThunkAction,
} from '@reduxjs/toolkit'

const rootReducer = combineReducers({
    user: userReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>
