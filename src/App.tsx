import { useState } from "react";
import "./App.css";

function App() {
  const [btn, setBtn] = useState("");

  return (
    <>
      <header>
        <div>
          <img src="/images/logo.png" alt="Logo" className="w-50" />
        </div>

        <div className="flex gap-20">
          <button className="px-4 py-2 bg-blue-400 ml-20" onClick={() => {}}>
            Chronologie
          </button>
          <button className="px-4 py-2 bg-blue-400" onClick={() => {}}>
            Amis Proches
          </button>
          <button className="px-4 py-2 bg-blue-400" onClick={() => {}}>
            Records
          </button>
          <button className="px-4 py-2 bg-blue-400" onClick={() => {}}>
            Formules Magiques
          </button>
        </div>
      </header>

      <body>
        <div className="flex items-center gap-8">
          <div className="flex-1 ml-20">
            <h2>
              Sorcier britannique, survivant de la malédiction de Voldemort,
              élève de Gryffondor devenu le symbole de la résistance contre les
              forces du mal.
            </h2>
          </div>

          <div className="flex-1">
            <img src="/images/presentation.jpeg" alt="Presentation" />
          </div>
        </div>
      </body>
    </>
  );
}

export default App;
