import { useParams } from 'react-router-dom'

export default function Chronologie() {

const { id } = useParams()

return

<div>

<h1>Personnage {id}</h1>

</div>

}