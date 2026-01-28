import { useParams } from "react-router-dom";

export default function Chronologie() {
  const { id } = useParams();

<<<<<<< HEAD
  return (
    <div>
      <h1>Personnage {id}</h1>
    </div>
  );
}
=======
const { id } = useParams()

console.log("ID from params:", id)

  return (
    <div>
      <h1>Chronologie Page</h1>
      {id && <p>Detail for ID: {id}</p>}
    </div>
  )

}
>>>>>>> 1b2d0b6 (recup pat)
