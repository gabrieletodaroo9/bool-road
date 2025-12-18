export default function DetailsCard({ currentjourney }) {

    const { immagine, meta, data_partenza, data_ritorno, accompagnatori } = currentjourney

    return (
        <>
            <div className="row g-3 my-3">
                <div className="col-4 p-5">
                    <img className="w-100 h-100 object-fit-cover rounded-5" src={immagine} alt="" />
                </div>
                <div className="col-4  py-5 pe-5 rounded-5">
                    <div className="d-flex flex-column justify-content-center align-items-center h-100 gap-5 ps-3 ">
                        <h3 className="mb-1">{meta}</h3>
                        <div><strong>Data partenza: </strong>{data_partenza}</div>
                        <div><strong>Data ritorno: </strong>{data_ritorno}</div>
                    </div>
                </div>
                <div className="col-4  py-5 pe-5 rounded-5">
                    <div className="d-flex flex-column justify-content-center align-items-center h-100 gap-3 ps-3 ">
                        <h3 className="mb-1">Accompagnatori</h3>
                        {
                            accompagnatori.map(accompagnatore => (
                                <p key={accompagnatore.id}>{`${accompagnatore.nome} ${accompagnatore.cognome}`}</p>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}