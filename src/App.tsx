import { useState } from "react";
import "./App.css";
import "./index.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home"; 
import Chronologie from "./pages/Chronologie";
import Records from "./pages/Records";
import FormulesMagiques from "./pages/FormulesMagiques"; "react-router-dom";


const App = () =>{
return (
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/chronologie" element={<Chronologie/>}/>
    <Route path="/records" element={<Records/>}/>
    <Route path="/formulesMagiques" element={<FormulesMagiques/>}/>

  </Routes>
)
}






function App2() {
  const [btn, setBtn] = useState("");

  return (
    <>
      <header>
        <div className="bg-gray-200 flex items-center justify-center p-4 mb-10">

<<<<<<< HEAD
          <img src="/images/logo.png" alt="Logo" className="w-60 items-center hover:scale-110" />

          <button className="px-4 py-2 rounded-2xl bg-yellow-400 hover:bg-yellow-500 ml-20" onClick={() => {}}>
            Chronologie
          </button>
          <button className="px-4 py-2 rounded-2xl bg-yellow-400 hover:bg-yellow-500 ml-20" onClick={() => {}}>
            Amis Proches
          </button>
          <button className="px-4 py-2 rounded-2xl bg-yellow-400 hover:bg-yellow-500 ml-20" onClick={() => {}}>
            Records
          </button>
          <button className="px-4 py-2 rounded-2xl bg-yellow-400 hover:bg-yellow-500 ml-20" onClick={() => {}}>
=======
        <div className="flex gap-20">
          <button className="px-4 py-2 bg-yellow-200 ml-20" onClick={() => {}}>
            Chronologie
          </button>
          <button className="px-4 py-2 bg-yellow-200" onClick={() => {}}>
            Amis Proches
          </button>
          <button className="px-4 py-2 bg-yellow-200" onClick={() => {}}>
            Records
          </button>
          <button className="px-4 py-2 bg-yellow-200" onClick={() => {}}>
>>>>>>> be22328 (bis)
            Formules Magiques
          </button>
        </div>
      </header>

      <main>
<<<<<<< HEAD
        <div className="flex items-center gap-8 bg-red-900 p-10 rounded-4xl mx-20">
          <div className="flex-1 ml-15">
            <p className="text-white leading-loose mr-8 first-letter:font-stretch-50% first-letter:text-8xl first-letter:float-left first-letter:mr-3 first-letter:-mt-1 font-HarryP first-letter:text-yellow-500">
    Sorcier britannique, survivant de la malédiction de Voldemort, élève de Gryffondor devenu le symbole de la résistance contre les forces du mal.
            </p>
=======
        <div className="flex items-center gap-8">
          <div className="flex-1 ml-20">
            <h2>
              Sorcier britannique, survivant de la malédiction de Voldemort,
              élève de Gryffondor devenu le symbole de la résistance contre les
              forces du mal.
            </h2>
>>>>>>> be22328 (bis)
          </div>

          

          <div className="flex-1">
            <img src="/images/presentation.jpeg" alt="Presentation" className="rounded-4xl hover:scale-115 hover:cursor-pointer hover:shadow-lg" />
          </div>
        </div>
<<<<<<< HEAD
      </main>
=======
      </>
>>>>>>> be22328 (bis)
    </>
  );
}

export default App;
