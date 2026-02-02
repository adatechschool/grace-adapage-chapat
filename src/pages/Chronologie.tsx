import { useState } from "react";
import Card from "../components/Card";
import { chronologie } from "../data/chronologie";
import type { ChronologieItem } from "../type/interfaces";

function ChronologiePage() {
  // Élément actuellement ouvert dans la modal
  const [activeItem, setActiveItem] = useState<ChronologieItem | null>(null);

  return (
    <section className="relative py-10 md:py-20 flex flex-col items-center">
      {/*Titre*/}
      <h1 className="text-red-900 text-4xl font-black text-center mb-12 md:mb-16">
        Quelques dates importantes
      </h1>

      {/*Conteneur timeline*/}
      <div className="relative w-full max-w-5xl px-4 flex flex-col items-center">
        {/* Axe central */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-3 bg-yellow-400 z-0" />

        {/* Liste des cartes */}
        <div className="flex flex-col space-y-12 md:space-y-16 w-full">
          {chronologie.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={item.id}
                className={`relative flex w-full ${
                  isLeft
                    ? "justify-start pr-4 md:pr-12"
                    : "justify-end pl-4 md:pl-12"
                }`}
              >
                {/* Largeur fixe des cartes = stabilité */}
                <div className="w-80 md:max-w-3xl relative z-5">
                  <Card
                    title={item.titre}
                    subtitle={item.date}
                    description={item.description}
                    image={item.photo}
                    onReadMore={() => setActiveItem(item)}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/*MODAL LIRE PLUS*/}
      {activeItem && (
        <div className="fixed inset-5 z-50 flex items-center justify-center bg-black/60">
          <div className="relative bg-white rounded-xl max-w-3xl w-full mx-4 p-6 md:p-8">

            {/* Bouton fermer */}
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 text-red-800 font-semibold hover:underline"
            >
              Fermer
            </button>

            <h2 className="text-2xl font-black mb-1">
              {activeItem.titre}
            </h2>

            <p className="text-gray-500 mb-4">
              {activeItem.date}
            </p>

            <img
              src={activeItem.photo}
              alt={activeItem.titre}
              className="w-full rounded-lg mb-4"
            />

            <p className="leading-relaxed text-gray-800">
              {activeItem.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

export default ChronologiePage;
