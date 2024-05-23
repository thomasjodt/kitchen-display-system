import type { orderTypes } from '@/data'

export interface Product {
  name: string
  comment?: string
  quantity: number
  isDone: boolean
}

export interface Order {
  customerName: string
  id: number
  date: string
  type: OrderType
  products: Product[]
  isDone: boolean
}

export type OrderType = typeof orderTypes[number]
