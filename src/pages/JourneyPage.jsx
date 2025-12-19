import { useParams } from "react-router-dom"
// import database from "../../data"
import { useState } from "react"
import DetailsCard from "../components/DetailsCard"
import { Link } from "react-router-dom"

export default function JourneyPage({ data, setData }) {


    // const [data, setData] = useState(database)
    const [search, setSearch] = useState('')
    const { id } = useParams()

    const current = data.find(current => Number(id) === current.id)

    const partecipanti = current?.partecipanti || [];

    const filteredPartecipanti = partecipanti.filter(partecipante => {
        const fullName = `${partecipante.nome} ${partecipante.cognome}`.toLowerCase()
        return fullName.includes(search.toLowerCase())
    })

    return (
        <section className="journey">
            <div className="container">
                <div className="d-flex align-items-center justify-content-center">
                    <DetailsCard currentjourney={current} />
                </div>

                <input
                    className="form-control my-3"
                    type="text"
                    placeholder="Cerca per nome e cognome..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)} />

                <div className="row row-cols-1">

                    <div className="accordion">
                        {filteredPartecipanti?.map(user => {
                            const headingId = `heading-${user.id}`;
                            const collapseId = `collapse-${user.id}`;

                            return (
                                <div key={user.id} className="accordion-item">
                                    <h2 className="accordion-header" id={headingId}>
                                        <button
                                            className="accordion-button collapsed fw-bold"
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
                                        <div className="accordion-body bg-accordion">
                                            <p><strong className="text-accordion">Codice Fiscale: </strong> {user.codice_fiscale}</p>
                                            <p><strong className="text-accordion">Cellulare: </strong> {user.numero}</p>
                                            <p><strong className="text-accordion">Email: </strong> {user.email}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
                <div className="w-100 d-flex justify-content-center my-5">
                    <Link to='/' className="btn btn-dark px-5 py-2 rounded "> Torna indietro </Link>
                </div>

            </div>
        </section >
    )
}