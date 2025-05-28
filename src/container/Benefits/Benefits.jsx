import React from 'react'
import styles from '../../style';
import images from '../../constants/images.js'



const Benefits = () => {
  return (
    <section className='mb-32 mt-32'>
        <div className={`${styles.boxWidth} m-auto flex flex-col items-center justify-between text-center`}>
            <div>
                <div className='ben'>
                    <h3>Convenience</h3>
                    <ul>
                        <li>Curb side and airport deliveries available </li>
                        <li>Unlimited daily mileage </li>
                        <li>Foldable wheelchairs available</li>
                        <li>Car seats available for you and your friends</li>
                    </ul>
                </div>
                <div className='benImg'>
                    <img src={images.benCarOne} alt="Ca" />
                </div>
            </div>
        </div>
      </section>
  )
}

export default Benefits
