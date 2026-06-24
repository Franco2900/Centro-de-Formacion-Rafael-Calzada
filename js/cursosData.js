// Array con los datos de todos los cursos
const cursoInfo = 
{
    // Carpintería
    "carpinteria-basica": {
        titulo: "Carpintería básica",
        descripcion: "La carpintería básica introduce al estudiante en el mundo del trabajo con madera, un oficio milenario que combina técnica y creatividad. Se centra en el conocimiento de los materiales, las herramientas manuales y eléctricas más comunes, y en las técnicas elementales de corte y ensamblado. Es el punto de partida ideal para quienes nunca trabajaron con madera y desean adquirir habilidades prácticas para proyectos sencillos y seguros.",
        planDeEstudio: "Se aprenderá a identificar distintos tipos de madera y sus usos, a manejar herramientas como sierras, martillos, taladros y lijadoras, y a realizar cortes rectos y ensamblajes simples. También se abordan nociones de seguridad en el taller y el armado de piezas básicas como estantes, cajas o pequeños muebles.",
        imagenes: ["carpinteria 1.jpg", "carpinteria 2.jpeg", "carpinteria 3.jpg"]
    },
    "carpinteria-avanzada": {
        titulo: "Carpintería avanzada",
        descripcion: "La carpintería avanzada profundiza en técnicas más complejas de construcción y acabado, orientadas a proyectos de mayor dificultad y precisión. Aquí la madera deja de ser solo un material y se convierte en un medio para crear piezas duraderas y estéticamente cuidadas.",
        planDeEstudio: "Se trabajará con técnicas de ensamblado más sofisticadas (como ensambles en cola de milano o espiga y mortaja), uso de maquinaria especializada, aplicación de barnices y lacas, y diseño de muebles con planos detallados. El curso también enseña a optimizar el uso de materiales y a aplicar acabados profesionales que realzan la estética y la resistencia de las piezas.",
        imagenes: ["carpinteria 4.avif", "carpinteria 5.webp", "carpinteria 6.avif"]
    },
    "fabricacion-muebles": {
        titulo: "Fabricación de muebles",
        descripcion: "Este curso se centra en el diseño y construcción de mobiliario completo, integrando los conocimientos adquiridos en los niveles anteriores. La fabricación de muebles es una disciplina que combina funcionalidad, ergonomía y estética, y permite al estudiante crear piezas útiles para el hogar o el trabajo.",
        planDeEstudio: "Se aprenderá a interpretar planos de muebles, seleccionar materiales adecuados, realizar estructuras resistentes y aplicar técnicas de acabado de alta calidad. El curso incluye la construcción de muebles como mesas, sillas, armarios o bibliotecas, con un enfoque práctico que simula proyectos reales de taller.",
        imagenes: ["muebles 1.jpeg", "muebles 2.jfif", "muebles 3.jpg"]
    },

    
    // Herrería
    "herreria-basica": {
        titulo: "Herrería básica",
        descripcion: "La herrería es el oficio dedicado al trabajo con metales, especialmente hierro y acero, para crear estructuras, herramientas y objetos útiles. En su nivel básico, el curso introduce al estudiante en el manejo de materiales metálicos, el uso de herramientas manuales y eléctricas, y las técnicas elementales de corte y unión. Es ideal para quienes desean iniciarse en este oficio tradicional y adquirir habilidades prácticas para proyectos simples y seguros.",
        planDeEstudio: "Se aprenderá a identificar distintos tipos de metales y sus propiedades, a utilizar herramientas como esmeriles, martillos, pinzas y taladros, y a realizar cortes rectos y uniones básicas mediante soldadura eléctrica. También se abordarán nociones de seguridad en el taller y la construcción de piezas sencillas como rejas pequeñas, soportes o estructuras básicas.",
        imagenes: ["herreria 1.webp", "herreria 2.webp", "herreria 3.webp"]
    },
    "herreria-avanzada": {
        titulo: "Herrería avanzada",
        descripcion: "La herrería avanzada profundiza en técnicas más complejas de construcción metálica, orientadas a proyectos de mayor dificultad y precisión. En este nivel, el metal deja de ser solo un material de trabajo y se convierte en un medio para crear estructuras resistentes y estéticamente cuidadas. El curso está pensado para quienes ya poseen conocimientos básicos y buscan perfeccionar sus habilidades en proyectos de mayor escala.",
        planDeEstudio: "Se trabajará con técnicas de soldadura más sofisticadas (como MIG y TIG), uso de maquinaria especializada para cortes y doblado de metales, diseño de estructuras metálicas con planos detallados, y aplicación de acabados protectores como pinturas anticorrosivas. El curso también enseña a optimizar el uso de materiales y a aplicar técnicas de ensamblado que garantizan resistencia y durabilidad en proyectos como portones, rejas ornamentales y estructuras industriales.",
        imagenes: ["herreria 4.avif", "herreria 5.jfif", "herreria 6.jpg"]
    },


    // Electricidad
    "electricidad-basica": {
        titulo: "Electricidad básica domiciliaria",
        descripcion: "La electricidad domiciliaria es el conjunto de conocimientos y prácticas necesarias para instalar, mantener y reparar sistemas eléctricos en viviendas. Este curso introduce al estudiante en el mundo de la energía eléctrica aplicada al hogar, abordando conceptos fundamentales de seguridad y normativa básica. Es ideal para quienes desean iniciarse en el oficio y adquirir habilidades prácticas para instalaciones sencillas y seguras.",
        planDeEstudio: "Se aprenderá a identificar los componentes de una instalación eléctrica domiciliaria (cables, interruptores, tomas, lámparas), a realizar conexiones básicas, instalar circuitos de iluminación y tomacorrientes, y aplicar normas de seguridad eléctrica. También se abordará el uso de herramientas específicas y la interpretación de planos eléctricos simples.",
        imagenes: ["electricidad domestica 1.png", "electricidad domestica 2.jpg", "electricidad domestica 3.jpg"]
    },
    "electricidad-avanzada": {
        titulo: "Electricidad avanzada industrial",
        descripcion: "La electricidad avanzada industrial se centra en instalaciones de mayor complejidad, aplicadas a fábricas, talleres y entornos productivos. Este curso profundiza en el diseño y mantenimiento de sistemas eléctricos industriales, donde la seguridad, la eficiencia y la capacidad de diagnóstico son esenciales. Está orientado a quienes ya poseen conocimientos básicos y buscan ampliar sus competencias hacia proyectos de mayor escala.",
        planDeEstudio: "Se trabajará con tableros eléctricos industriales, motores trifásicos, sistemas de protección y control, y mantenimiento preventivo y correctivo de instalaciones. También se aprenderá a interpretar planos eléctricos industriales, realizar diagnósticos de fallas y aplicar técnicas de optimización energética en entornos productivos.",
        imagenes: ["electricidad industrial 1.jpg", "electricidad industrial 2.jfif", "electricidad industrial 3.webp"]
    },
    "electricidad-industrial": {
        titulo: "Electricidad industrial",
        descripcion: "La electricidad industrial es la disciplina que aplica los principios eléctricos a la construcción y mantenimiento de instalaciones en plantas y entornos productivos. Este curso práctico integra los conocimientos adquiridos en niveles anteriores y los aplica a proyectos reales, preparando al estudiante para enfrentar desafíos concretos en el ámbito laboral.",
        planDeEstudio: "Se aprenderá a diseñar y ejecutar instalaciones eléctricas completas en entornos industriales, a realizar diagnósticos avanzados de fallas, y a aplicar técnicas de seguridad y eficiencia energética. El curso incluye prácticas con tableros, motores, sistemas de iluminación industrial y proyectos simulados que reproducen situaciones reales de trabajo.",
        imagenes: ["electricidad industrial 4.jfif", "electricidad industrial 5.jpg", "electricidad industrial 6.avif"]
    },


    // Textil y moda
    "confeccion-basica": {
        titulo: "Confección textil básica",
        descripcion: "La confección textil es el arte de transformar telas en prendas y objetos útiles. En su nivel básico, el curso introduce al estudiante en las técnicas fundamentales de costura y armado, brindando las bases para comprender cómo se construye una prenda desde cero. Es ideal para quienes desean iniciarse en el mundo de la moda y la confección, aprendiendo a trabajar con distintos tipos de telas y herramientas.",
        planDeEstudio: "Se aprenderá a identificar materiales textiles y sus propiedades, a realizar cortes simples, a manejar máquinas de coser y herramientas básicas, y a confeccionar prendas sencillas como camisetas, faldas o accesorios. También se abordarán nociones de seguridad en el uso de maquinaria y técnicas de terminación básica.",
        imagenes: ["confeccion basica 1.webp", "confeccion basica 2.webp", "confeccion basica 3.gif"]
    },
    "confeccion-avanzada": {
        titulo: "Confección textil avanzada",
        descripcion: "La confección avanzada profundiza en técnicas más complejas de costura y acabados, orientadas a la producción de prendas de mayor calidad y detalle. Este curso permite al estudiante perfeccionar sus habilidades y adquirir conocimientos que lo acercan a la confección profesional.",
        planDeEstudio: "Se trabajará con técnicas de costura avanzada, confección de prendas estructuradas, aplicación de acabados profesionales como dobladillos invisibles y cierres, y uso de maquinaria especializada. También se aprenderá a optimizar el uso de materiales y a confeccionar prendas completas con un nivel de detalle superior.",
        imagenes: ["confeccion avanzada 1.jfif", "confeccion avanzada 2.jpeg", "confeccion avanzada 3.jpg"]
    },
    "diseno-indumentaria": {
        titulo: "Diseño y producción de indumentaria",
        descripcion: "El diseño y producción de indumentaria integra creatividad y técnica para dar vida a colecciones de moda. Este curso completo abarca desde la concepción de una idea hasta la confección final de las prendas, combinando diseño, patronaje y producción.",
        planDeEstudio: "Se aprenderá a diseñar colecciones de moda, a realizar bocetos y trasladarlos a patrones, a confeccionar prendas completas y a gestionar procesos de producción. También se abordarán nociones de tendencias, ergonomía y presentación de proyectos.",
        imagenes: ["confeccion textil 1.jfif", "confeccion textil 2.webp", "confeccion textil 3.jfif"]
    },
    "molderia-superior": {
        titulo: "Moldería y confección – parte superior",
        descripcion: "La moldería es la técnica que permite crear patrones para confeccionar prendas. Este curso se especializa en la parte superior del cuerpo, como camisas, blusas y chaquetas, brindando herramientas para lograr prendas ajustadas y funcionales.",
        planDeEstudio: "Se aprenderá a diseñar y confeccionar moldes para prendas superiores, a realizar ajustes de talles, a confeccionar prototipos y a aplicar técnicas de costura específicas para esta parte del cuerpo. También se abordarán métodos de prueba y corrección de patrones.",
        imagenes: ["molderia superior 1.webp", "molderia superior 2.jpg", "molderia superior 3.jfif"]
    },
    "molderia-inferior": {
        titulo: "Moldería y confección – parte inferior",
        descripcion: "Este curso se centra en la creación de patrones para prendas inferiores, como pantalones, faldas y shorts. La moldería aplicada a la parte inferior requiere precisión y conocimiento de la ergonomía para lograr prendas cómodas y funcionales.",
        planDeEstudio: "Se aprenderá a diseñar moldes para prendas inferiores, a realizar ajustes de talles y cortes, a confeccionar prototipos y a aplicar técnicas de costura específicas. También se abordarán métodos de prueba y corrección para garantizar un calce adecuado.",
        imagenes: ["molderia inferior 1.webp", "molderia inferior 2.jpg", "molderia inferior 3.webp"]
    },
    "ropa-bebe": {
        titulo: "Patronista y confeccionista de ropa de bebé",
        descripcion: "La confección de ropa de bebé requiere conocimientos específicos para crear prendas seguras, cómodas y adaptadas a las necesidades de los más pequeños. Este curso completo aborda tanto el diseño como la confección de indumentaria infantil.",
        planDeEstudio: "Se aprenderá a diseñar patrones para ropa de bebé, a seleccionar telas adecuadas, a confeccionar prendas seguras y cómodas, y a aplicar técnicas de costura adaptadas a talles pequeños. También se abordarán aspectos de ergonomía y seguridad en la confección infantil.",
        imagenes: ["ropa bebe 1.webp", "ropa bebe 2.webp", "ropa bebe 3.jpg"]
    },


    // Jardinería y medio ambiente
    "jardineria-paisajismo": {
        titulo: "Jardinería y paisajismo",
        descripcion: "La jardinería y el paisajismo son disciplinas que combinan el cuidado de las plantas con el diseño de espacios verdes. Este curso completo introduce al estudiante en la creación y mantenimiento de jardines, parques y espacios ornamentales, integrando conocimientos de botánica, estética y funcionalidad. Es ideal para quienes desean transformar espacios exteriores en ambientes armónicos y sostenibles.",
        planDeEstudio: "Se aprenderá a seleccionar especies vegetales según clima y suelo, a diseñar jardines con criterios estéticos y funcionales, a aplicar técnicas de plantación y riego, y a mantener espacios verdes en buen estado. También se abordarán principios básicos de paisajismo y composición visual.",
        imagenes: ["jardineria 1.jpg", "jardineria 2.jpg", "jardineria 3.jpg"]
    },
    "plantas-aromaticas": {
        titulo: "Plantas aromáticas y medicinales",
        descripcion: "El cultivo de plantas aromáticas y medicinales combina tradición y ciencia, ofreciendo beneficios culinarios, terapéuticos y ambientales. Este curso completo enseña a reconocer, cultivar y aprovechar estas especies, que han sido utilizadas durante siglos en la cocina y la medicina natural.",
        planDeEstudio: "Se aprenderá a identificar distintas plantas aromáticas y medicinales, a cultivarlas en huertas o jardines, a aplicar técnicas de cosecha y conservación, y a conocer sus usos prácticos en gastronomía y salud. También se abordarán aspectos de sostenibilidad y producción a pequeña escala.",
        imagenes: ["plantas medicinales 1.jpg", "plantas medicinales 2.jpeg", "plantas medicinales 3.avif"]
    },
    "gestion-espacios-verdes": {
        titulo: "Gestión de espacios verdes y urbanos",
        descripcion: "La gestión de espacios verdes urbanos es una disciplina que busca mantener y optimizar parques, plazas y áreas públicas, garantizando su funcionalidad y sostenibilidad. Este curso completo prepara al estudiante para administrar proyectos de mantenimiento y desarrollo de espacios verdes en entornos urbanos.",
        planDeEstudio: "Se aprenderá a planificar y organizar tareas de mantenimiento de parques y plazas, a coordinar equipos de trabajo, a aplicar técnicas de conservación de especies vegetales y a implementar estrategias de gestión sostenible. También se abordarán aspectos normativos y de seguridad en espacios públicos.",
        imagenes: ["gestion espacios verdes 1.jpg", "gestion espacios verdes 2.jfif", "gestion espacios verdes 3.jpg"]
    },
    "huerta-urbana": {
        titulo: "Huerta urbana agroecológica",
        descripcion: "La huerta urbana agroecológica es una práctica que permite producir alimentos saludables en espacios reducidos, aplicando principios de sostenibilidad y respeto por el medio ambiente. Este curso completo enseña a diseñar y mantener huertas en balcones, patios o terrenos urbanos, fomentando la autosuficiencia y la conciencia ecológica.",
        planDeEstudio: "Se aprenderá a preparar suelos y recipientes para cultivo urbano, a seleccionar semillas y especies adecuadas, a aplicar técnicas agroecológicas de riego y fertilización natural, y a mantener una producción constante de hortalizas y verduras. También se abordarán estrategias de reciclaje y aprovechamiento de recursos.",
        imagenes: ["huerta 1.jpg", "huerta 2.webp", "huerta 3.webp"]
    },


    // Artes gráficas
    "serigrafia-basica": {
        titulo: "Serigrafía básica",
        descripcion: "La serigrafía es una técnica de impresión que permite transferir diseños sobre distintos materiales, como papel, tela, madera o plástico, utilizando una malla tensada y tintas especiales. Es ampliamente utilizada en la industria gráfica, textil y publicitaria por su versatilidad y durabilidad. En su nivel básico, el curso introduce al estudiante en los fundamentos de esta técnica, desde la preparación de las pantallas hasta la impresión de proyectos sencillos.",
        planDeEstudio: "Se aprenderá a preparar pantallas de serigrafía, a seleccionar y manejar tintas, a realizar estampados simples sobre papel y tela, y a aplicar técnicas básicas de secado y fijación. También se abordarán nociones de seguridad en el manejo de materiales y la creación de diseños iniciales para impresión.",
        imagenes: ["serigrafia 1.jpg", "serigrafia 2.jfif", "serigrafia 3.jpg"]
    },

    "serigrafia-avanzada": {
        titulo: "Serigrafía avanzada",
        descripcion: "La serigrafía avanzada profundiza en técnicas más complejas de impresión, orientadas a la producción en serie y a la obtención de acabados profesionales. Este curso está pensado para quienes ya poseen conocimientos básicos y desean perfeccionar sus habilidades en proyectos de mayor escala, aplicando técnicas de color y efectos especiales.",
        planDeEstudio: "Se trabajará con técnicas de impresión multicolor, uso de emulsiones fotosensibles para crear diseños detallados, aplicación de acabados especiales como barnices y tintas metálicas, y producción en serie de estampados. También se aprenderá a optimizar procesos de impresión, a mantener equipos y a aplicar técnicas de control de calidad en proyectos gráficos.",
        imagenes: ["serigrafia 4.jpg", "serigrafia 5.jpg", "serigrafia 6.png"]
    }

};
