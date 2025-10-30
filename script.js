/* Cargar la información de los productos */
const productos = [
    {
      nombre: 'Patrick Ta Major Skin Hydra-Luxe Luminous Skin Perfecting Foundation.',
      descripcion: 'Base de maquillaje con acabado luminoso',
      precio: 58.00,
      imagen: 'Base.jpg'
    },
    {
      nombre: 'Major Headlines Double-Take Crème & Powder Blush Duo',
      descripcion: 'Duo de rubor en crema y polvo',
      precio: 38.00,
      imagen: 'Blush.jpg'
    },
    {
      nombre: 'Major Glow Crème & Powder Light Reflecting Translucent Highlighter Duo',
      descripcion: 'Duo de iluminadores en crema y polvo',
      precio: 40.00,
      imagen: 'iluminadores.jpg'
    },
    {
      nombre: 'Major Dimension Eyeshadow Palette.',
      descripcion: 'Paleta de sombras, colores versatiles',
      precio: 70.00,
      imagen: 'Sombras.jpg'
    }
  ];
  
  /* Crear las tarjetas mediante la función crearTarjetaProducto */
  const catalogo = document.getElementById('catalogo');
  
  function crearTarjetaProducto(producto) {
    const card = document.createElement('div');
    card.className = 'producto-card';
  
    const imagen = document.createElement('img');
    imagen.src = producto.imagen;
    imagen.alt = producto.nombre;
  
    const titulo = document.createElement('h2');
    titulo.textContent = producto.nombre;
  
    const descripcion = document.createElement('p');
    descripcion.textContent = producto.descripcion;
  
    const precio = document.createElement('span');
    precio.className = 'precio';
    precio.textContent = '$' + producto.precio.toFixed(2);
  
    const boton = document.createElement('button');
    boton.className = 'btn-comprar';
    boton.textContent = 'Comprar';
  
    card.appendChild(imagen);
    card.appendChild(titulo);
    card.appendChild(descripcion);
    card.appendChild(precio);
    card.appendChild(boton);
  
    return card;
  }
  
  /* Renderizar catálogo */
  function renderizarCatalogo() {
    productos.forEach(producto => {
      const tarjeta = crearTarjetaProducto(producto);
      catalogo.appendChild(tarjeta);
    });
  }
  
  /* Cargar al iniciar */
  window.onload = renderizarCatalogo;