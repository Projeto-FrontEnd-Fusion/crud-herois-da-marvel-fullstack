import axios from "axios"
import { hash, ts } from "./apihash"


export const urlMarvelcharacters = 'https://gateway.marvel.com/v1/public/characters';

export const fetcherMarvel = async (url: string) => {

  const response = await axios.get(url, {
    params: {
      ts,
      apikey: import.meta.env.VITE_PUBLIC_KEY,
      hash,
      limit: 10
    }
  })
  return response.data
}