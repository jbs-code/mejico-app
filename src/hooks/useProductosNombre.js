import { useEffect, useMemo, useState } from 'react'
import { fetchProductosNombre } from '../helpers/';

function useProductosNombre(nombre = '') {
    const [producto, setProducto] = useState({});

    const products = useMemo(() => fetchProductosNombre(nombre), [nombre]);

    useEffect(() => {
        products.then(data => setProducto(data));
    }, [products]);

    return producto;
}

export default useProductosNombre