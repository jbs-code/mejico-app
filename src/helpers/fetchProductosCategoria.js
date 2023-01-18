export const fetchProductosCategoria = (nombre) => {
    // const url = `http://localhost:3000/buscar/productos/${nombre}`;
    const url = `https://www.api-mejico.jaimejb.com/buscar/productos/${nombre}`;

    return fetch(url)
        .then(res => res.json());
}

