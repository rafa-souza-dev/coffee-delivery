import { Category, CoffeeProps } from '../../interfaces/coffee'

export const categoriesData: Category[] = [
  { name: 'ALCOÓLICO' },
  { name: 'COM LEITE' },
  { name: 'ESPECIAL' },
  { name: 'GELADO' },
  { name: 'TRADICIONAL' },
]

export const coffeesData: CoffeeProps[] = [
  {
    id: 1,
    categories: [categoriesData[4]],
    description: 'O tradicional café feito com água quente e grãos moídos',
    name: 'Expresso Tradicional',
    unitPrice: 9.9,
  },
  {
    id: 2,
    categories: [categoriesData[4]],
    description: 'Expresso diluído, menos intenso que o tradicional',
    name: 'Expresso Americano',
    unitPrice: 12,
  },
  {
    id: 3,
    categories: [categoriesData[4]],
    description: 'Café expresso tradicional com espuma cremosa',
    name: 'Expresso Cremoso',
    unitPrice: 14,
  },
  {
    id: 4,
    categories: [categoriesData[4], categoriesData[3]],
    description: 'Bebida preparada com café expresso e cubos de gelo',
    name: 'Expresso Gelado',
    unitPrice: 8.9,
  },
  {
    id: 5,
    categories: [categoriesData[4], categoriesData[1]],
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    name: 'Café com Leite',
    unitPrice: 8.9,
  },
  {
    id: 6,
    categories: [categoriesData[4], categoriesData[1]],
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    name: 'Latte',
    unitPrice: 9.9,
  },
  {
    id: 7,
    categories: [categoriesData[4], categoriesData[1]],
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    name: 'Capuccino',
    unitPrice: 9.9,
  },
  {
    id: 8,
    categories: [categoriesData[4], categoriesData[1]],
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    name: 'Macchiato',
    unitPrice: 9.9,
  },
  {
    id: 9,
    categories: [categoriesData[4], categoriesData[1]],
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    name: 'Mocaccino',
    unitPrice: 12,
  },
  {
    id: 10,
    categories: [categoriesData[2], categoriesData[1]],
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    name: 'Chocolate Quente',
    unitPrice: 11,
  },
  {
    id: 11,
    categories: [categoriesData[2], categoriesData[0], categoriesData[3]],
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    name: 'Cubano',
    unitPrice: 11,
  },
  {
    id: 11,
    categories: [categoriesData[2]],
    description: 'Bebida adocicada preparada com café e leite de coco',
    name: 'Havaiano',
    unitPrice: 13,
  },
  {
    id: 12,
    categories: [categoriesData[2]],
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    name: 'Árabe',
    unitPrice: 9.9,
  },
  {
    id: 13,
    categories: [categoriesData[2], categoriesData[0]],
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    name: 'Irlandês',
    unitPrice: 15,
  },
]
