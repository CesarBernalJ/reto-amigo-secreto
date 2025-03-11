// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
function agregarAmigo() {
// Capturar el valor del input y eliminar espacios en blanco
    let input = document.getElementById('inputName');
    let nombre = input.value.trim();
// Validación: se muestra alerta si el campo está vacío
    if (nombre === '') {
        alert("Por favor, inserte un nombre.");
        return;
      }
      amigos.push(nombre);
      input.value = '';
      actualizarLista();
    }    

//Función para actualizar la lista de amigos mostrada en el elemento 
function actualizarLista() {
    let lista = document.getElementById('listadoAmigos');
    lista.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
        }
    }

    function sortearAmigo() {
        if (amigos.length === 0) {
            alert("No hay amigos para sortear.");
            return;
          }
        }
