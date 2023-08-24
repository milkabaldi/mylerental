import React from 'react'
import styles from '../../style';


const Navbar = () => {
  return (
    <header className={`${styles.flexStart} pt-9`} >
      <div className={`${styles.boxWidth} flex justify-between items-center bg-grey py-2.5 px-3`}>
      
      <nav className='flex '>
      <div>
        <a href="#">
        <img src="" alt="Logo" />
        </a>
       
      </div>
        <ul className='flex items-center gap-5 px-8'>
          <li><a href='#'>Industries</a></li>
          <li><a href='#'>Technology</a></li>
          <li><a href='#'>Driver weith Myle</a></li>
          <li><a href='#'>Blog</a></li>
          <li><a href='#'>Contact</a></li>
        </ul>
      </nav>
      <div className='flex gap-6 items-center'>
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