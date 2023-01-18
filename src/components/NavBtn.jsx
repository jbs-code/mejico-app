import React from 'react'

//Componente que solo retorna el botón del nav para móviles.
export function NavBtn() {
    return (
        <div className='nav__btn mt-3'>
            <div className='bar bar-1'></div>
            <div className='bar bar-2'></div>
            <div className='bar bar-3'></div>
        </div>
    )
}