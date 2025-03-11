// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []; // Array para almacenar los nombres

// Función para agregar amigos
function agregarAmigo() {
    const input = document.getElementById('amigo'); // Obtener el campo de texto
    const nombre = input.value.trim(); // Eliminar espacios en blanco

    // Validar que el campo no esté vacío
    if (!nombre) {
        alert('Por favor, inserte un nombre.');
        return; // Detener la función si hay error
    }

    amigos.push(nombre); // Añadir nombre al array
    input.value = ''; // Limpiar el campo
    actualizarLista(); // Actualizar la lista visual
}

// Función para mostrar los nombres en la lista
function actualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpiar lista antes de actualizar

    amigos.forEach(amigo => { // Recorrer el array
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li); // Agregar elemento a la lista
    });
}

// Función para sortear un amigo
function sortearAmigo() {
    if (amigos.length === 0) { // Validar que haya nombres
        alert('¡Agrega amigos primero!');
        return;
    }

    // Generar índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const resultado = document.getElementById('resultado');

    // Mostrar resultado con formato
    resultado.innerHTML = `<li>¡Tu amigo secreto es <strong>${amigos[indiceAleatorio]}</strong>! 🎉</li>`;
}