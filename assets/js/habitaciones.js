class Habitacion {
    constructor({nombre, precio, descripcion, foto}) {
        this.nombre = nombre,
        this.precio = precio,
        this.descripcion = descripcion,
        this.foto = foto
    }

    mostrarHabitacion() {
        const container = document.querySelector('.habitaciones-container');

        const div = document.createElement('DIV');
        div.classList.add('habitacion-container');

        div.innerHTML =  `
            <img src="${this.foto}">
            <div class="info-habitacion-container">
                <h3>${this.nombre}</h3>
                <p>${this.descripcion}</p>
                <p>$${this.precio} - Por Noche</p>
                <button class="reservar">Reserve Ahora</buton>
            </div>
            
        `

        container.appendChild(div);
    }
}

obtenerDatosJSON();
function obtenerDatosJSON() {
    const url = 'https://sheetdb.io/api/v1/pu4j5cvk5qrc6';

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => resultado.map(r => new Habitacion(r)).forEach(habitacion => habitacion.mostrarHabitacion()))
        .catch(error => console.log(error))

}