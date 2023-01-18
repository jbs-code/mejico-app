export const fetchProductosNombre = (nombre) => {

    // const url = `http://localhost:3000/buscar/productos/nombre/${nombre}`;
    const url = `https://www.api-mejico.jaimejb.com/buscar/productos/nombre/${nombre}`;

    return fetch(url)
        .then(res => res.json());
}
