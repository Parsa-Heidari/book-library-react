import React from 'react'
import { getBooks } from "../Data/Data"
import { NavLink, Outlet, useSearchParams } from 'react-router-dom'

const Books = () => {
  let [searchParams, setSearchParams] = useSearchParams()
  let books = getBooks()

  return (
    <div>
      <div>
        <div className="container">
          <div className="row">
            <h3 className='col-3'>search for books</h3>
            <input className='col-4 rounded shadow-lg border-none' type='text' placeholder='Search' onChange={
              (e) => {
                let filter = e.target.value
                if (filter) {
                  setSearchParams({ filter })
                }
                else {
                  setSearchParams({})
                }
              }
            } value={searchParams.get("filter")} />
          </div>
        </div>

        <Outlet />


        <div className='list my-5'>
          <div className="container">
            <div className="row gy-4">
              {
                books.filter(book => {
                  let filter = searchParams.get("filter")
                  if (!filter) return true
                  let name = book.name
                  return name.includes(filter)
                })
                  .map(book => (

                    <div className="col-4">
                      <div className="rounded shadow-lg p-4 h-100" style={{ backgroundColor: "#f9f9f9" }}>
                        <figure className='w-100 overflow-hidden rounded shadow-sm'>
                          <img src={book.img} alt='book' className='w-100' />
                        </figure>
                        <div className='desc'>
                          <h4>{book.name}</h4>
                          <span style={{ fontWeight: "bold" }}>{book.price}$</span>
                          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, reiciendis!</p>
                        </div>
                        <NavLink to={book.id} key={book.id} className="btn btn-primary px-5">Buy</NavLink>
                      </div>
                    </div>
                  ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Books
