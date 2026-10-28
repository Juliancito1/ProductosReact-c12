export const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 px-4 py-6 text-slate-600">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 sm:flex-row">
        <span className="font-semibold text-slate-900 text-2xl">MiniMarket</span>
        <p className="text-sm">
          © {new Date().getFullYear()} MiniMarket. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};
