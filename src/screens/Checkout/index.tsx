import { Container } from '../../components/Container'
import { CheckoutContainer, FormContainer, FormSubmitContainer } from './styles'
import { MapPinLine } from 'phosphor-react'

export function Checkout() {
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
            <div className="paymentMethod"></div>
          </FormContainer>
          <FormSubmitContainer>
            <span className="title">Cafés selecionados</span>
            <div></div>
          </FormSubmitContainer>
        </CheckoutContainer>
      </form>
    </Container>
  )
}
