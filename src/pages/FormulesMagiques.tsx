import { formulesMagiques } from "../data/formules";
import type { FormuleMagiqueItem } from "../type/interfaces";
import Card from "../components/Card";


const FormulesMagiquesPage = () => {
  
  return (
   <div className="flex items-center gap-8 bg-red-900 p-10 rounded-4xl mx-20">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
 {formulesMagiques.map((item) => ( 
 <Card
          key={item.id}
          title={item.titre}
          image={item.photo}
          description={item.description}
        />
      ))}
    </div>
    </div>
  );
};

export default FormulesMagiquesPage;


