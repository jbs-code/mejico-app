import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Nav, ProductoDetalles, ProductosCategoria, ProductosNombre } from '../'

export function RoutesProductos() {
    return (
        <>
            <Nav />
            < Routes >
                <Route path='/productos/:categoria' element={<ProductosCategoria />} />
                <Route path='/productos/detalles/:nombre' element={<ProductoDetalles />} />
                <Route path='/productos/nombre/:nombre' element={<ProductosNombre />} />
                <Route path='*' element={<Navigate to='/productos/entradas' />} />
            </Routes >
        </>
    )
}
