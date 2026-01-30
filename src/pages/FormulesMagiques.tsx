import Card from "../components/Card";
import { formulesMagiques } from "../data/formules";
import type { FormuleMagiqueItem } from "../type/interfaces";

function FormulesMagiquesPage() {
  return (
    <section className="bg-red-900 py-12 px-6 rounded-3xl max-w-7xl mx-auto">
      
      {/* TITRE */}
      <h1 className="text-white text-3xl font-bold text-center mb-8">
        Formules magiques emblématique de Harry Potter
      </h1>

      {/* GRID — max 2 cards */}
      <div className="
        grid gap-6
        grid-cols-1
        md:grid-cols-2
      ">
        {formulesMagiques.map((item: FormuleMagiqueItem) => (
          <Card
            key={item.id}
            title={item.titre}
            subtitle={item.date}
            description={item.description}
            image={item.photo}
          />
        ))}
      </div>
    </section>
  );
}

export default FormulesMagiquesPage;
