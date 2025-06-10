const tiposDePlantas = [
  {
    id: 1,
    img: '../Suculentas1.jpg',
    descripcion: 'Mix de suculentas',
    categoria: 'suculentas',
    precio: 500,
    stock: 20,
  },
  {
    id: 2,
    img: '../Suculentas2.jpg',
    descripcion: 'Suculentas de interior',
    categoria: 'suculentas',
    precio: 600,
    stock: 17,
  },
  {
    id: 3,
    img: '../Suculentas3.jpg',
    descripcion: 'Suculentas de exterior',
    categoria: 'suculentas',
    precio: 700,
    stock: 10,
  },
  {
    id: 4,
    img: "../Florales2.jpg",
    descripcion: 'Zinias',
    categoria: 'florales',
    precio: 800,
    stock: 13,
  },
  {
    id: 5,
    img: "../Florales3.jpg",
    descripcion: 'Mariposa Azul',
    categoria: 'florales',
    precio: 950,
    stock: 4,
  },
  {
    id: 6,
    img: "../Interior1.jpg",
    descripcion: 'Espada de San Jorge',
    categoria: 'interiores',
    precio: 1200,
    stock: 13,
  },
  {
    id: 7,
    img: "../Interior2.jpg",
    descripcion: 'Monstera',
    categoria: 'interiores',
    precio: 1700,
    stock: 5,
  },
  {
    id: 8,
    img: "../Interior5.jpg",
    descripcion: 'Tronco de Brasil',
    categoria: 'interiores',
    precio: 1900,
    stock: 8,
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
