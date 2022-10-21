import { CardContainer } from './styles'
import { ShoppingCart, Plus, Minus } from 'phosphor-react'
import { CoffeeProps } from '../../interfaces/coffee'
import { getCoffeeImage } from '../../utils/coffees'
import { useContext } from 'react'
import { CoffeeContext } from '../../contexts/coffee'

export function CoffeeCard(props: CoffeeProps) {
  const { categories, description, id, name, unitPrice } = props

  const { coffees, setCoffeesInContext, amount, setAmountInContext } =
    useContext(CoffeeContext)

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

  const imagePath = getCoffeeImage(id)

  const price = unitPrice
    .toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    })
    .slice(3)

  const quantity = coffees.filter((coffee) => coffee.id === id).length

  return (
    <CardContainer>
      <img src={imagePath} alt="" />
      <div className="categories">
        {categories.map((category) => (
          <span key={category.name} className="title">
            {category.name}
          </span>
        ))}
      </div>
      <strong>{name}</strong>
      <p className="textInfo">{description}</p>
      <footer>
        <div className="priceContainer">
          <p className="priceSymbol">R$</p>
          <span className="priceValue">{price}</span>
        </div>
        <div className="accumulatorContainer">
          <div className="selectQuantity">
            <button className="accumulator" onClick={handleRemoveCoffe}>
              <Minus size={16} />
            </button>
            <p className="quantity">{quantity}</p>
            <button className="accumulator" onClick={handleAddCoffee}>
              <Plus size={16} />
            </button>
          </div>
          <div className="iconCart">
            <ShoppingCart size={24} />
          </div>
        </div>
      </footer>
    </CardContainer>
  )
}
