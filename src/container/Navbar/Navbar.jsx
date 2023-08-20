import React from 'react'

const Navbar = () => {
  return (
    <header className='flex'>
      <div>
      <div>
        <img src="" alt="Logo" />
      </div>
      <nav>
        <ul className='flex'>
          <li><a href='#'>Industries</a></li>
          <li><a href='#'>Technology</a></li>
          <li><a href='#'>Driver weith Myle</a></li>
          <li><a href='#'>Blog</a></li>
          <li><a href='#'>Contact</a></li>
        </ul>
      </nav>
      <div>
        <div>
          Search
        </div>
        <button>Contact Sales</button>
      </div>
      </div>  
    </header>
  )
}

export default Navbar;