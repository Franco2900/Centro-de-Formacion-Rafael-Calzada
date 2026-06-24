async function cargarFragmentoHTML(id, file) 
{ 
    const res = await fetch(file);                            // Busco el archivo HTML
    document.getElementById(id).innerHTML = await res.text(); // Pongo el HTML en el div con ID

    return Promise.resolve(); // para poder encadenar .then()
} 

// Cargo el layout
cargarFragmentoHTML("header",  "./partials/header.html"); 
cargarFragmentoHTML("navbar",  "./partials/navbar.html");
//cargarFragmentoHTML("fondo",   "./partials/fondo.html"); 
cargarFragmentoHTML("footer",  "./partials/footer.html");