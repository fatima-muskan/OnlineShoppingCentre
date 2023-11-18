import React from 'react'
import Layout from './../components/Layout/Layout';

const About = () => {
  return (
    <Layout title={"About us"}>
        <div className='row contactus'>
            <div className='col-md-6'>
                <img
                    src='/images/aboutus.png'
                    alt='contactus'
                    style={{width:"100%"}}
                />
            </div>
            <div className='col-md-4 contact-text'>
                <h1 className='bg-dark p-2 text-white text-center'>About US</h1>
                <p className='text-justify mt-2'>
                Welcome to Sell It Now, Established in 2023, we're passionate about delivering
                 top-quality products. We have the 
                 dedicated team, committed to exceeding your expectations. Explore our customer 
                 testimonials, a testament to our commitment to excellence. Thank you for choosing 
                 Us—where quality meets convenience. Feel free to reach out for inquiries or support. 
                 Happy shopping!
                </p>
                
                
            </div>
        </div>
    </Layout>
  )
}

export default About