const stockProductos = [
    {
        id: 1, 
        nombre: "CyberPunk 2077",
        cantidad: 1, 
        desc: "Cyberpunk 2077 es un RPG de aventura y acción de mundo abierto ambientado en el futuro sombrío de Night City, una peligrosa megalópolis obsesionada con el poder, el glamur y las incesantes modificaciones corporales", 
        precio: 39.990, 
        url: '2077.jpg'
    },
    {
        id: 2, 
        nombre: "Resident Evil Village", 
        cantidad: 1, 
        desc: "Vive el survival horror como nunca antes en la 8.ª entrega principal de la aclamada serie Resident Evil: Resident Evil Village. El terror más realista e inescapable, con gráficos hiperdetallados, intensa acción en 1.ª persona y una trama magistral.", 
        precio: 32.200,
        url: 're8.jpg'
    },
    {
        id: 3, 
        nombre: "Resident Evil 7 Biohazard", 
        cantidad: 1, 
        desc: "El peligro y la soledad emanan de las decrépitas paredes de una granja abandonada en el sur de los EE. UU. «7» marca un nuevo inicio para el género del survival horror, con el cambio a la aterradora perspectiva de jugador «vista aislada».", 
        precio: 16.100,
        url: 're7.jpg'
    },
    {
        id: 4, 
        nombre: "Grand Theft Auto V",  
        cantidad: 1, 
        desc: "Grand Theft Auto V para PC ofrece a los jugadores la opción de explorar el galardonado mundo de Los Santos y el condado de Blaine con una resolución de 4K y disfrutar del juego a 60 fotogramas por segundo.", 
        precio: 36.256,
        url: 'gta5.jpg'
    },
    {
        id: 5, 
        nombre: "Elden Ring", 
        cantidad: 1, 
        desc: "EL NUEVO JUEGO DE ROL Y ACCIÓN DE AMBIENTACIÓN FANTÁSTICA. Álzate, Sinluz, y que la gracia te guíe para abrazar el poder del Círculo de Elden y encumbrarte como señor del Círculo en las Tierras Intermedias.", 
        precio: 36.500, 
        talle: "S", 
        url: 'elden-ring.jpg'
    },
    {
        id: 6, 
        nombre: "EA SPORTS™ FIFA 23", 
        cantidad: 1, 
        desc: "Vive la emoción del mayor torneo futbolístico con EA SPORTS™ FIFA 23 y la actualización de la FIFA World Cup™ masculina, ¡disponible el 9 de noviembre sin coste adicional!", 
        precio: 43.900, 
        url: 'fifa23.jpg'
    },
    {
        id: 7, 
        nombre: "The Calisto Protocol", 
        cantidad: 1, 
        desc: "Sobrevive y escapa de los horrores de Calisto. Descubre los oscuros secretos de la Luna Muerta de Júpiter.", 
        precio: 43.000,
        url: 'tcp.jpg'
    },
    {
        id: 8, 
        nombre: "Dead Space (2023)",  
        cantidad: 1, 
        desc: "El clásico de terror de ciencia ficción, regresa con una nueva versión totalmente renovada para ofrecer una experiencia aún más inmersiva, con mejoras visuales, de sonido y de jugabilidad, además de mantenerse fiel a la emocionante visión del juego original.", 
        precio: 46.900, 
        url: 'dp.jpg'
    },
    {
        id: 9, 
        nombre: "Rust", 
        cantidad: 1,
        desc: "Rust es un juego de supervivencia creado por Facepunch Studios. La inspiración del videojuego viene de múltiples juegos del género de supervivencia.", 
        precio: 17.900,
        url: 'rust.jpg'
    },
    {
        
        id: 10, 
        nombre: "Forza Horizon 5",
        cantidad: 1, 
        desc: "Explora los paisajes dinámicos en constante evolución de México gracias a la acción que vivirás al conducir los mejores coches del mundo de forma ilimitada y divertida. Arranca hacia el parque de Hot Wheels Park y prueba las pistas más extremas jamás creadas, la expansión se vende por separado.", 
        precio: 43.900,
        url: 'fh5.jpg'
    },
    {
        
        id: 11, 
        nombre: "Tom Clancy's Rainbow Six® Siege", 
        cantidad: 1,
        desc: "Tom Clancy's Rainbow Six Siege es el nuevo lanzamiento del shooter más aclamado desarrollado por el estudio Ubisoft Montreal.", 
        precio: 19.900,
        url: 'rss.jpg'
    },
    {
        
        id: 12, 
        nombre: "God of War (2018)", 
        cantidad: 1, 
        desc: "Kratos ha dejado atrás su venganza contra los dioses del Olimpo y vive ahora como un hombre en los dominios de los dioses y monstruos nórdicos. En este mundo cruel e implacable debe luchar para sobrevivir… y enseñar a su hijo a hacerlo también.", 
        precio: 32.000, 
        url: 'gow18.jpg'
    }
    // {
    //     id: 13, 
    //     nombre: "Juego 1",
    //     cantidad: 1, 
    //     desc: "", 
    //     precio: 900, 
    //     url: ''
    // },
    // {
    //     id: 14, 
    //     nombre: "Juego 2",
    //     cantidad: 1, 
    //     desc: "", 
    //     precio: 1400, 
    //     talle: "S",
    //     url: ''
    // },
    // {
    //     id: 15, 
    //     nombre: "Juego 3", 
    //     cantidad: 1, 
    //     desc: "", 
    //     precio: 7000,
    //     url: ''
    // },
    // {
    //     id: 16, 
    //     nombre: "Juego 4", 
    //     cantidad: 1, 
    //     desc: "", 
    //     precio: 777,
    //     url: ''
    // },
    // {
        
    //     id: 17, 
    //     nombre: "Juego 5", 
    //     cantidad: 1, 
    //     desc: "", 
    //     precio: 234,
    //     url: ''
    // },
    // {
    //     id: 18, 
    //     nombre: "Juego 6",
    //     cantidad: 1, 
    //     desc: "", 
    //     precio: 155600, 
    //     url: ''
    // },
    // {
    //     id: 19, 
    //     nombre: "Juego 1", 
    //     cantidad: 1, 
    //     desc: "",  
    //     precio: 1600, 
    //     talle: "L", 
    //     url: ''
    // },
    // {
    //     id: 20, 
    //     nombre: "Juego 2", 
    //     cantidad: 1, 
    //     desc: "", 
    //     precio: 3200,
    //     url: ''
    // },
    // {
    //     id: 21, 
    //     nombre: "Juego 3", 
    //     cantidad: 1, 
    //     desc: "",  
    //     precio: 2300, 
    //     url: ''
    // },
    // {
    //     id: 22, 
    //     nombre: "Juego 4", 
    //     cantidad: 1, 
    //     desc: "",  
    //     precio: 5600, 
    //     url: ''
    // },
    // {
    //     id: 23, 
    //     nombre: "Juego 5", 
    //     cantidad: 1, 
    //     desc: "", 
    //     precio: 1700,
    //     url: ''
    // },
    // {
    //     id: 24, 
    //     nombre: "Juego 6", 
    //     cantidad: 1, 
    //     desc: "Una pantalon que re va con vos", 
    //     precio: 800, 
    //     url: ''
    // }
]