import React from 'react';

const Navbar = () => {
  return (
    <div className='bg-base-100 shadow-sm'>
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li><a href="#">Home</a></li>
              <li><a href="#">Product</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <input type="text" name="" placeholder='Search' id="" className='border px-2 py-1' />
            </ul>
          </div>
          <a className="w-[120px] cursor-pointer">
            <img src="./src/assets/logo.png" alt="logo.png" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className='w-[400px]'>
            <input type="text" name="" placeholder='Search' id="" className='border px-4 py-1 w-full rounded-2xl font-poppins' />
          </div>
        </div>
        <div className="navbar-end font-poppins">
          <ul className='hidden md:flex gap-5'>
            <li><a href="#">Home</a></li>
            <li><a href="#">Product</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;