import React from 'react'
import styles from '../../style';
import images from '../../constants/images.js'

const About = () => {
  return (
    <section>
      <div className={`${styles.boxWidth} m-auto flex flex-col items-center justify-between text-center pt-10 pb-10 bg-secondary`}>
          <h2 className='text-4xl mb-6'>About Us</h2>
          <p className='text-sm'>Being an industry leader, we have recognized the difficulties encountered by our private use clients nationwide in need of a wheelchair accessible vehicle rental. We set out to provide comfortable, reliable options for you, your family, and your travel needs. We help alleviate those stresses with our wide range of ADA compliant vehicles and unique rental options.
          </p>
      </div>
    </section>
  )
}

export default About