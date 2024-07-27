
import './App.css'
import useSWR from 'swr'
import { fetcherMarvel, urlMarvelcharacters } from './api'


function App() {

  const {data} = useSWR(urlMarvelcharacters, fetcherMarvel)
console.log(data)

  return (
    <>
      <main>
        <span>Bem vindo ao Desafio Fullstack </span>
        <form action="">
          <legend>Adicionar novos Herois</legend>
        </form>

      </main>
    </>
  )
}

export default App
