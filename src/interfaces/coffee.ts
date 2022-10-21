import { ReactNode } from 'react'

export interface Category {
  name: 'TRADICIONAL' | 'GELADO' | 'COM LEITE' | 'ESPECIAL' | 'ALCOÓLICO'
}

export interface CoffeeProps {
  id: number
  categories: Category[]
  name: string
  description: string
  unitPrice: number
}

export interface CoffeeContextData {
  amount: number
  setAmountInContext: (value: number) => void
  coffees: CoffeeProps[]
  setCoffeesInContext: (coffees: CoffeeProps[]) => void
}

export interface CoffeeProviderProps {
  children: ReactNode
}
