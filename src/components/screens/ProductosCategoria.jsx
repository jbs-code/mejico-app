import React from 'react'
import { useParams } from 'react-router-dom'
import useProductosCategoria from '../../hooks/useProductosCategoria';
import { CardProducto } from '../';

export function ProductosCategoria() {
  const { categoria } = useParams();
  const { productos } = useProductosCategoria(categoria);

  return (
    <div className='container-2'>
      <CardProducto producto={productos} />
    </div>
  )
}
