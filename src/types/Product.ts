//type para el listado de productos
export type Product = {
    id: string,
    brand: string,
    model: string,
    price: string,
    imgUrl: string,
}

//type para añadir productos al carrito
export type ProductCart = {
    //id: number,
    colorCode: number,
    storageCode: number,
}

//Definicion de tipo para el detalle del producto
export type ProductOption = {
  code: number;
  name: string;
}

export type ProductDetails = {
  id: string;
  brand: string;
  model: string;
  price: string;
  imgUrl: string,
  cpu: string;
  ram: string;
  os: string;
  displayResolution: string;
  battery: string;
  primaryCamera: string[];
  dimentions: string;
  weight: string;
  options: {
    colors: ProductOption[];
    storages: ProductOption[];
  };
}