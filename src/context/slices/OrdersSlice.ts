import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit/react'
import type { Order } from '@/types'

interface InitialState {
  orders: Order[]
}

const initialState: InitialState = {
  orders: [
    {
      id: 2,
      date: new Date().toISOString(),
      isDone: false,
      products: [
        { name: 'lettuce', quantity: 1, isDone: false, comment: 'Only if very green' },
        { name: 'Cucumber', quantity: 1, isDone: false, comment: 'with peel' },
        { name: 'Carrot', quantity: 1, isDone: false },
        { name: 'Tomato', quantity: 1, isDone: false }
      ],
      type: 'dine-in',
      customerName: 'John Die'
    }
  ]
}

const OrdersSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // add
    add: (state, action: PayloadAction<Order>) => {
      state.orders.push(action.payload)
    },
    // remove
    remove: (state, action: PayloadAction<Order>) => {
      state.orders = state.orders.filter(order => order.id !== action.payload.id)
    },
    // edit
    edit: (state, action: PayloadAction<Order>) => {
      state.orders.map(order => (
        (order.id === action.payload.id) ? { ...order, ...action } : order
      ))
    }
  }
})

export const { add, edit, remove } = OrdersSlice.actions
export const OrdersReducer = OrdersSlice.reducer
