import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import type { Product } from "../interfaces/product.interface";

export const DetailProduct = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setProducto(null);
    setError(null);

    const controller = new AbortController();

    const fetchProducto = async () => {
      try {
        const respuesta = await axios.get(
          `https://dummyjson.com/products/${id}`,
        );
        setProducto(respuesta.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducto();

    return () => controller.abort();
  }, [id]);

  if (error) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-8">
        <p role="alert" className="text-red-600">
          {error}
        </p>
        <Link
          to="/"
          className="mt-4 inline-block text-blue-700 hover:underline"
        >
          Volver a productos
        </Link>
      </section>
    );
  }

  if (!producto) {
    return (
      <section
        className="flex min-h-48 items-center justify-center"
        role="status"
        aria-label="Cargando producto"
      >
        <span className="block h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-blue-700" />
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-8">
      <Link to="/" className="mb-6 inline-block text-blue-700 hover:underline">
        ← Volver a productos
      </Link>
      <article className="grid gap-8 rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-2 md:p-8 dark:border-slate-700 dark:bg-gray-800">
        <div className="flex min-h-72 items-center justify-center rounded-lg bg-slate-50 p-6 dark:bg-slate-900">
          <img
            src={producto.thumbnail}
            alt={producto.title}
            className="max-h-96 w-full object-contain"
          />
        </div>
        <div className="flex flex-col">
          <p className="mb-2 text-sm capitalize text-slate-500 dark:text-slate-400">
            {producto.category}
          </p>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            {producto.title}
          </h1>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            {producto.description}
          </p>
          <div className="mt-6 flex items-center gap-3">
            <span className="text-3xl font-bold text-slate-900 dark:text-white">
              ${producto.price.toFixed(2)}
            </span>
            <span className="rounded bg-blue-100 px-2.5 py-0.5 text-sm font-semibold text-blue-800 dark:bg-blue-200">
              ★ {producto.rating}
            </span>
          </div>
          <button
            type="button"
            className="mt-6 w-full rounded-lg bg-blue-700 px-5 py-3 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-fit dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Añadir al carrito
          </button>
        </div>
      </article>
    </section>
  );
};
