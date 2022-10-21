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
