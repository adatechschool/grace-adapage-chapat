export default function Header() {

    return (
      <header>
        <div className="bg-gray-200 flex items-center justify-center p-4 mb-10">

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
            Formules Magiques
          </button>
        </div>
      </header>
    );

}
Header();