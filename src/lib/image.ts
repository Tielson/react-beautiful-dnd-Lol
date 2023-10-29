import axios from 'axios'

export const image = axios.create({
  baseURL: 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash',
})
