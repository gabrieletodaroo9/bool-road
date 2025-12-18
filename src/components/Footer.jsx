import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <>
            <footer className="bg-dark">
                <div className="container d-flex py-5">
                    <div>
                        <h2 className="utilies text-white py-2">Utilità</h2>
                        <ul className="d-flex flex-column p-0 list-unstyled">
                            <li className="fs-5">
                                <Link className="social" to="/">Home</Link>
                            </li>
                            <li className="fs-5">
                                <Link className="social" to="/">Assistenza</Link>
                            </li>
                            <li className="fs-5">
                                <Link className="social" to="/">Guida all'accompagnatore</Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </footer>

        </>
    )
}