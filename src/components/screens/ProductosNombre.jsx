import React from 'react'
import { useParams } from 'react-router-dom';
import useProductosNombre from '../../hooks/useProductosNombre'
import { CardProducto } from '../';

export function ProductosNombre() {
  const { nombre } = useParams();
  const { productos } = useProductosNombre(nombre);

  return (
    <div className='container-2'>
      <CardProducto producto={productos} />
    </div>
  )
}
