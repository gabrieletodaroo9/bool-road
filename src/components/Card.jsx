export default function Card({ journey }) {

    const { immagine, meta, data_partenza, data_ritorno, partecipanti } = journey

    return (
        <>
            <div className="card my-3 border-0 rounded-5 bg-accordion" >
                <div className="row g-3">
                    <div className="col-4 p-0">
                        <img className="w-100 h-100 object-fit-cover rounded-5" src={immagine} alt="" />
                    </div>
                    <div className="col-8  py-5 pe-5 rounded-5">
                        <div className="d-flex flex-column justify-content-center align-items-center h-100 gap-5 ps-3 ">
                            <h3 className="mb-1">{meta}</h3>

                            <div><strong>Data partenza: </strong>{data_partenza}</div>
                            <div><strong>Data ritorno: </strong>{data_ritorno}</div>
                            <div><strong>Partecipanti: </strong>{partecipanti?.length}</div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}