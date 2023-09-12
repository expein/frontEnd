function calcularCoordenadasCentradas(ancho, alto) {
    const anchoPantalla = window.innerWidth || document.documentElement.clientWidth;
    const altoPantalla = window.innerHeight || document.documentElement.clientHeight;
    
    const izquierda = (anchoPantalla - ancho) / 2;
    const arriba = (altoPantalla - alto) / 2;
    
    return { izquierda, arriba };
}

function editPopup() {
    const coordenadas = calcularCoordenadasCentradas(400,300);
    window.open("./edit-user.html", "_blank", "width=600, height=400, left="+coordenadas.izquierda+", top="+coordenadas.arriba+"");
}