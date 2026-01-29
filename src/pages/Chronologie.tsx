import Card from "../components/Card";
import { chronologie } from "../data/chronologie";
//  import type { ChronologieItem } from "../type/interfaces";

const ChronologiePage = () => {
  return (
    <div className="flex items-center gap-8 bg-red-900 p-10 rounded-4xl mx-20">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {chronologie.map((item) => (
        <Card
          key={item.id}
          title={<h3>{item.titre}</h3>}
          subtitle={item.date}
          description={item.description}
          image={item.photo}
        />
      ))}
    </div>
    </div>
  );
};

export default ChronologiePage;