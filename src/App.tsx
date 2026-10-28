import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

function App() {
  return (
    <section className="min-h-screen flex flex-col">
      <BrowserRouter>
        <Navbar />
        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </section>
  );
}

export default App;
