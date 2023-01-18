import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Footer, Home, RoutesProductos } from '../'

export function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path='*' element={<RoutesProductos />} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}
