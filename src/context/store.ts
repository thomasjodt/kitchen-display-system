import { configureStore } from '@reduxjs/toolkit'
import { OrdersReducer } from './slices'

export const store = configureStore({
  reducer: {
    orders: OrdersReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
