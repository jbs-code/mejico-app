import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useForm from '../hooks/useForm';
import { navResponsive } from '../scripts/navResponsive';
import { NavBtn } from './';

export function Nav() {
    const navigate = useNavigate();
    const [values, handleInputChange] = useForm({
        producto: ''
    });

    const { producto } = values;

    useEffect(() => {
        navResponsive();
    }, []);

    const handleClick = (category) => {
        const url = encodeURI(`/productos/${category}`);
        navigate(url);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const url = encodeURI(`/productos/nombre/${producto}`);
        navigate(url);
    }

    return (
        <nav className='nav'>
            <div className='nav-container'>
                <NavBtn />
                <div className="nav__buttons">
                    <button
                        className='btn btn-primary'
                        onClick={() => { handleClick('entradas') }}>
                        Entradas
                    </button>
                    <button
                        className='btn btn-primary'
                        onClick={() => { handleClick('plato fuerte') }}>
                        Plato fuerte
                    </button>
                    <button
                        className='btn btn-primary'
                        onClick={() => { handleClick('postres') }}>
                        Postres
                    </button>
                    <button
                        className='btn btn-primary'
                        onClick={() => { handleClick('bebidas') }}>
                        Bebidas
                    </button>
                    <form onSubmit={handleSubmit} className='nav-form'>
                        <input
                            id='productForm'
                            type='text'
                            placeholder='Producto'
                            name='producto'
                            onChange={handleInputChange}
                            value={producto}
                            className="input-text mb-2 mt-3"
                        />
                        <button type='submit' className='btn btn-primary'>Enviar</button>
                    </form>
                </div>
            </div>

        </nav>
    )
}
