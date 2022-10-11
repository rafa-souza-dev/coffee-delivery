import { GridBanner, ListCoffees, MenuInfo } from './styles'
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import { Container } from '../../components/Container'
import mainImage from '../../assets/main-image.png'

export function Home() {
  return (
    <Container>
      <GridBanner>
        <MenuInfo>
          <div className="title">
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <span>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </span>
          </div>
          <div className="mainInfoWithGap">
            <div className="iconInfo">
              <div className="icon cart">
                <ShoppingCart size={20} />
              </div>
              <p>Compra simples e segura</p>
            </div>
            <div className="iconInfo">
              <div className="icon package">
                <Package size={20} />
              </div>
              <p>Embalagem mantém o café intacto</p>
            </div>
          </div>
          <div className="mainInfo">
            <div className="iconInfo">
              <div className="icon timer">
                <Timer size={20} />
              </div>
              <p>Entrega rápida e rastreada</p>
            </div>
            <div className="iconInfo">
              <div className="icon coffee">
                <Coffee size={20} />
              </div>
              <p>O café chega fresquinho até você</p>
            </div>
          </div>
        </MenuInfo>
        <img src={mainImage} alt="" />
      </GridBanner>
      <ListCoffees>
        <h1>Nossos cafés</h1>
        <ul>
          <li>cafézin</li>
        </ul>
      </ListCoffees>
    </Container>
  )
}
