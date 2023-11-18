import React from 'react'
import Layout from './../../components/Layout/Layout';
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <Layout title="Register - Sell It Now!">
        <div className="wireframe">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="rectangle" />
          <Link className="text-wrapper" to="/about">About</Link>
          <Link className="div" to="/policy">Privacy</Link>
          <Link className="text-wrapper-2" to="/policy">Terms of Use</Link>
          <Link className="text-wrapper-3" to="/policy">FAQ.</Link>
          
          <div className="ellipse" />
          <div className="ellipse-2" />
          <div className="ellipse-3" />
          <div className="text-wrapper-4">Sell It Now!.</div>
          <div className="ellipse-4" />
          <div className="rectangle-2" />
          <div className="rectangle-3" />
          <div className="rectangle-4" />
          <div className="rectangle-5" />
          <div className="ellipse-5" />
          <div className="rectangle-6" />
          <div className="text-wrapper-5">Log in</div>
          <img className="line" alt="Line" src="line-1.svg" />
          <div className="text-wrapper-6">Email</div>
          <img className="img" alt="Line" src="line-2.svg" />
          <div className="text-wrapper-7">Password</div>
          <div className="text-wrapper-8">Keep me Logged in</div>
          <div className="text-wrapper-9">Dont have an account?</div>
          <div className="rectangle-7" />
          <Link className="text-wrapper-10" to="/policy">Log In</Link>
          <Link className="text-wrapper-11" to="/policy">Sign Up</Link>
        </div>
      </div>
    </div>
    </Layout>
  )
}

export default Register