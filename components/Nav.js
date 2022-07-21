import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';
import { HiMenuAlt4 } from 'react-icons/hi';
import { ImSearch } from 'react-icons/im';
import logo from '../public/assets/eVOLTS.png'

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const Nav = () => {
  const [loggedIn, setLoggedIn] = useState(true)
  const [query, setQuery] = useState('')

  const [toggleMenu, setToggleMenu] = useState(false);
  const [isAuth, setIsAuth] = useState(false)


  const handleSearch = (e) => {
    e.preventDefault();
    alert(`You searched for: ${query}`)
    setQuery('')
  }

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        {/* <img src={logo} alt="logo" className="w-32 cursor-pointer " /> */}
        <span className="text-green-600 text-2xl font-extrabold">eVolt</span>
      </div>

      <ul className="text-grey-700 md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))}
        {isAuth ? (
          <>
            <li className="text-grey-700 hover:text-white py-2 px-7 ml-10 hover:rounded-full cursor-pointer hover:bg-green-700">
              Login
            </li>
            <li className="bg-green-600 text-white py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-green-700">
              Sign up
            </li>
          </>
        ) : (
          <li className="bg-green-600 text-white py-2 px-7 ml-20 rounded-full cursor-pointer hover:bg-green-700">
            Dashboard
          </li>
        )}
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-grey-500 md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[60vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2"><AiOutlineClose onClick={() => setToggleMenu(false)} /></li>
            {["Market", "Exchange", "Tutorials", "Wallets"].map(
              (item, index) => <NavBarItem key={item + index} title={item} classprops="my-2 text-lg" />,
            )}
            {!isAuth ? (
              <>
                <li className="bg-green-500 text-white py-2 px-7 m-4 rounded-full cursor-pointer hover:bg-green-700">
                  Login
                </li>
                <li className="bg-green-500 text-white py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-green-700">
                  Sign up
                </li>
              </>
            ) : (
              <li className="bg-green-500 text-white font-bold py-2 px-7 m-4 rounded-full cursor-pointer hover:bg-green-700">
                Dashboard
              </li>
            )}
          </ul>
        )}
      </div>
    </nav>
    // <header classNameName="py-3 mb-3 border-bottom">
    //   <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom container">
    //     <Link href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
    //       <Image src={logo} alt="eVolt Logo" width={160} height={20} />
    //     </Link>

    //     <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
    //       <li className='search-container'>
    //         <form onSubmit={handleSearch}>
    //           <input type="text" placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)}/>
    //           <a className='search-btn' type="submit"><ImSearch/></a>
    //         </form>
    //       </li>
    //       <li><a href="#" className="nav-link px-2 link-secondary">Home</a></li>
    //       <li><a href="#" className="nav-link px-2 link-dark">Marketplace</a></li>
    //       <li><a href="#" className="nav-link px-2 link-dark">More</a></li>
    //       <li className="nav-item dropdown">
    //         <a className="nav-link link-dark dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    //           Dropdown
    //         </a>
    //         <ul className="dropdown-menu" aria-labelledby="navbarDarkDropdownMenuLink">
    //           <li><a className="dropdown-item" href="#">Action</a></li>
    //           <li><a className="dropdown-item" href="#">Another action</a></li>
    //           <li><a className="dropdown-item" href="#">Something else here</a></li>
    //         </ul>
    //       </li>
    //     </ul>

    //     <div className="col-md-3 text-end">
    //       {loggedIn
    //         ? <div> <a className="login-botn me-2">Login</a> <a className=" end-botn">Sign-up</a></div>
    //         : <a className=" end-botn">Dashboard</a>
    //       }
    //     </div>
    //   </div>
    // </header>
  )
}

export default Nav