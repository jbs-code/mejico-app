import React from 'react'
import portada from '../../assets/portada.jpg'
import button from '../../assets/button.svg'
import { useNavigate } from 'react-router-dom'

export function Home() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/productos/entradas');
  }
  return (
    <header className="header">
      <img className='header-img' src={portada} alt='portada'></img>
      <div className='header-texto'>
        <h1 className='text-shadow ml-3'>Bienvenido a Méjico, lugar para disfrutar.</h1>
        <img onClick={handleClick} className='btn-home animate__animated animate__pulse animate__infinite' src={button} alt='button'></img>
      </div>
    </header>
  )
}
