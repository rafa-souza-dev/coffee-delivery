import { Container } from '../../components/Container'

import { SuccessContainer } from './styles'

export function Success() {
  return (
    <Container>
      <SuccessContainer>
        <div className="leftBox">
          <div className="titleContainer">
            <h1>Uhu! Pedido confirmado</h1>
            <p>Agora é só aguardar que logo o café chegará até você</p>
          </div>
          <div className="addressContainer">
            <div>
              <div></div>
              <div></div>
            </div>
            <div>
              <div></div>
              <div></div>
            </div>
            <div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        <div></div>
      </SuccessContainer>
    </Container>
  )
}
