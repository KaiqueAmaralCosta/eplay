import Button from '../Buttom'

import starWar from '../../Assets/images/star_wars.png'

import {
  Overlay,
  CartContainer,
  Sidebar,
  Prices,
  Quantity,
  CartItem
} from './style'

import Tag from '../Tag'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { formataPreco } from '../ProductsList'

import { close, remov } from '../../store/reducers/cart'
const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const cloenCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.prices.current!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remov(id))
  }
  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={cloenCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.media.thumbnail} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <Tag>{item.details.category}</Tag>
                <Tag>{item.details.system}</Tag>
                <span>{formataPreco(item.prices.current)}</span>
              </div>
              <button onClick={() => removeItem(item.id)} type="button" />
            </CartItem>
          ))}
        </ul>
        <Quantity>{items.length} jogo(s) no carrinho</Quantity>
        <Prices>
          Total de R$ {formataPreco(getTotalPrice())}{' '}
          <span>Em ate 6x sem juros</span>
        </Prices>
        <Button title="Clique aqui para continuar com a compra" type="button">
          Continuar com a compra
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
function remove(id: number): any {
  throw new Error('Function not implemented.')
}
