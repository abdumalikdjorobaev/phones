import { configureStore } from '@reduxjs/toolkit'
import todo from './slices/todo'
import profileTodo from './slices/profileTodo'

export const store = configureStore({
  reducer: {
    todo,
    profileTodo,
  },
})
