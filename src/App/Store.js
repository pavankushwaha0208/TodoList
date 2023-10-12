import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../Fetures/Todo/TodoSlice'

export const store = configureStore({
    reducer : todoReducer
})