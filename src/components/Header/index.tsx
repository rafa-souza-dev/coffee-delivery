import { MapPin, ShoppingCart } from 'phosphor-react'
import logo from '../../assets/logo.svg'
import { HeaderContainer } from './styles'
import { Container } from '../Container/index'
import { NavLink } from 'react-router-dom'

export function Header(props: any) {
  return (
    <HeaderContainer>
      <Container>
        <div>
          <img src={logo} alt="" />
          <ul>
            <li>
              <MapPin size={24} />
              <span>Porto Alegre, RS</span>
            </li>
            <li>
              <NavLink to="/checkout" title="Confirmação">
                <button>
                  <ShoppingCart size={24} />
                  <div>
                    <p>3</p>
                  </div>
                </button>
              </NavLink>
            </li>
          </ul>
        </div>
      </Container>
    </HeaderContainer>
  )
}
