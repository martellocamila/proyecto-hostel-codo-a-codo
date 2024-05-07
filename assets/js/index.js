
// Metodo para agregar calendario

document.addEventListener("DOMContentLoaded", function() {
  flatpickr("#fechaCheckIn", {
    enableTime: false, // Deshabilitar la selección de hora si no la necesitas
    dateFormat: "Y-m-d", // Elegir el formato de fecha deseado
  });
});

document.addEventListener("DOMContentLoaded", function() {
    flatpickr("#fechaCheckOut", {
      enableTime: false, // Deshabilitar la selección de hora si no la necesitas
      dateFormat: "Y-m-d", // Elegir el formato de fecha deseado
    });
  });



//Metodo para incrementar la cantidad de Huespedes

document.addEventListener("DOMContentLoaded", function() {
    const cantidadHuespedesInput = document.getElementById("cantidadHuespedes");
    const aumentarBtn = document.getElementById("aumentar");
    const disminuirBtn = document.getElementById("disminuir");

    cantidadHuespedesInput.value = 1; //Iniciar en 0

    aumentarBtn.addEventListener("click", function() {
        // Incrementar el valor del input, verificando el máximo que se determinó en el html
        if (parseInt(cantidadHuespedesInput.value) < parseInt(cantidadHuespedesInput.max)) {
          cantidadHuespedesInput.value = parseInt(cantidadHuespedesInput.value) + 1;
        }
      });


    disminuirBtn.addEventListener("click", function() {
        // Decrementar el valor del input, asegurándonos de que no sea menor que el mínimo
        if (parseInt(cantidadHuespedesInput.value) > parseInt(cantidadHuespedesInput.min)) {
            cantidadHuespedesInput.value = parseInt(cantidadHuespedesInput.value) - 1;
        }
    });
});





