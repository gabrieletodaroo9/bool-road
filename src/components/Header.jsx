import { NavLink } from "react-router-dom"

export default function Header() {

    return (
        <>
            <header className="bg-dark">
                <nav className="navbar navbar-light" >
                    <div className="container">
                        <NavLink to='/'>
                            <img src={"/Boo-Road.png"} alt="" style={{ height: "90px" }} />
                        </NavLink>
                        <NavLink className='nav-link active text-white' to='/' ><span className="fw-bold fs-5">Home</span></NavLink>
                    </div>
                </nav>
            </header >
        </>
    )

}