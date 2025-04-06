function verificarContraseña() {
    const contraseña = document.getElementById("inputContraseña").value;
    if (contraseña === "nangadas") {
      document.getElementById("formularioContraseña").style.display = "none";
      document.getElementById("contenidoPagina").style.display = "block";
    } else {
      alert("❌ Contraseña incorrecta.");
    }
  }
  
