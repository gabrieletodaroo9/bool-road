import { useState } from "react";

const DEFAULT_IMAGE = "https://community.softr.io/uploads/db9110/original/2X/7/74e6e7e382d0ff5d7773ca9a87e6f6f8817a68a6.jpeg";

export default function FormJourney({ setData, data }) {
    const [form, setForm] = useState({
        nazione: "",
        citta: "",
        dataInizio: "",
        dataFine: "",
        immagine: DEFAULT_IMAGE,
        partecipanti: [],
        accompagnatori: []
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: files ? URL.createObjectURL(files[0]) : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const nuovoViaggio = {
            id: Date.now(),
            meta: `${form.citta}, ${form.nazione}`,
            data_partenza: form.dataInizio,
            data_ritorno: form.dataFine,
            immagine: form.immagine,
            accompagnatori: [{ id: 301, nome: "Frank", cognome: "Miller" },
            { id: 302, nome: "Valentina", cognome: "Romano" }],
            partecipanti: [{ id: 1, nome: "Davide", cognome: "Gallo", codice_fiscale: "GLLDVD77B14H501P", email: "davide.gallo@gmail.com", numero: "+39 333 7788990" },
            { id: 2, nome: "Martina", cognome: "Costa", codice_fiscale: "CSTMTN89E50L736O", email: "m.costa@alice.it", numero: "+39 349 6677889" }]
        };

        setData(prevData => [nuovoViaggio, ...prevData]);

        setForm({
            nazione: "",
            citta: "",
            dataInizio: "",
            dataFine: "",
            immagine: DEFAULT_IMAGE,
            accompagnatori: [],
            partecipanti: []
        });
    };

    return (
        <><div className="d-flex justify-content-end align-items-center">
            <button className="btn btn-dark w-25 me-4 rounded-pill py-2 px-4 fw-bold"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasViaggio">
                Nuovo viaggio
            </button>
        </div>



            <div
                className="offcanvas offcanvas-end"
                tabIndex="-1"
                id="offcanvasViaggio"
                aria-labelledby="offcanvasViaggioLabel" >
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


                        <input type="text" className="form-control" placeholder="Nazione" name="nazione" value={form.nazione} onChange={handleChange} required />
                        <input type="text" className="form-control" placeholder="Città" name="citta" value={form.citta} onChange={handleChange} required />
                        <input type="date" className="form-control" name="dataInizio" value={form.dataInizio} onChange={handleChange} required />
                        <input type="date" className="form-control" name="dataFine" value={form.dataFine} onChange={handleChange} required />

                        <label className="form-label small text-muted">Cambia immagine copertina (opzionale)</label>
                        <input type="file" className="form-control" name="immagine" onChange={handleChange} accept="image/*" />

                        <button type="submit" className="btn btn-warning mt-2">Crea viaggio</button>
                    </form>
                </div>
            </div>
        </>
    );
}