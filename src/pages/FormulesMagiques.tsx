<<<<<<< HEAD
export default function FormulesMagiques() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Formules Magiques</h1>
      <p>Ici tu pourras consulter les différentes formules magiques.</p>
    </div>
  );
}
=======
import { useParams } from 'react-router-dom'

export default function FormulesMagiques() {

const { id } = useParams()

console.log("ID from params:", id)

  return (
    <div>
      <h1>Formules Magiques Page</h1>
      {id && <p>Detail for ID: {id}</p>}
    </div>
  )

}
>>>>>>> 1b2d0b6 (recup pat)
