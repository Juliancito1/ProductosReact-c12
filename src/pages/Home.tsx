import { ProductCards } from "../components/ProductCards";

export const Home = () => {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-700 dark:text-white">Nuestros productos</h1>
        <p className="text-lg text-slate-600 dark:text-slate-300">
          Descubrí algunos de nuestros productos más populares.
        </p>
      </div>
      <ProductCards />
    </section>
  );
};
