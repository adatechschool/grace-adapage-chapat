import Card from "../components/Card";
import { records } from "../data/Records";
import type { RecordItem } from "../type/interfaces";


function RecordsPage() {
  return (
    
      
    
          <div className="flex items-center bg-red-900 p-10 rounded-4xl mx-20">
      
<div className="m-auto items-center"><p className="text-white text-3xl  font-bold">Records de Harry Potter</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {records.map((item: RecordItem) => (
          <Card
            key={item.id}
            title={item.titre}
            subtitle={item.date}
            description={item.description}
            image={item.photo}
          />
        ))}
      </div>
    </div>
    </div>
  );
}

export default RecordsPage;
