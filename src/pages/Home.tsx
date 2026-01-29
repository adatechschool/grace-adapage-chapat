function Home() {
  return (
     <div className="flex items-center gap-8 bg-red-900 p-10 rounded-4xl mx-20">
          <div className="flex-1 ml-15">
            <p className="text-white leading-loose mr-8 first-letter:font-stretch-50% first-letter:text-8xl first-letter:float-left first-letter:mr-3 first-letter:-mt-1 font-HarryP first-letter:text-yellow-500">
              Sorcier britannique, survivant de la malédiction de Voldemort,
              élève de Gryffondor devenu le symbole de la résistance contre les
              forces du mal.
            </p>
          </div>

          <div className="flex-1">
            <img
              src="/images/presentation.jpeg"
              alt="Presentation"
              className="rounded-4xl hover:scale-105 hover:cursor-pointer hover:shadow-lg"
            />
          </div>
        </div>

  )
}

export default Home;



// export default Home;

// import Card from "../components/Card";
// import { home } from "../data/home";
// import type { HomeItem } from "../type/interfaces";

// const HomePage = () => {
//   return (
//     <div className="flex items-center gap-8 bg-red-900 p-10 rounded-4xl mx-20">
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
//       {home.map((item: HomeItem) => (
//         <Card
//           key={item.id}
//           description={item.description}
//           image className="rounded-4xl hover:scale-105 hover:cursor-pointer hover:shadow-lg"={item.photo}
//         />
//       ))}
//     </div>
//     </div>
//   );
// };


