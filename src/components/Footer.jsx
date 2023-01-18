import React from 'react'

export function Footer() {
  return (
    <div className='footer mt-3 mb-3'>
        <hr/>
        <p className='footer-text mb-1'>Este sitio simula un menú para un restaurante de comida mexicana.</p>
        <p className='footer-text mb-1'>Utiliza la <a href='https://www.api-mejico.jaimejb.com' target="_blank" rel="noopener noreferrer">API-Mejico</a> igualmente desarrollada con motivos educativos.</p>
        <p className='footer-text mb-1'>Es posible que no esté funcionando correctamente ya que la API se mantiene alojada en hosting de manera temporal.</p>
        <p className='footer-text mb-1'>Quieres revisar el código de esta aplicación con React, link de <a href='https://github.com/jbs-code/mejico-app' target="_blank" rel="noopener noreferrer">GitHub</a></p>
        <p className='footer-text mb-1'>Quieres revisar el código de la API-Mexico, link de <a href='https://github.com/jbs-code/mejico-api' target="_blank" rel="noopener noreferrer">GitHub</a></p>
        <p className='footer-text mb-1'><a href='https://jaimejb.com' target="_blank" rel="noopener noreferrer">jaimejb.com</a></p>
    </div>
  )
}
