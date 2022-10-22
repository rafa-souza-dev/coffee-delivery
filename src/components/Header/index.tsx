import { MapPin, ShoppingCart } from 'phosphor-react'
import logo from '../../assets/logo.svg'
import { HeaderContainer } from './styles'
import { Container } from '../Container/index'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CoffeeContext } from '../../contexts/coffee'

export function Header() {
  const { coffees } = useContext(CoffeeContext)

  return (
    <HeaderContainer>
      <Container>
        <div>
          <NavLink to="/">
            <img src={logo} alt="" />
          </NavLink>
          <ul>
            <li>
              <MapPin size={24} />
              <span>Porto Alegre, RS</span>
            </li>
            <li>
              <NavLink to="/checkout" title="Confirmação">
                <button>
                  <ShoppingCart size={24} />
                  {coffees.length > 0 && (
                    <div>
                      <p>{coffees.length}</p>
                    </div>
                  )}
                </button>
              </NavLink>
            </li>
          </ul>
        </div>
      </Container>
    </HeaderContainer>
  )
}
