import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top bg-danger">
        <div className="col-md-3 d-flex align-items-center">
          <Link Link="/" className="mb-3 me-2 mb-md-0 text-body  text-decoration-none lh-1">

          </Link>
          <span className="text-white ">© 2023 GoFood, Inc</span>

        </div>
      </footer>
    </div>
  )
}
