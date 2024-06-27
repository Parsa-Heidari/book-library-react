import React from 'react'
import { NavLink } from "react-router-dom"


const NavBar = () => {
    return (
        <header style={{ height: "4.5rem", lineHeight: "4.5rem" }}>
            <div className="container h-100">
                <div className="row h-100 d-flex align-items-center">
                    <div className='col-3 d-flex align-items-center text-start'>
                        <h1 className='m-0 d-flex justify-content-center align-items-center text-start' style={{fontSize : "25px"}}>
                            Book Library
                        </h1>
                    </div>
                    <nav className='h-100 d-flex gap-4 col-6'>
                        <NavLink to="/MainPage" style={{ color: "black", textDecoration: "none", fontSize: "18px" }}>Main Page</NavLink>
                        <NavLink to="/Books" style={{ color: "black", textDecoration: "none", fontSize: "18px" }}>Books</NavLink>
                    </nav>
                    <div className='col-3 d-flex align-items-center h-75 justify-content-end'>
                        <button style={{border:"none" , background : "#f9f9f9"}} className='h-100 d-flex justify-content-center align-items-center px-4 rounded shadow-lg'>
                        <i class="bi bi-person-fill"></i> SignUp / SignIn
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default NavBar
