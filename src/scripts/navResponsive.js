//función para manejar el comportamiento del botón de navegación
//en dispositivos móviles.
//Se debe ejecutar despues de renderizar el componente por eso se coloca
//dentro de useEffect en el Nav.
export const navResponsive = () => {
    const btn = document.querySelector('.nav__btn');
    const nav = document.querySelector('.nav__buttons');
    const inputForm = document.querySelector('#productForm');

    const bar1 = document.querySelector('.bar-1');
    const bar2 = document.querySelector('.bar-2');
    const bar3 = document.querySelector('.bar-3');

    const screen = window.matchMedia("screen and (max-width: 1080px)");

    if (screen.matches) {
        nav.classList.add('nav__buttons--not-focus');
    }

    btn.addEventListener('click', () => {
        console.log('click')

        if (nav.classList.contains("nav__buttons--not-focus")) {
            nav.classList.remove("nav__buttons--not-focus");
            nav.classList.add("nav__buttons--focus");

            bar1.classList.add("bar-1--active");
            bar2.classList.add("bar-2--active");
            bar3.classList.add("bar-3--active");
        }
        else if (nav.classList.contains("nav__buttons--focus")) {
            nav.classList.remove("nav__buttons--focus");
            nav.classList.add("nav__buttons--not-focus");

            bar1.classList.remove("bar-1--active");
            bar2.classList.remove("bar-2--active");
            bar3.classList.remove("bar-3--active");
        }
    });

    document.addEventListener("click", (e) => {
        const click = e.target;
        if (screen.matches) {
            if (click !== inputForm) {
                if (!nav.classList.contains("nav__buttons--not-focus") && click !== nav && click !== btn) {
                    nav.classList.remove("nav__buttons--focus");
                    nav.classList.add("nav__buttons--not-focus");

                    bar1.classList.remove("bar-1--active");
                    bar2.classList.remove("bar-2--active");
                    bar3.classList.remove("bar-3--active");
                }
            }

        }
    });
}