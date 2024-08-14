import ProductsList from '../../components/ProductsList'
import Game from '../../models/Game'
import resident from '../../Assets/images/resident.png'
import zelda from '../../Assets/images/zelda.png'
import diablo from '../../Assets/images/diablo.png'
import starWars from '../../Assets/images/star_wars.png'

const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description: 'Resident',
    system: 'Steam',
    title: 'Resident 4 Remake',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 2,
    category: 'Ação',
    description: 'Zelda',
    system: 'Nintendo Switch',
    title: 'Resident 4 Remake',
    infos: ['10%', 'R$ 380,00'],
    image: zelda
  },
  {
    id: 3,
    category: 'RPG',
    description: 'Diablo',
    system: 'PS5',
    title: 'Resident 4 Remake',
    infos: ['10%', 'R$ 250,00'],
    image: diablo
  },
  {
    id: 4,
    category: 'Aventura',
    description: 'Star Wars',
    system: 'Steam',
    title: 'Resident 4 Remake',
    infos: ['10%', 'R$ 250,00'],
    image: starWars
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'Ação',
    description: 'Resident',
    system: 'Steam',
    title: 'Resident 4 Remake',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 6,
    category: 'Ação',
    description: 'Zelda',
    system: 'Nintendo Switch',
    title: 'Resident 4 Remake',
    infos: ['10%', 'R$ 380,00'],
    image: zelda
  },
  {
    id: 7,
    category: 'RPG',
    description: 'Diablo',
    system: 'PS5',
    title: 'Resident 4 Remake',
    infos: ['15%', 'R$ 225,00'],
    image: diablo
  },
  {
    id: 8,
    category: 'Aventura',
    description: 'Star Wars',
    system: 'Steam',
    title: 'Resident 4 Remake',
    infos: ['10%', 'R$ 250,00'],
    image: starWars
  }
]

const Categories = () => (
  <>
    <ProductsList games={promocoes} title="FPS" background="gray" />
    <ProductsList games={emBreve} title="RPG" background="black" />
    <ProductsList games={promocoes} title="MMO" background="gray" />
    <ProductsList games={emBreve} title="Souls Like" background="black" />
  </>
)

export default Categories
