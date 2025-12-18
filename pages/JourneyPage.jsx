import { useParams } from "react-router-dom"
import database from "../data"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Card from "../src/components/Card"

export default function JourneyPage() {


    const [data, setData] = useState(database)
    const [search, setSearch] = useState('')
    const { id } = useParams()
    const [active, setActive] = useState(0)

    const current = data.find(current => Number(id) === current.id)

    const filteredPartecipanti = current.partecipanti.filter(partecipante => {
        const fullName = `${partecipante.nome} ${partecipante.cognome}`.toLowerCase()
        return fullName.includes(search.toLowerCase())
    })

    const navigate = useNavigate()

    return (
        <section className="journey">
            <div className="container">

                <Card journey={current} />

                <input
                    className="form-control my-3"
                    type="text"
                    placeholder="Cerca per nome e cognome..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)} />

                <div className="row row-cols-1">

                    <div className="accordion">
                        {filteredPartecipanti.map(user => {
                            const headingId = `heading-${user.id}`;
                            const collapseId = `collapse-${user.id}`;

                            return (
                                <div key={user.id} className="accordion-item">
                                    <h2 className="accordion-header" id={headingId}>
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target={`#${collapseId}`}
                                            aria-expanded="false"
                                            aria-controls={collapseId}
                                        >
                                            {user.nome} {user.cognome}
                                        </button>
                                    </h2>

                                    <div
                                        id={collapseId}
                                        className="accordion-collapse collapse"
                                        aria-labelledby={headingId}
                                    >
                                        <div className="accordion-body">
                                            <p>CF: {user.codice_fiscale}</p>
                                            <p>N. Cellulare: {user.numero}</p>
                                            <p>Email: {user.email}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>

                <div className="back d-flex ms-auto justify-content-center my-3">
                    <button className="btn btn-dark" onClick={() => (navigate("/"))}>Torna indietro</button>
                </div>
            </div>
        </section >
    )
}