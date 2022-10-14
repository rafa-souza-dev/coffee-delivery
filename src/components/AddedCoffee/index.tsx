import { AddedCoffeeContainer } from './styles'

import { Minus, Plus, Trash } from 'phosphor-react'

import americano from '../../assets/americano.png'

export function AddedCoffee() {
  return (
    <AddedCoffeeContainer>
      <div className="leftBox">
        <img src={americano} alt="" />
        <div className="centerBox">
          <span>Expresso Tradicional</span>
          <div className="checkoutController">
            <div className="selectQuantity">
              <button className="accumulator">
                <Minus size={16} />
              </button>
              <p className="quantity">1</p>
              <button className="accumulator">
                <Plus size={16} />
              </button>
            </div>
            <button className="buttonRemove">
              <Trash size={16} color="#8047F8" />
              <span>REMOVER</span>
            </button>
          </div>
        </div>
      </div>
      <span className="unitPrice">R$ 9,90</span>
    </AddedCoffeeContainer>
  )
}
