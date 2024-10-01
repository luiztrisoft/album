import React from 'react'

const Foto = ({dados, setFotoAmpliada}) => {
  return (
    <div className='foto' onClick={()=> setFotoAmpliada(dados)}>
        <img src={dados.urls.small} alt={dados.alt_descruption}/>
    </div>
  )
}

export default Foto