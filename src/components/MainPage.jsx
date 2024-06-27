import React from 'react'
import {Link} from "react-router-dom"
import MainImage from "../assets/Book.png"

const MainPage = () => {
  return (
    <section style={{height : "90vh" , padding : "10vh 0"}}>
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-6 text-start h-100 d-flex flex-column gap-4">
            <h2 style={{fontSize : "60px"}} >Find the best books for yourselft</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eaque deserunt officia natus quidem perferendis.</p>
            <Link to="/Books" style={{color : "black" , background : "#f9f9f9"}} className='rounded shadow-lg px-4 py-3 col-3'>Start Browsing </Link>
          </div>
          <div className='col-6 h-100'>
            <img src={MainImage} alt="Book Library" className='w-100 h-100 object-fit-contain' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainPage
