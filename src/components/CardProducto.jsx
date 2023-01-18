import React from 'react'
import { useNavigate } from 'react-router-dom'

export function CardProducto({ producto }) {
    const navigate = useNavigate();

    const handleClick = (nombre) => {
        const url = encodeURI(`/productos/detalles/${nombre.toLowerCase()}`);
        navigate(url);
    }
    return (
        <>
            {
                producto?.map(producto => (
                    <div
                        key={producto._id}
                        className='card card__size--small card--click animate__animated animate__fadeInRight'
                        onClick={() => {
                            handleClick(producto.nombre)
                        }}>
                        <picture className='card-img card-img--small'>
                            <img className='img' src={producto.urlImg.url} alt='Imágen de producto'></img>
                        </picture>
                        <div className='card-content'>
                            <h2 className='card-nombre mt-3 mb-2'>{producto.nombre}</h2>
                            <h3 className='card-precio mt-3'>$ {producto.costo}</h3>
                        </div>
                    </div>
                ))
            }
        </>
    )
}
