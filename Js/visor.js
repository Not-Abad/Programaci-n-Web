document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const capNum = params.get("cap") || "2";
    let tipoActual = params.get("tipo") || "ejemplos";
    let indiceActual = params.has("idx") ? parseInt(params.get("idx"), 10) : null;

    const datosCap = CATALOGO_CAPITULOS[capNum];

    const sidebar = document.getElementById("sidebar-practicas");
    const btnToggle = document.getElementById("btn-toggle-sidebar");
    const tituloCapEl = document.getElementById("sidebar-titulo-cap");
    const listaEl = document.getElementById("lista-actividades");
    const tabEjemplos = document.getElementById("tab-ejemplos");
    const tabEjercicios = document.getElementById("tab-ejercicios");
    const iframe = document.getElementById("marco-practica");

    if (!datosCap) {
        tituloCapEl.textContent = "No encontrado";
        return;
    }

    // Título en la cabecera de la barra lateral
    tituloCapEl.textContent = datosCap.titulo || `Capítulo ${capNum}`;

    // Alternar barra lateral expandida <-> riel vertical
    btnToggle.addEventListener("click", () => {
        sidebar.classList.toggle("colapsada");
    });

    // Al presionar el botón/título del capítulo, carga su página de descripción en el iframe
    tituloCapEl.addEventListener("click", mostrarDescripcion);

    function renderizarLista() {
        tabEjemplos.classList.toggle("activo", tipoActual === "ejemplos");
        tabEjercicios.classList.toggle("activo", tipoActual === "ejercicios");

        const items = datosCap[tipoActual] || [];
        listaEl.innerHTML = "";

        if (items.length === 0) {
            listaEl.innerHTML = `<li style="padding:12px; color:#94a3b8; font-size:0.85rem;">Sin ${tipoActual} registrados aún.</li>`;
            return;
        }

        items.forEach((item, index) => {
            const li = document.createElement("li");
            const btn = document.createElement("button");
            btn.textContent = item.nombre;
            if (indiceActual === index) btn.classList.add("seleccionado");

            btn.addEventListener("click", () => cargarPractica(index));
            li.appendChild(btn);
            listaEl.appendChild(li);
        });
    }

    function cargarPractica(index) {
        const items = datosCap[tipoActual] || [];
        if (!items[index]) return;

        indiceActual = index;
        iframe.src = encodeURI(items[index].archivo);

        history.replaceState(null, "", `visor.html?cap=${capNum}&tipo=${tipoActual}&idx=${index}`);
        renderizarLista();
    }

    function mostrarDescripcion() {
        indiceActual = null;
        if (datosCap.descripcion) {
            iframe.src = encodeURI(datosCap.descripcion);
        }
        history.replaceState(null, "", `visor.html?cap=${capNum}`);
        renderizarLista();
    }

    tabEjemplos.addEventListener("click", () => {
        tipoActual = "ejemplos";
        indiceActual = null;
        renderizarLista();
    });

    tabEjercicios.addEventListener("click", () => {
        tipoActual = "ejercicios";
        indiceActual = null;
        renderizarLista();
    });

    // Carga inicial: si hay un índice en la URL abre esa práctica; si no, abre la descripción
    renderizarLista();
    if (indiceActual !== null) {
        cargarPractica(indiceActual);
    } else {
        mostrarDescripcion();
    }
});