import { Container } from '../../components/Container'
import {
  ButtonSelect,
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

// eslint-disable-next-line no-redeclare
interface ButtonSelect {
  id: number
  content: 'CARTÃO DE CRÉDITO' | 'CARTÃO DE DÉBITO' | 'DINHEIRO'
  isSelected: boolean
}

const paymentOptions: ButtonSelect[] = [
  {
    id: 1,
    content: 'CARTÃO DE CRÉDITO',
    isSelected: false,
  },
  {
    id: 2,
    content: 'CARTÃO DE DÉBITO',
    isSelected: false,
  },
  {
    id: 3,
    content: 'DINHEIRO',
    isSelected: false,
  },
]

export function Checkout() {
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
                  <ButtonSelect key={option.id}>
                    {getButtonIcon(option.id)}
                    <span>{option.content}</span>
                  </ButtonSelect>
                ))}
              </div>
            </div>
          </FormContainer>
          <FormSubmitContainer>
            <span className="title">Cafés selecionados</span>
            <SubmitContainer>
              <AddedCoffee />
              <div className="priceTotalBox">
                <div>
                  <p>Total de itens</p>
                  <span>R$ 29,70</span>
                </div>
                <div>
                  <p>Entrega</p>
                  <span>R$ 3,50</span>
                </div>
                <div>
                  <p>Total</p>
                  <span>R$ 33,20</span>
                </div>
              </div>
              <button>CONFIRMAR PEDIDO</button>
            </SubmitContainer>
          </FormSubmitContainer>
        </CheckoutContainer>
      </form>
    </Container>
  )
}
