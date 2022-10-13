import { Container } from '../../components/Container'
import { CheckoutContainer, FormContainer, FormSubmitContainer } from './styles'

export function Checkout() {
  return (
    <Container>
      <CheckoutContainer>
        <FormContainer>
          <span className="title">Complete seu pedido</span>
          <div className="inputBox"></div>
          <div className="paymentMethod"></div>
        </FormContainer>
        <FormSubmitContainer>
          <span className="title">Cafés selecionados</span>
          <div></div>
        </FormSubmitContainer>
      </CheckoutContainer>
    </Container>
  )
}
