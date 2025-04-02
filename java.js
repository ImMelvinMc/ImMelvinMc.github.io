let contador = 0; // Contador de vistas
let dispositivosAccesos = []; // Lista de dispositivos que accedieron
let horaAcceso = ""; // Hora del acceso

// Verificar la contraseña ingresada
function verificarContraseña() {
    const contraseñaIngresada = document.getElementById("inputContraseña").value;

    if (contraseñaIngresada === "nangadas") {
        mostrarContador(); // Si la contraseña es correcta, mostrar el contador
        mostrarListaDispositivos(); // Mostrar la lista de dispositivos
    } else {
        alert("Contraseña incorrecta.");
    }
}

// Mostrar el contador de vistas
function mostrarContador() {
    const contadorElemento = document.getElementById("contadorVistas");
    contadorElemento.style.display = "flex"; // Hacer visible el contador
    contadorElemento.textContent = contador; // Mostrar el contador

    contador++; // Aumentar el contador en 1
}

// Mostrar detalles de dispositivos
function mostrarDetalles() {
    const dispositivo = navigator.platform; // Obtener el dispositivo actual
    const hora = new Date().toLocaleString(); // Obtener la hora actual

    // Guardar los detalles del acceso
    dispositivosAccesos.push(`${dispositivo} - Hora: ${hora}`);

    // Mostrar la lista de dispositivos con la hora de acceso
    const listaDispositivos = document.getElementById("contenidoLista");
    listaDispositivos.innerHTML = ""; // Limpiar contenido actual
    dispositivosAccesos.forEach(acc => {
        const div = document.createElement("div");
        div.textContent = acc;
        listaDispositivos.appendChild(div);
    });

    document.getElementById("listaDispositivos").style.display = "block"; // Mostrar la lista de dispositivos
}

// Cerrar la lista de dispositivos
function cerrarLista() {
    document.getElementById("listaDispositivos").style.display = "none";
}
