import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Manu = () => {
  return (
    <div className="col-2 bg-light p-0 h-100">
      <div className="d-flex flex-column flex-shrink-0 text-bg-dark h-100">
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="#" className="nav-link text-white" aria-current="page">
              <svg className="bi pe-none me-2" width="16" height="16"></svg>
              Home
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              <svg className="bi pe-none me-2" width="16" height="16"></svg>
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              <svg className="bi pe-none me-2" width="16" height="16"></svg>
              Orders
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              <svg className="bi pe-none me-2" width="16" height="16"></svg>
              Products
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
              <svg className="bi pe-none me-2" width="16" height="16"></svg>
              Customers
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Manu
