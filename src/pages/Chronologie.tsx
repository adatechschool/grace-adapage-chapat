import Card from "../components/Card";
import { chronologie } from "../data/chronologie";
import type { ChronologieItem } from "../type/interfaces";

function ChronologiePage() {
  return (
    <section className="relative py-10 md:py-20 flex flex-col items-center">
      {/* Titre */}
      <h1 className="text-red-900 text-4xl font-black hover:text-red-700 text-center mb-6 md:mb-16">
        Quelques dates importantes
      </h1>

      {/* Conteneur des cartes avec axe */}
      <div className="relative w-full max-w-5xl px-4 flex flex-col items-center">
        {/* Axe central derrière les cartes */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-3 bg-yellow-400 z-0"></div>

        {/* Liste des cartes */}
        <div className="flex flex-col space-y-12 md:space-y-16 w-full">
          {chronologie.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={item.id}
                className={`relative flex w-full ${
                  isLeft ? "justify-start pr-4 md:pr-12" : "justify-end pl-4 md:pl-12"
                }`}
              >
                <div className="w-full md:max-w-3xl relative z-10">
                  <Card
                    title={item.titre}
                    subtitle={item.date}
                    description={item.description}
                    image={item.photo}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ChronologiePage;
