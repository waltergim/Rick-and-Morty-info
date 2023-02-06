import { useEffect, useState } from 'react'
import { Botones } from './componets/Botones'
import { Buscador } from './componets/Buscador'
import { Mensaje } from './componets/Mensaje'
import { Titulo } from './componets/Titulo'
import {Map}      from './componets/Map'
import "./styles/styles.css"

function App() {

  const [rick, setRick]         = useState([])
  const [contador, setContador] = useState(1)

  const url = `https://rickandmortyapi.com/api/character/?page=` + contador

  const getRicks = async () => {
    try {

      const peticion = await fetch(url)
      const data = await peticion.json()
      setRick(data.results)
      console.log(data.results)

    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {

    getRicks()
    
  }, [contador])



  return (
    <>

    <Titulo/>

    <Botones contador={contador} setContador={setContador}/>
 
    <Buscador rick={rick} contador={contador} />

    <Mensaje contador={contador}/>

    <Map rick={rick}/>
 
    </>

  )
}

export default App
