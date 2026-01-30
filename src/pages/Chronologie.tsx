import Card from "../components/Card";
import { chronologie } from "../data/chronologie";
import type { ChronologieItem } from "../type/interfaces";

function ChronologiePage() {
  return (
    
    <section className="relative py-20">
       <h1 className="text-red-900 text-3xl font-bold text-center mb-8">
        Quelques dates importantes
      </h1>
      
      {/* Axe central */}
      <div className="absolute left-1/2 top-40 h-full w-1 bg-yellow-400 -translate-x-1/2"></div>

      <div className="space-y-24">
        {chronologie.map((item: ChronologieItem, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={item.id}
              className={`relative flex w-full ${
                isLeft ? "justify-start pr-12" : "justify-end pl-12"
              }`}
            >
              {/* Point sur l’axe */}
              {/* <span className="absolute left-1/2 top-8 w-6 h-6 bg-yellow-400 rounded-full -translate-x-1/2 border-4 border-red-900 z-10"></span> */}

              {/* Carte */}
              <div className="w-full md:max-w-3xl">
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
    </section>
  );
}

export default ChronologiePage;

