import React from 'react'

export const Map = ({rick}) => {
  return (
    <div className='container'>
    {rick?.map((rick) => {
      return (
        <div key={rick.id} className="containermap">


          <h1>Nombre: {rick.name}</h1>
          <h2>Especie: {rick.species}</h2>
          <h2>Status: {rick.status}</h2>
          <div className='mascara'>
            <img src={rick.image} alt="" />

          </div>
          <p>Localización: {rick.location.name}</p>
        </div>
      )
    })}
  </div>
  )
}
