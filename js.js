const btnInicio = document.getElementById('botonInicio');
const btnSubir = document.getElementById('botonSubirApuntes');
const btnConsultar = document.getElementById('botonConsultarApuntes');

function activarBoton(activo) {
    btnInicio.classList.remove('active');
    btnSubir.classList.remove('active');
    btnConsultar.classList.remove('active');
    activo.classList.add('active');
}

document.getElementById('botonInicio').addEventListener('click', function(e) {
    e.preventDefault();
    activarBoton(document.getElementById('botonInicio'))
    document.getElementById('menu-dinamico').innerHTML = `
        <h2>Inicio</h2>
        <p>Aquí iría la lista de apuntes subidos...</p>
    `;
});

document.getElementById('botonSubirApuntes').addEventListener('click', function(e) {
    e.preventDefault(); // Evita que el enlace recargue la página
    activarBoton(document.getElementById('botonSubirApuntes'))
    document.getElementById('menu-dinamico').innerHTML = `
        <h2>Subir Apuntes</h2>
        <form>
            <label for="titulo">Título:</label>
            <input type="text" id="titulo" name="titulo"><br>
            <label for="archivo">Archivo:</label>
            <input type="file" id="archivo" name="archivo"><br>
            <button type="submit">Subir</button>
        </form>
    `;
});

document.getElementById('botonConsultarApuntes').addEventListener('click', function(e) {
    e.preventDefault();
    activarBoton(document.getElementById('botonConsultarApuntes'))
    document.getElementById('menu-dinamico').innerHTML = `
        <h2>Consultar Apuntes</h2>
        <p>Aquí iría la lista de apuntes subidos...</p>
    `;
});

document.getElementById('logo').addEventListener('click', function(e) {
    e.preventDefault();
    btnInicio.classList.remove('active');
    btnSubir.classList.remove('active');
    btnConsultar.classList.remove('active');
    document.getElementById('menu-dinamico').innerHTML = `
    `;
});

document.getElementById('logoPerfil').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('menu-dinamico').innerHTML = `
        <h2>Consultar Apuntes</h2>
        <p>Aquí iría la lista de apuntes subidos...</p>
    `;
});


/*Para el menú lateral*/
const menuLateral = document.getElementById('menuLateral');
const menuOverlay = document.getElementById('menuOverlay');
const iconoHamburguesa = document.querySelector('.lineas');
const cerrarMenu = document.getElementById('cerrarMenu');

// Función para abrir el menú
function abrirMenu() {
    menuLateral.classList.add('activo');
    menuOverlay.classList.add('activo');
    document.body.style.overflow = 'hidden'; // Evita el scroll del body
}

// Función para cerrar el menú
function cerrarMenuLateral() {
    menuLateral.classList.remove('activo');
    menuOverlay.classList.remove('activo');
    document.body.style.overflow = 'auto'; // Restaura el scroll del body
}

// Event listeners
iconoHamburguesa.addEventListener('click', abrirMenu);
cerrarMenu.addEventListener('click', cerrarMenuLateral);
menuOverlay.addEventListener('click', cerrarMenuLateral);

// Cerrar menú con la tecla Escape
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && menuLateral.classList.contains('activo')) {
        cerrarMenuLateral();
    }
});


/*Para el menú del perfil*/
const menuPerfil = document.getElementById('menuPerfil');
const menuOverlay2 = document.getElementById('menuOverlayPerfil');
const iconoPerfil = document.querySelector('.logoPerfil');
const cerrarMenu2 = document.getElementById('cerrarMenuPerfil');

// Función para abrir el menú
function abrirMenuPerfil() {
    menuPerfil.classList.add('activo');
    menuOverlayPerfil.classList.add('activo');
    document.body.style.overflow = 'hidden'; // Evita el scroll del body
}

// Función para cerrar el menú
function cerrarMenuPerfil() {
    menuPerfil.classList.remove('activo');
    menuOverlayPerfil.classList.remove('activo');
    document.body.style.overflow = 'auto'; // Restaura el scroll del body
}

// Event listeners
iconoPerfil.addEventListener('click', abrirMenuPerfil);
cerrarMenu2.addEventListener('click', cerrarMenuPerfil);
menuOverlayPerfil.addEventListener('click', cerrarMenuPerfil);

// Cerrar menú con la tecla Escape
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && menuPerfil.classList.contains('activo')) {
        cerrarMenuPerfil();
    }
});