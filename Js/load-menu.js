const currentScriptTag = document.currentScript;

document.addEventListener("DOMContentLoaded", () => {
    if (!currentScriptTag) {
        console.error("No se pudo determinar la ubicación de load-menu.js");
        return;
    }

    // Calcula la URL raíz del proyecto
    const scriptUrl = new URL(currentScriptTag.src);
    const rootUrl = new URL("../", scriptUrl).href;

    // Obtiene menu.html usando la ruta raíz
    fetch(rootUrl + "menu.html")
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error ${response.status}: No se encontró menu.html en ${rootUrl}`);
            }
            return response.text();
        })
        .then(htmlContent => {
            const tempDiv = document.createElement("div");
            tempDiv.innerHTML = htmlContent;

            // Reescribe las rutas relativas para que apunten a la raíz correcta
            tempDiv.querySelectorAll("a[href]").forEach(link => {
                const href = link.getAttribute("href");
                if (href && !href.startsWith("#") && !href.startsWith("http") && !href.startsWith("//")) {
                    link.setAttribute("href", rootUrl + href);
                }
            });

            // Inyecta el banner + menú siempre al puro principio del <body>
            document.body.insertAdjacentHTML("afterbegin", tempDiv.innerHTML);
        })
        .catch(error => console.error("Error al inyectar el menú:", error));
});