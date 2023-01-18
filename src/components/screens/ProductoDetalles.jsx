import React from 'react'
import { useParams } from 'react-router-dom'
import useProductosNombre from '../../hooks/useProductosNombre';

export function ProductoDetalles() {

  const { nombre } = useParams();

  const { productos } = useProductosNombre(nombre);
  const producto = productos && productos[0];

  const styleDisponible = producto?.disponibilidad ? 'card__disponible' : 'card__no-disponible';

  return (
    <div className='container-2'>
      {
        producto &&
        <div
          key={producto._id}
          className='card card__size--big animate__animated animate__fadeInRight'>
          <picture
            className='card-img card-img--big'>
            <img
              className='img' src={producto.urlImg.url} alt='Imágen de producto'></img>
          </picture>
          <div className='card-content card-content--big'>
            <h2 className='card-nombre mb-2'>{producto.nombre} <hr /></h2>
            <p className='card-descripcion'>{producto.descripcion}</p>
            <p className={styleDisponible + ' card-descripcion mt-2'}>{producto.disponibilidad ? 'Disponible' : 'No disponible'}</p>
            <h3 className='card-precio mt-3'>$ {producto.costo}</h3>
          </div>
        </div>
      }
    </div>

  )
}
