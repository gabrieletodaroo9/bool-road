export default function Card({ journey }) {

    const { immagine, meta, data_partenza, data_ritorno } = journey

    return (
        <>
            <div className="card my-3 border-0 rounded-5" >
                <div className="row g-3">
                    <div className="col-6 p-0">
                        <img className="w-100 h-100 rounded-5" src={immagine} alt="" />
                    </div>
                    <div className="col-6  py-5 pe-5 rounded-5">
                        <div className="d-flex flex-column justify-content-center align-items-center h-100 gap-5 ps-3 ">
                            <h3 className="mb-1">{meta}</h3>

                            <h4>{data_partenza}</h4>
                            <h4 >{data_ritorno}</h4>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}