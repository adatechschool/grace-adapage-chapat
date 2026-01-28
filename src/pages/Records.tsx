<<<<<<< HEAD
export default function Records() {
  return (
    <div classname="p-10">
      <h1 className="text-3xl font-bold">Records</h1>
      <p>affichage records</p>
    </div>
  );
}
=======
import { useParams } from 'react-router-dom'

export default function Records() {

const { id } = useParams()

console.log("ID from params:", id)

  return (
    <div>
      <h1>Records Page</h1>
      {id && <p>Detail for ID: {id}</p>}
    </div>
  )

}
>>>>>>> 1b2d0b6 (recup pat)
