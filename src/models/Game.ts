class Game {
  // this.algumacoisa, se refere a essa parte
  category: string
  description: string
  image: string
  infos: string[]
  system: string
  title: string
  id: number

  constructor(
    // depois do = se refere ao construtor
    id: number,
    category: string,
    description: string,
    image: string,
    infos: string[],
    system: string,
    title: string
  ) {
    this.id = id
    this.description = description
    this.category = category
    this.image = image
    this.infos = infos
    this.system = system
    this.title = title
  }
}

export default Game
