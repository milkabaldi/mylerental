import React from 'react'

const Navbar = () => {
  return (
    <header className='flex'>
      <div>
        <img src="" alt="Logo" />
      </div>
      <nav>
        <ul className='flex'>
          <li>Industries</li>
          <li>Technology</li>
          <li>Driver weith Myle</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div>
        <div>
          Search
        </div>
        <button>Contact Sales</button>
      </div>
    </header>
  )
}

export default Navbar;