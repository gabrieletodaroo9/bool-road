// import { useState } from "react";
// import database from "../../data"
import { Link } from "react-router-dom";
import Card from "../components/Card";
import FormJourney from "../components/FormJourney";

export default function HomePage({ data, setData }) {

    // const [data, setData] = useState(database)

    return (
        <>
            <section className="bg-light">
                <div className="container">
                    <h1 className="text-center py-5 fw-bold">Viaggi in corso</h1>
                    <FormJourney setData={setData} data={data} />
                    <div className="row my-5 mb-5 g-5">
                        {
                            data.map(journey =>
                                <div key={journey.id} className="col-12 col-md-6 mt-3 px-5">
                                    <Link to={`/${journey.id}`} >
                                        <Card journey={journey} />
                                    </Link>
                                </div>
                            )
                        }
                    </div>
                </div>
            </section>
        </>
    )
}