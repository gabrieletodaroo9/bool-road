import { useEffect, useState } from "react"
import database from "../data"
import { useParams } from "react-router-dom"

export default function JourneyPage() {


    const [data, setData] = useState(database)
    const { id } = useParams()

    const currentJourney = data.find(current => Number(id) === current.id)

    return (
        <>
            <div className="container">
                <div className="row">
                    {
                        currentJourney.partecipanti.map(user => (
                            <div className="col" key={user.id}>
                                <div className="card">
                                    <p>{user.name}</p>
                                    <p>{user.cognome}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}