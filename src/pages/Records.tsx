import Card from "../components/Card";
import { records } from "../data/records";
import type { RecordItem } from "../type/interfaces";

function RecordsPage() {
  return (
<<<<<<< HEAD
    <div className="flex items-center bg-red-900 p-10 rounded-4xl mx-20">
      <div className="m-auto items-center">
        <p className="text-white text-3xl  font-bold">
          Records de Harry Potter
        </p>
=======
    <>
    <div>
    <p className="text-red-800 text-3xl flex items-center justify-center font-bold mb-5 first-letter:text-4xl first-letter:mr-2 first-letter:text-yellow-500">Records de Harry Potter</p>
    </div>

          <div className="flex items-center bg-red-900 p-5 rounded-4xl">
            
>>>>>>> 04965c7 (dernier commit vendredi)

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
<<<<<<< HEAD
=======
    </>
>>>>>>> 04965c7 (dernier commit vendredi)
  );
}

export default RecordsPage;
