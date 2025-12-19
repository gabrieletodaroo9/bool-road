import { useState } from "react";

export default function FormJourney({ setData, data }) {

    // use tate per il form
    const [form, setForm] = useState({
        nazione: "",
        citta: "",
        dataInizio: "",
        dataFine: "",
        immagine: null,
    });

    //scrittura dei vai campi
    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));
    };

    //funzione che si attiva al submit del form
    const handleSubmit = (e) => {
        e.preventDefault();

        const nuovoViaggio = {
            id: Date.now(),
            meta: `${form.citta}, ${form.nazione}`,
            data_partenza: form.dataInizio,
            data_ritorno: form.dataFine,
            immagine: form.immagine,
        };

        //aggiorno l'array pre-esistente
        setData(data => [...data, nuovoViaggio]);

        console.log("Nuovo viaggio creato:", nuovoViaggio);

        // reset form
        setForm({
            nazione: "",
            citta: "",
            dataInizio: "",
            dataFine: "",
            immagine: null,
        });
    };




    return (
        <>

            <div className="d-flex justify-content-end align-items-center">
                <button
                    className="btn btn-dark"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasViaggio">
                    Aggiungi nuovo viaggio
                </button>
            </div>



            <div
                className="offcanvas offcanvas-start"
                tabIndex="-1"
                id="offcanvasViaggio"
                aria-labelledby="offcanvasViaggioLabel"
            >
                <div className="offcanvas-header border-bottom">
                    <h5 id="offcanvasViaggioLabel">Crea viaggio</h5>
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="offcanvas"
                    ></button>
                </div>

                <div className="offcanvas-body">
                    <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Nazione"
                            name="nazione"
                            value={form.nazione}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="text"
                            className="form-control"
                            placeholder="CittÃ "
                            name="citta"
                            value={form.citta}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="date"
                            className="form-control"
                            name="dataInizio"
                            value={form.dataInizio}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="date"
                            className="form-control"
                            name="dataFine"
                            value={form.dataFine}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="file"
                            className="form-control"
                            name="immagine"
                            accept="image/*"
                            onChange={handleChange}
                        />

                        <button type="submit" className="btn btn-success mt-2">
                            Crea viaggio
                        </button>
                    </form>
                </div>
            </div>


        </>
    )
}