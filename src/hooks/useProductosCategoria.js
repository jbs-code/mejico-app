import { useEffect, useMemo, useState } from 'react';
import { fetchProductosCategoria } from '../helpers';

function useProductosCategoria(nombre = 'entradas') {
    const [productos, setProductos] = useState({});

    const products = useMemo(() => fetchProductosCategoria(nombre), [nombre]);

    useEffect(() => {
        products
            .then(data => setProductos(data))
    }, [products]);

    return productos;
}

export default useProductosCategoria