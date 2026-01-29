import { formulesMagiques } from "../data/formules";
import type { FormuleMagiqueItem } from "../type/interfaces";

const FormulesMagiquesPage = () => {
  const formulesMagiquesConst: FormuleMagiqueItem[] = formulesMagiques.map((item) => ({
    id: item.id,
    titre: `${item.titre}`,
    date: item.date,
    description: item.description,
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {formulesMagiquesConst.map((item: FormuleMagiqueItem) => (
        <div
          key={item.id}
          className="border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <h2 className="text-xl font-bold mb-2">{item.titre}</h2>
          {item.date && <h3 className="text-md italic mb-2">{item.date}</h3>}
          <p className="text-gray-700">{item.description}</p> 
        </div>
      ))}
    </div>
  );
};

export default FormulesMagiquesPage;