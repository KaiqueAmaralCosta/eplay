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
        <ProductsList games={acaoGame} title="Acao" background="gray" />
        <ProductsList games={esporteGame} title="Esportes" background="black" />
        <ProductsList
          games={simulcaoGame}
          title="Simulacao"
          background="gray"
        />
        <ProductsList games={lutaGame} title="Luta" background="black" />
        <ProductsList games={rpgGame} title="RPG" background="gray" />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Categories
