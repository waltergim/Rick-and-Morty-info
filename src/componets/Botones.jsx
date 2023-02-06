import React from 'react'

export const Botones = ({contador,setContador}) => {
    const clickSiguiente = () => {

        contador === 42 ? alert('Hola pa ya te viste todas las paginas')
          : setContador(contador + 1)
    
      }
    
      const clickAtras = (e) => {
    
        contador === 0 ? alert('No existen mas paginas hazia bajo')
          : setContador(contador - 1)
    
      }

  return (

    <div className='btn-div'>
    <button className={contador === 0 ? 'disabled' : 'btn-siguentes'} onClick={clickAtras} name='botonAtras' >Volver a atras</button>
    <p>← Puedes cambiar de pagina →</p>
    <button className={contador === 42 ? 'disabled' : 'btn-siguentes'} onClick={clickSiguiente} name='botonSiguiente'>Siguiente</button>
  </div>
  
  )
}
