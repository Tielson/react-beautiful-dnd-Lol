import axios from 'axios'

export const champions = axios.create({
  baseURL:
    'https://ddragon.leagueoflegends.com/cdn/11.19.1/data/pt_BR/champion.json',
})
