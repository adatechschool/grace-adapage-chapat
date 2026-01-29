import Card from "../components/Card";
import { chronologie } from "../data/chronologie";
import type { ChronologieItem } from "../type/interfaces";

const ChronologiePage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {chronologie.map((item: ChronologieItem) => (
        <Card
          key={item.id}
          subtitle={item.date}
          description={item.description}
          image={item.photo}
        />
      ))}
    </div>
  );
};

export default ChronologiePage;