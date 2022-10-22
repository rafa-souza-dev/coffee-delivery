import { useState, createContext } from 'react'
import {
  CoffeeContextData,
  CoffeeProps,
  CoffeeProviderProps,
} from '../interfaces/coffee'

export const CoffeeContext = createContext({} as CoffeeContextData)

export function CoffeeProvider({ children }: CoffeeProviderProps) {
  const [amount, setAmount] = useState(0)
  const [coffees, setCoffees] = useState<CoffeeProps[]>([])

  function setCoffeesInContext(coffees: CoffeeProps[]) {
    setCoffees(coffees)
  }

  function setAmountInContext(value: number) {
    console.log(value)
    if (value < 3.6) {
      setAmount(0)
    } else {
      setAmount(value)
    }
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
