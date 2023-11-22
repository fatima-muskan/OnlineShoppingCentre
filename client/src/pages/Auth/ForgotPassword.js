import React,{useState} from 'react'
import Layout from './../../components/Layout/Layout';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import '../../styles/authStyle.css';

const ForgotPassword = () => {
    const [email,setEmail] = useState("");
    const [newPassword,setNewPassword] = useState("");
    const [answer,setAnswer] = useState("");

   
    const navigate= useNavigate()

    const handleSubmit = async (e) => {
      e.preventDefault();
      
      try {
        const res = await axios.post('/api/v1/auth/forgot-password',{email,newPassword,answer});
        if(res.data.success){
          toast.success(res.data.message);
          
          navigate('/login');
        }else{
          toast.error(res.data.message);
        }
      } catch (error) {
        console.log(error);
        toast.error('Something Went wrong');
      }
    };

  return (
    <Layout title={'Forgot Password - Sell It Now'}>
        <div className='row Login-img'>
            <div className='col-md-6'>
            <img
                    src='/images/login.png'
                    alt='Register Now'
                    style={{width:"100%"}}
                />
            </div>
            <div className='col-md-4 register-inputs'>
            
        <h1 className='bg-dark p-2 text-white text-center'>Reset Password</h1>
        <form onSubmit={handleSubmit} >
          
          <div className="mb-3">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="form-control" id="exampleInputEmail1" placeholder='Enter Email'/>
          </div>
          <div className="mb-3">
            <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} required className="form-control" id="exampleInputEmail1" placeholder='Enter your Secret Answer'/>
          </div>
          <div className="mb-3">
            <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required className="form-control" id="exampleInputPassword1" placeholder='Enter New Password'/>
          </div>
          <div className='mb-3'>
          <button type="submit" className="btn btn-primary submit-button">Update Password</button>
          </div>
          
        </form>
        
        
            </div>
        </div>
    </Layout>
  )
}

export default ForgotPassword