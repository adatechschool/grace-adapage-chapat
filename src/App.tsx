import "./App.css";

function App() {
  return (
    <>
      <div>
        <img src="/images/logo.png" alt="Logo" className="w-50" />
      </div>

      <div className="flex items-center gap-8">

      <div className="flex-1">
        <h2>
          Sorcier britannique, survivant de la malédiction de Voldemort, élève
          de Gryffondor devenu le symbole de la résistance contre les forces du
          mal.
        </h2>
      </div>

      <div className="flex-1">
        <img src="/images/presentation.jpeg" alt="Presentation" />
      </div>

      </div>
    </>
  );
}

export default App;
