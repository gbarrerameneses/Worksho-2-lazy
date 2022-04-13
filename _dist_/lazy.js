const isIntersecting = (entry) => {
    return entry.isIntersecting //true (dentro de la pantalla)
}

const loadImage = (entry) => {
    const container = entry.target  //container (div)
    const imagen = container.firstChild
    const url = imagen.dataset.src
    // load image
    imagen.src = url
    //des registra la imagen (unlisten)
    observer.unobserve(container)
}

const observer = new IntersectionObserver((entries) => {
    entries
        .filter(isIntersecting)
        .forEach(loadImage)
})

export const registerImage = (imagen) => {
    //Intersectation Observer  --> Observador()imagen
    observer.observe(imagen)
}