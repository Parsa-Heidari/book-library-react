import React from 'react'
import { useParams , Link } from 'react-router-dom'
import { getBook } from "../Data/Data"


const Book = () => {
    let params = useParams()
    let book = getBook(params.bookId)
    if (book) {
        return (
            <div style={{ height: "70vh", padding: "10vh 0" }}>
                <div className="container">
                    <div className="row gx-5">
                        <figure className='col-5 h-100 overflow-hidden rounded '>
                            <img src={book.img} alt="" className='w-100 h-100 rounded object-fit-cover ' />
                        </figure>
                        <div className='col-7 position-relative'>
                            <h3> {book.name} </h3>
                            <h4>author :  {book.author} </h4>
                            <h3> {book.price}$ </h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque velit consequatur quos voluptas cum quo laudantium eveniet maxime molestiae corporis.</p>
                            <button className='btn btn-primary'>Add To Cart <i class="bi bi-bag-fill"></i></button>
                            <Link to={".."} className='position-absolute rounded px-3' style={{right : 0 , top : 0 , background: "red" , color : "white", padding : "0.5rem" , }} >X</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <h3>
                Book Not Found
            </h3>
        )
    }



}

export default Book
