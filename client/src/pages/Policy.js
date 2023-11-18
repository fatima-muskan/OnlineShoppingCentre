import React from 'react'
import Layout from './../components/Layout/Layout';
import {BiMailSend, BiPhoneCall} from 'react-icons/bi';

const Policy = () => {
  return (
    <Layout title={'Privacy Policy'}>
        <div className='row contactus'>
            <div className='col-md-6'>
                <img
                    src='/images/contactus.jpg'
                    alt='contactus'
                    style={{width:"100%"}}
                />
            </div>
            <div className='col-md-4 contact-text'>
                <h1 className='bg-dark p-2 text-white text-center'>Privacy Policy</h1>
                <p className='text-justify mt-2'>
                    Any query and information about product, feel free to contact we 24x7 available.
                </p>
                <p className='mt-3'>
                    <BiMailSend/> : mukarramali623@gmail.com
                </p>
                <p className='mt-3'>
                    <BiPhoneCall/> : +92 323 5971225
                </p>
                
            </div>
        </div>
    </Layout>
  )
}

export default Policy