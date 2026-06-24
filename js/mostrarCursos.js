function mostrarCurso(curso) 
{
    const detalle = document.getElementById("curso-detalle");

    // Carga el detalle del curso
    if (cursoInfo[curso]) 
    {
        const { titulo, descripcion, planDeEstudio, imagenes } = cursoInfo[curso];

        detalle.innerHTML = `
            <div class="card border-0 shadow-lg mb-4">
                <div class="card-body">
                    <h2 class="card-title text-center text-success mb-4">
                        <i class="fas fa-book-open"></i> ${titulo}
                    </h2>
                    
                    <!-- Descripción -->
                    <h3 class="card-title text-primary mb-3">
                        <i class="fas fa-info-circle"></i> Descripción del curso
                    </h3>
                    <p class="card-text lead">${descripcion}</p>
                    
                    <!-- Plan de estudio -->
                    <h3 class="card-title text-primary mb-3 mt-4">
                        <i class="fas fa-list-alt"></i> Plan de estudio
                    </h3>
                    <p class="card-text">${planDeEstudio}</p>
                    
                    <hr>
                    
                    <!-- Galería de imágenes -->
                    <div class="row g-3">
                        ${imagenes.map(img => `
                            <div class="col-sm-6 col-md-4">
                                <div class="card h-100 border-0 shadow-sm">
                                    <img src="images/cursos/${img}" alt="${curso}" 
                                         class="card-img-top img-fluid rounded" 
                                         style="object-fit: cover; height: 200px;">
                                </div>
                            </div>
                        `).join("")}
                    </div>
                </div>
            </div>
        `;
    } 
    else 
    {
        detalle.innerHTML = `
            <div class="alert alert-warning shadow-sm">
                <i class="fas fa-exclamation-triangle"></i> 
                No se encontró información para este curso.
            </div>
        `;
    }

    // Mueve la vista hacia el div curso-detalle
    document.getElementById("curso-detalle").scrollIntoView({
        behavior: "smooth",   // animación suave
        block: "start"        // alinea al inicio del div
    });
}

