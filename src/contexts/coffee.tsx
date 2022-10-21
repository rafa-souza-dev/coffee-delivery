import { useState, createContext } from 'react'
import {
  CoffeeContextData,
  CoffeeProps,
  CoffeeProviderProps,
} from '../interfaces/coffee'

const CoffeeContext = createContext({} as CoffeeContextData)

export function CoffeeProvider({ children }: CoffeeProviderProps) {
  const [amount, setAmount] = useState(0)
  const [coffees, setCoffees] = useState<CoffeeProps[]>([])

  function setCoffeesInContext(coffees: CoffeeProps[]) {
    setCoffees(coffees)
  }

  function setAmountInContext(value: number) {
    setAmount(value)
  }

  return (
    <CoffeeContext.Provider
      value={{
        coffees,
        setCoffeesInContext,
        amount,
        setAmountInContext,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}
