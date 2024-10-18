import ProductsList from '../../components/ProductsList'

import {
  useGetAcaoQuery,
  useGetEsportesQuery,
  useGetLutaQuery,
  useGetRPGQuery,
  useGetSimulacaoQuery
} from '../../services/api'

const Categories = () => {
  const { data: acaoGame } = useGetAcaoQuery()
  const { data: esporteGame } = useGetEsportesQuery()
  const { data: lutaGame } = useGetLutaQuery()
  const { data: rpgGame } = useGetRPGQuery()
  const { data: simulcaoGame } = useGetSimulacaoQuery()

  if (acaoGame && esporteGame && lutaGame && rpgGame && simulcaoGame) {
    return (
      <>
        <ProductsList
          games={acaoGame}
          title="Acao"
          background="gray"
          id="action"
        />
        <ProductsList
          games={esporteGame}
          title="Esportes"
          background="black"
          id="sports"
        />
        <ProductsList
          games={simulcaoGame}
          title="Simulacao"
          background="gray"
          id="simulation"
        />
        <ProductsList
          games={lutaGame}
          title="Luta"
          background="black"
          id="fight"
        />
        <ProductsList games={rpgGame} title="RPG" background="gray" id="rpg" />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Categories
