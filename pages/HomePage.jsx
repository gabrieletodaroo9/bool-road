import { useState } from "react";
import database from "../data"
import { Link } from "react-router-dom";

export default function HomePage() {

    const [data, setData] = useState(database)



    return (
        <>
            <section>
                <div className="container">
                    <h1></h1>
                    <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4">
                        {
                            data.map(journey =>
                                <div key={journey.id} className="col">
                                    <Link to={`/${journey.id}`} >
                                        <div className="card rounded">
                                            <h1>{journey.meta}</h1>
                                            <p>{journey.data_partenza}</p>
                                            <p>{journey.data_ritorno}</p>
                                        </div>
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