import americano from '../assets/americano.png'
import arabe from '../assets/arabe.png'
import cafeComLeite from '../assets/cafe_com_leite.png'
import cafeGelado from '../assets/cafe_gelado.png'
import capuccino from '../assets/capuccino.png'
import chocolateQuente from '../assets/chocolate_quente.png'
import cubano from '../assets/cubano.png'
import expressoCremoso from '../assets/expresso_cremoso.png'
import expresso from '../assets/expresso.png'
import havaiano from '../assets/havaiano.png'
import irlandes from '../assets/irlandes.png'
import latte from '../assets/latte.png'
import macchiato from '../assets/macchiato.png'
import mochaccino from '../assets/mochaccino.png'

export function getCoffeeImage(id: number) {
  switch (id) {
    case 1:
      return americano
    case 2:
      return arabe
    case 3:
      return cafeComLeite
    case 4:
      return cafeGelado
    case 5:
      return capuccino
    case 6:
      return chocolateQuente
    case 7:
      return cubano
    case 8:
      return expressoCremoso
    case 9:
      return expresso
    case 11:
      return havaiano
    case 12:
      return irlandes
    case 13:
      return havaiano
    case 14:
      return latte
    case 15:
      return macchiato
    case 16:
      return mochaccino
    default:
      return americano
  }
}
