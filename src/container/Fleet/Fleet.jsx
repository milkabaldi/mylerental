import React from 'react'
import styles from '../../style';
import images from '../../constants/images.js'


const Fleet = () => {
    return (
      <section className='mb-32 mt-32'>
        <div className={`${styles.boxWidth} m-auto flex flex-col items-center justify-between text-center`}>
            <h2 className='text-4xl mb-6'>Fleet Inventory 111</h2>
            <p className='text-sm'>We offer ADA compliant wheelchair accessible vehicles with different builds to accommodate groups of various sizes. Our fleet includes the Chrysler Pacifica and Toyota SiennaTravel with ease and comfort!</p>
            <div className='mt-10'>
              <img src={images.CarSlider} alt="Cars" />
            </div>
        </div>
      </section>
    )
  }
  
  export default Fleet
