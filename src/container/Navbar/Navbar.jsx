import React from 'react'
import styles from '../../style';


const Navbar = () => {
  return (
    <header className={`${styles.flexStart}`} >
      <div className={`${styles.boxWidth}`}>
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