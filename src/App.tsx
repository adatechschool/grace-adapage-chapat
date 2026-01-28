import "./App.css";
import "./index.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Chronologie from "./pages/Chronologie";
import Records from "./pages/Records";
import FormulesMagiques from "./pages/FormulesMagiques";

function App() {
  return (
    <>
      <header>
        <div className="bg-gray-200 flex items-center justify-center p-4 mb-10">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="w-60 items-center hover:scale-110"
          />

          <Link
            to="/chronologie"
            className="px-4 py-2 rounded-2xl bg-yellow-400 hover:bg-yellow-500 ml-20"
          >
            Chronologie
          </Link>

          <Link
            to="/records"
            className="px-4 py-2 rounded-2xl bg-yellow-400 hover:bg-yellow-500 ml-20"
          >
            Records
          </Link>

          <Link
            to="/formulesMagiques"
            className="px-4 py-2 rounded-2xl bg-yellow-400 hover:bg-yellow-500 ml-20"
          >
            Formules Magiques
          </Link>
        </div>
      </header>

      <main>
        <div className="flex items-center gap-8 bg-red-900 p-10 rounded-4xl mx-20">
          <div className="flex-1 ml-15">
            <p className="text-white leading-loose mr-8 first-letter:font-stretch-50% first-letter:text-8xl first-letter:float-left first-letter:mr-3 first-letter:-mt-1 font-HarryP first-letter:text-yellow-500">
              Sorcier britannique, survivant de la malédiction de Voldemort,
              élève de Gryffondor devenu le symbole de la résistance contre les
              forces du mal.
            </p>
          </div>

          <div className="flex-1">
            <img
              src="/images/presentation.jpeg"
              alt="Presentation"
              className="rounded-4xl hover:scale-115 hover:cursor-pointer hover:shadow-lg"
            />
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chronologie" element={<Chronologie />} />
          <Route path="/records" element={<Records />} />
          <Route path="/formulesMagiques" element={<FormulesMagiques />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
