import React, { useState } from 'react'
import { Mensaje } from './Mensaje'

export const Buscador = ({rick,contador}) => {

  const [buscador ,setBuscador] = useState('')
  const [noEcntrado, setNoEncontrado] = useState(false)
  const inputBuscador = (e) =>{

    setBuscador(e.target.value)

  }
  
  const BuscadorPersonaje = (e) => {

    e.preventDefault()

      for (const i in rick) {

      let nombrePersonaje = rick[i].name
       if(nombrePersonaje === buscador){
        console.log(nombrePersonaje)
        setBuscador('')
        setNoEncontrado(true)
        break
       }else{
        setNoEncontrado(false)
       }
    
    }
    

  }

  return (
    <div className='formulario' >
     
    <form onSubmit={BuscadorPersonaje} >
      <input type="text"  name='buscar' placeholder='Ingresa un personaje' onChange={inputBuscador} value={buscador}  onKeyPress={inputBuscador}/>
      <input type="submit" name='enviar' value='Buscar Personaje' />
       <div className='centrar'>
      {noEcntrado == false ? (<span>no se encontro nada</span>):<span>encontrado en la pagina {+ contador}  </span> }
      </div>
    </form>
    </div>
  )
}
