import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Game } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/eplay'
  }),
  endpoints: (builder) => ({
    getFeaturedGame: builder.query<Game, void>({
      query: () => 'destaque'
    }),
    getOnSale: builder.query<Game[], void>({
      query: () => 'promocoes'
    }),
    getSoon: builder.query<Game[], void>({
      query: () => 'em-breve'
    }),
    getAcao: builder.query<Game[], void>({
      query: () => 'acao'
    }),
    getEsportes: builder.query<Game[], void>({
      query: () => 'esportes'
    }),
    getSimulacao: builder.query<Game[], void>({
      query: () => 'simulacao'
    }),
    getLuta: builder.query<Game[], void>({
      query: () => 'luta'
    }),
    getRPG: builder.query<Game[], void>({
      query: () => 'rpg'
    }),
    getGame: builder.query<Game, string>({
      query: (id) => `jogos/${id}`
    })
  })
})

export const {
  useGetFeaturedGameQuery,
  useGetSoonQuery,
  useGetOnSaleQuery,
  useGetAcaoQuery,
  useGetEsportesQuery,
  useGetLutaQuery,
  useGetRPGQuery,
  useGetSimulacaoQuery,
  useGetGameQuery
} = api

export default api
