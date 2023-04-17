const contenedorTareas = document.querySelector('#contenedorTareas');
const btnTarea = document.querySelector('#btnTarea');
const valueTarea = document.querySelector('#infoTarea');
let tareas = []
let click = false;
const mostrar = document.querySelector('#mostrar')
let tareasAuxiliar;

let formatoTarea;
let inputRadio;

const marcarTarea = (index) => {
    tareas[index].completed = true;
    actualizarListaDeTareas();
}

const marcarFavorito = (index) => {
    tareas[index].fav = true;
    actualizarListaDeTareas();
}

const mostrarFavoritos = () => {
    
    click = !click;
    if (click == true) {
        tareasAuxiliar = tareas;
        mostrar.innerHTML = 'Mostrar todo'
        tareas = tareas.filter(item => item.fav == true);
        actualizarListaDeTareas();
    } else {
        mostrar.innerHTML = 'Mostrar favoritos'
        tareas = tareasAuxiliar;
        actualizarListaDeTareas();
    }
}


const actualizarListaDeTareas = () => {
    const listaTareasHtml = tareas.map((tarea, index) => {
        return `  
            <div class="card w-100 ${tarea.completed == true ? 'bg-success text-decoration-line-through' : ''}">
                <div class="card-body d-flex justify-content-between align-items-center">
                    <div>
                        <input ${tarea.completed == true ? 'checked' : ''} onclick='marcarTarea(${index})' type="radio" style="height: 2rem; width: 2rem;">
                    </div>
                    <div class="px-4" style="text-align: justify;">
                        ${tarea.message}
                    </div>
                    <div>
                        <input type='checkbox' ${tarea.fav == true ? 'checked' : ''} onclick='marcarFavorito(${index})'> 
                    </div>
                </div>
            </div>
            `;
        }).join('');
    contenedorTareas.innerHTML = listaTareasHtml;
    
}


btnTarea.addEventListener('click', () => {

    if (valueTarea.value.trim() == '') {
        alert('Ingrese un texto');
    } else {
        const nuevaTarea = {
            message: valueTarea.value,
            completed: false, 
            fav: false
        };

        tareas.push(nuevaTarea)
        actualizarListaDeTareas();

        valueTarea.value='';

        console.log(tareas)
    }
});


