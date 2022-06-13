import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { ImSearch } from 'react-icons/im';
import logo from '../public/assets/eVOLTS.png'

const Nav = () => {
  const [loggedIn, setLoggedIn] = useState(true)
  const [query, setQuery] = useState('')

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`You searched for: ${query}`)
    setQuery('')
  }

  return (
    <header classNameName="py-3 mb-3 border-bottom">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom container">
        <Link href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
          <Image src={logo} alt="eVolt Logo" width={160} height={20} />
        </Link>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li className='search-container'>
            <form onSubmit={handleSearch}>
              <input type="text" placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)}/>
              <a className='search-btn' type="submit"><ImSearch/></a>
            </form>
          </li>
          <li><a href="#" className="nav-link px-2 link-secondary">Home</a></li>
          <li><a href="#" className="nav-link px-2 link-dark">Marketplace</a></li>
          <li><a href="#" className="nav-link px-2 link-dark">More</a></li>
          <li className="nav-item dropdown">
            <a className="nav-link link-dark dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDarkDropdownMenuLink">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>

        <div className="col-md-3 text-end">
        {loggedIn
          ? <div> <a className="login-botn me-2">Login</a> <a className=" end-botn">Sign-up</a></div>
          : <a className=" end-botn">Dashboard</a>
        }
          
          
        </div>
      </div>
  </header>
  )
}

export default Nav