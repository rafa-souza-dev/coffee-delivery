import americano from '../../assets/americano.png'
import { CardContainer } from './styles'
import { ShoppingCart, Plus, Minus } from 'phosphor-react'

export function CoffeeCard() {
  return (
    <CardContainer>
      <img src={americano} alt="" />
      <span className="title">TRADICIONAL</span>
      <strong>Expresso Tradicional</strong>
      <p className="textInfo">
        O tradicional café feito com água quente e grãos moídos
      </p>
      <footer>
        <div className="priceContainer">
          <p className="priceSymbol">R$</p>
          <span className="priceValue">9,90</span>
        </div>
        <div className="accumulatorContainer">
          <div className="selectQuantity">
            <button className="accumulator">
              <Minus size={12} />
            </button>
            <p className="quantity">1</p>
            <button className="accumulator">
              <Plus size={12} />
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
