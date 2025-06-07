const tiposDePlantas = [
  {
    id: 1,
    img: '../Suculentas1.jpg',
    descripcion: 'Mix de suculentas',
    categoria: 'suculentas',
    precio: 500,
  },
  {
    id: 2,
    img: '../Suculentas2.jpg',
    descripcion: 'Suculentas de interior',
    categoria: 'suculentas',
    precio: 600,
  },
  {
    id: 3,
    img: '../Suculentas3.jpg',
    descripcion: 'Suculentas de exterior',
    categoria: 'suculentas',
    precio: 700,
  },
  {
    id: 4,
    img: "../Florales2.jpg",
    descripcion: 'Zinias',
    categoria: 'florales',
    precio: 800,
  },
  {
    id: 5,
    img: "../Florales3.jpg",
    descripcion: 'Mariposa Azul',
    categoria: 'florales',
    precio: 950,
  },
  {
    id: 6,
    img: "../Interior1.jpg",
    descripcion: 'Espada de San Jorge',
    categoria: 'interiores',
    precio: 1200,
  },
  {
    id: 7,
    img: "../Interior2.jpg",
    descripcion: 'Monstera',
    categoria: 'interiores',
    precio: 1700,
  },
  {
    id: 8,
    img: "../Interior5.jpg",
    descripcion: 'Tronco de Brasil',
    categoria: 'interiores',
    precio: 1900,
  }
];

export const getProduct = () => {
  return new Promise((resolve, reject) => {
    const hayProductos = tiposDePlantas.length > 0;
    if (hayProductos) {
      resolve(tiposDePlantas);
    } else {
      reject('Hubo un error. Intente más tarde');
    }
  });
};
