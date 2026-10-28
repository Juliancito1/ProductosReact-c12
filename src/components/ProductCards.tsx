import axios from "axios";
import { useEffect, useState } from "react";
import type { Product } from "../interfaces/product.interface";
import { ProductCard } from "./ProductCard";

export const ProductCards = () => {
  const [productos, setProductos] = useState<Product[] | null>(null);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const respuesta = await axios.get<{ products: Product[] }>(
          "https://dummyjson.com/products",
        );
        setProductos(respuesta.data.products);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProductos();
  }, []);
  console.log(productos)

  return (
    <div className="grid grid-cols-1 justify-items-center gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {productos && productos.map((producto) => (
        <ProductCard key={producto.id} producto={producto} />
      ))}
    </div>
  );
};
