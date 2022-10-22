import { Container } from '../../components/Container'
import {
  OptionSelected,
  CheckoutContainer,
  FormContainer,
  FormSubmitContainer,
  SubmitContainer,
} from './styles'
import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Money,
  Bank,
} from 'phosphor-react'
import { AddedCoffee } from '../../components/AddedCoffee'
import { useContext, useState } from 'react'
import { CoffeeContext } from '../../contexts/coffee'

import { CoffeeProps } from '../../interfaces/coffee'
import { coffeesData } from '../Home/mockCoffees'
import { getCoffeeImage } from '../../utils/coffees'

// eslint-disable-next-line no-redeclare
interface ButtonSelect {
  id: number
  content: 'CARTÃO DE CRÉDITO' | 'CARTÃO DE DÉBITO' | 'DINHEIRO'
}

const paymentOptions: ButtonSelect[] = [
  {
    id: 1,
    content: 'CARTÃO DE CRÉDITO',
  },
  {
    id: 2,
    content: 'CARTÃO DE DÉBITO',
  },
  {
    id: 3,
    content: 'DINHEIRO',
  },
]

export function Checkout() {
  const { coffees, amount } = useContext(CoffeeContext)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)

  function getButtonIcon(id: number) {
    switch (id) {
      case 1:
        return <CreditCard size={16} color="#8047F8" />
      case 2:
        return <Bank size={16} color="#8047F8" />
      case 3:
        return <Money size={16} color="#8047F8" />
      default:
        return <CreditCard size={16} color="#8047F8" />
    }
  }

  function getUniqueIds() {
    const ids: number[] = []

    coffees.forEach((coffee) => {
      if (!ids.includes(coffee.id)) {
        ids.push(coffee.id)
      }
    })

    return ids
  }

  function getSelectedCoffees() {
    const coffeesAux: CoffeeProps[] = []

    getUniqueIds().forEach((id) => {
      const coffee = coffeesData.find((coffeeData) => coffeeData.id === id)
      if (coffee) coffeesAux.push(coffee)
    })

    return coffeesAux
  }

  function getQuantity(id: number) {
    return coffees.filter((coffee) => coffee.id === id).length
  }

  const itemsAmount = amount.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  })

  const totalAmount = (amount + 3.5).toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  })

  const isButtonDisabled = amount === 0

  return (
    <Container>
      <form action="">
        <CheckoutContainer>
          <FormContainer>
            <span className="title">Complete seu pedido</span>
            <div className="inputBox">
              <div className="titleContainer">
                <div className="titleBox">
                  <MapPinLine size={24} color="#C47F17" />
                  <strong>Endereço de Entrega</strong>
                </div>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
              <div className="inputContainer">
                <input type="text" placeholder="CEP" className="normal" />
                <input type="text" placeholder="Rua" className="big" />
                <input type="number" placeholder="Número" className="normal" />
                <input
                  type="text"
                  placeholder="Complemento"
                  className="optional"
                />
                <input type="text" placeholder="Bairro" className="normal" />
                <input type="text" placeholder="Cidade" className="city" />
                <input type="text" placeholder="UF" className="small" />
              </div>
            </div>
            <div className="paymentMethodBox">
              <div className="titleContainer">
                <div className="titleBox">
                  <CurrencyDollar size={24} color="#8047F8" />
                  <strong>Pagamento</strong>
                </div>
                <span>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </span>
              </div>
              <div className="methodSelect">
                {paymentOptions.map((option) => (
                  <OptionSelected
                    key={option.id}
                    onClick={() => setSelectedOption(option.id)}
                    isSelected={selectedOption === option.id}
                  >
                    {getButtonIcon(option.id)}
                    <span>{option.content}</span>
                  </OptionSelected>
                ))}
              </div>
            </div>
          </FormContainer>
          <FormSubmitContainer>
            <span className="title">Cafés selecionados</span>
            <SubmitContainer>
              {getSelectedCoffees().map((coffee) => (
                <AddedCoffee
                  key={coffee.id}
                  id={coffee.id}
                  imagePath={getCoffeeImage(coffee.id)}
                  name={coffee.name}
                  quantity={getQuantity(coffee.id)}
                  unitPrice={coffee.unitPrice}
                />
              ))}
              <div className="priceTotalBox">
                <div>
                  <p>Total de itens</p>
                  <span>{itemsAmount}</span>
                </div>
                <div>
                  <p>Entrega</p>
                  <span>R$ 3,50</span>
                </div>
                <div>
                  <p>Total</p>
                  <span>{totalAmount}</span>
                </div>
              </div>
              <button disabled={isButtonDisabled}>CONFIRMAR PEDIDO</button>
            </SubmitContainer>
          </FormSubmitContainer>
        </CheckoutContainer>
      </form>
    </Container>
  )
}
