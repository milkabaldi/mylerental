import React from 'react'
import styles from '../../style';
import images from '../../constants/images.js'

const Hero = () => {
  return (
    <section className='mt-16'> 
      <div className={`${styles.boxWidth} m-auto flex items-center`}>
        <div>
            <span className='text-base'>Car Rental</span>
            <h1 className='text-4xl'>Rent ADA Compliant Wheelchair Accessible Vehicle’s Nationwide </h1>
            <p className='text-sm'>Various ADA compliant wheelchair accessible vehicles available for rent nationwide. </p>
            <button>Inquire Now</button>
        </div>
        <figure>
          <img src={images.HeroCar} alt="Cars" />
        </figure>
      </div>

    </section>
   
  )
}

export default Hero