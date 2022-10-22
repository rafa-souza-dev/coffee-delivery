import { AddedCoffeeContainer } from './styles'
import { Minus, Plus, Trash } from 'phosphor-react'
import { CoffeeProps } from '../../interfaces/coffee'
import { useContext } from 'react'
import { CoffeeContext } from '../../contexts/coffee'

export function AddedCoffee(props: CoffeeProps) {
  const { id, imagePath, name, quantity, unitPrice } = props

  const { setCoffeesInContext, coffees, amount, setAmountInContext } =
    useContext(CoffeeContext)

  const totalPrice = (quantity! * unitPrice).toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  })

  function handleAddCoffee() {
    setCoffeesInContext([...coffees, props])
    setAmountInContext(amount + props.unitPrice)
  }

  function handleRemoveCoffe() {
    const coffeeIndex = coffees.findIndex((coffee) => coffee.id === id)
    const newCoffeeArray = coffees
    newCoffeeArray.splice(coffeeIndex, 1)
    setCoffeesInContext(newCoffeeArray)
    setAmountInContext(amount - props.unitPrice)
  }

  function handleRemoveCoffesById() {
    const newCoffesArray = coffees.filter((coffee) => coffee.id !== id)
    setCoffeesInContext(newCoffesArray)
    setAmountInContext(amount - props.unitPrice)
  }

  return (
    <AddedCoffeeContainer>
      <div className="leftBox">
        <img src={imagePath} alt="" />
        <div className="centerBox">
          <span>{name}</span>
          <div className="checkoutController">
            <div className="selectQuantity">
              <div className="accumulator" onClick={handleRemoveCoffe}>
                <Minus size={16} />
              </div>
              <p className="quantity">{quantity}</p>
              <div className="accumulator" onClick={handleAddCoffee}>
                <Plus size={16} />
              </div>
            </div>
            <button className="buttonRemove" onClick={handleRemoveCoffesById}>
              <Trash size={16} color="#8047F8" />
              <span>REMOVER</span>
            </button>
          </div>
        </div>
      </div>
      <span className="unitPrice">{totalPrice}</span>
    </AddedCoffeeContainer>
  )
}
