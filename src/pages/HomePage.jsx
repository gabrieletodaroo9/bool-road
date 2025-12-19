import { useState } from "react";
import database from "../../data"
import { Link } from "react-router-dom";
import Card from "../components/Card";

export default function HomePage() {

    const [data, setData] = useState(database)

    return (
        <>
            <section className="bg-light">
                <div className="container">
                    <h1 className="text-center my-5 pb-4 fw-bold">Viaggi in corso</h1>
                    <div className="row mb-5 g-5">
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