 
  let intentos = 20;
  let intentosRealizados = 0;
  let aciertos = 0;
  let primerIntento = null;
  let segundoIntento = null;
  let numeros = [];
  let cantidadPares = 8;
  var esperar=false;
  
  // Elementos de la tabla
  const intentosCount = document.getElementById('intentos-count');
  const aciertosCount = document.getElementById('aciertos-count');
  const porcentajeDisplay = document.getElementById('porcentaje');
  
  // Función para actualizar la tabla de estadísticas
  function actualizarEstadisticas() {
      intentosCount.textContent = intentosRealizados;
      aciertosCount.textContent = aciertos;
      
      // Calcular y actualizar el porcentaje
      const porcentaje = intentosRealizados > 0 ? Math.round((aciertos / intentosRealizados) * 100) : 0;
      porcentajeDisplay.textContent = porcentaje + '%';
  }
  
  document.querySelectorAll(".card-button").forEach(button => {
      button.addEventListener("click", function() {
        
          if (this.getAttribute("data-acertado") === "true" || this === primerIntento) return; // Evita seleccionar la misma carta o las ya acertadas
  
          if (!primerIntento) {
              primerIntento = this;
              this.style.color = "white";
              this.classList.remove("btn-primary");
              this.classList.add("btn-warning"); // Amarillo para el primer intento
              esperar=false;
          } else {
              segundoIntento = this;
              this.style.color = "white";
              this.classList.remove("btn-primary");
              this.classList.add("btn-warning"); // Amarillo para el segundo intento
              
  
              // Incrementar intentos realizados
              intentosRealizados++;
              intentos--;
              
              setTimeout(() => {
                  if (primerIntento.textContent === segundoIntento.textContent) {
                      aciertos++;
                      primerIntento.classList.remove("btn-warning");
                      segundoIntento.classList.remove("btn-warning");
                      primerIntento.classList.add("btn-success"); // Verde si es correcto
                      segundoIntento.classList.add("btn-success");
  
                      // Evita que vuelvan a ser clickeables
                      primerIntento.setAttribute("data-acertado", "true");
                      segundoIntento.setAttribute("data-acertado", "true");
                      
  
                  } else {
                      primerIntento.style.color = ""; // Se reinicia al color por defecto
                      segundoIntento.style.color = "";
                      primerIntento.classList.remove("btn-warning", "btn-success");
                      segundoIntento.classList.remove("btn-warning", "btn-success");
                      primerIntento.classList.add("btn-primary"); // Azul si es incorrecto
                      segundoIntento.classList.add("btn-primary");
                      
                  }
  
                  // Actualizar estadísticas
                  actualizarEstadisticas();
  
                  primerIntento = null;
                  segundoIntento = null;
  
                  if (aciertos === 8) {
                      alert("¡Ganaste! Has encontrado todas las parejas.");
                  } else if (intentos === 0) {
                      alert("Se acabaron los intentos. ¡Inténtalo de nuevo!");
                      location.reload();
                  }
              }, 1000);
          
        }
      });
  });
  
  // Inicializar la tabla al cargar
  actualizarEstadisticas();

  document.addEventListener("DOMContentLoaded", () => {
    const celdas = document.querySelectorAll(".card-button");
    const totalCeldas = celdas.length;


    let numeros = [];
    let cantidadPares = totalCeldas / 2;

    // Generamos números únicos y los duplicamos para formar parejas
    for (let i = 0; i < cantidadPares; i++) {
        let numeroAleatorio = Math.floor(Math.random() * 100); // Números entre 0 y 99
        numeros.push(numeroAleatorio, numeroAleatorio); // Agregamos el número dos veces
    }

    // Mezclamos los números de forma aleatoria (algoritmo Fisher-Yates)
    numeros.sort(() => Math.random() - 0.5);

    // Asignamos los números a las celdas de la tabla
    celdas.forEach((celda, indice) => {
        celda.textContent = numeros[indice];
    });
});