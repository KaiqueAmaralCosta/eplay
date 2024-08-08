import Tag from '../Tag'

import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" />
    <Titulo>Nome do jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Steam</Tag>
    <Descricao>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, ullam
      similique voluptates amet rem laborum assumenda corporis error iusto rerum
      qui dolores sint, ut, eligendi repellat officiis consectetur? Numquam,
      quia.
    </Descricao>
  </Card>
)

export default Product
