import React from 'react'
import styles from '../../style';
import images from '../../constants/images.js'

const Hero = () => {
  return (
    <section className='mt-16'> 
      <div className={`${styles.boxWidth} m-auto flex items-center`}>
        <div className='w-2/4 flex items-start justify-between flex-col'>
            <span className='text-base mb-2 font-extrabold text-rYellow'>Car Rental</span>
            <h1 className='text-4xl mb-4 font-extrabold'>Rent ADA Compliant Wheelchair Accessible Vehicle’s Nationwide </h1>
            <p className='text-sm text-grey mb-10'>Various ADA compliant wheelchair accessible vehicles available for rent nationwide. </p>
            <button className='bg-rBlue text-secondary hover:bg-rDarkBlue'>Inquire Now Not Now</button>
        </div>
        <figure className='w-2/4'>
          <img src={images.HeroCar} alt="Best Rental" />
        </figure>
      </div>

    </section>
   
  )
}

export default Hero