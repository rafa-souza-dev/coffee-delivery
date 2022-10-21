import { CardContainer } from './styles'
import { ShoppingCart, Plus, Minus } from 'phosphor-react'
import { CoffeeProps } from '../../interfaces/coffee'
import { getCoffeeImage } from '../../utils/coffees'

export function CoffeeCard(props: CoffeeProps) {
  const { categories, description, id, name, unitPrice } = props

  const imagePath = getCoffeeImage(id)

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
          <span className="priceValue">{unitPrice}</span>
        </div>
        <div className="accumulatorContainer">
          <div className="selectQuantity">
            <button className="accumulator">
              <Minus size={16} />
            </button>
            <p className="quantity">1</p>
            <button className="accumulator">
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
