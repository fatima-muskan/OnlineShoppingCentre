import React,{useState} from 'react'
import Layout from './../../components/Layout/Layout';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import '../../styles/authStyle.css';

const Register = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [phone,setPhone] = useState("");
    const [address,setAddress] = useState("");
    const navigate= useNavigate()

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post('/api/v1/auth/register',{name,email,password,phone,address});
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
    <Layout title="Register - Sell It Now!">
      <div className='row Login-img'>
            <div className='col-md-6'>
            <img
                    src='/images/login.png'
                    alt='Register Now'
                    style={{width:"100%"}}
                />
            </div>
            <div className='col-md-4 register-inputs'>
            
        <h1 className='bg-dark p-2 text-white text-center'>Sign Up</h1>
        <form onSubmit={handleSubmit} >
          <div className="mb-3">
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className="form-control" id="exampleInputEmail1" placeholder='Enter Name'/>
          </div>
          <div className="mb-3">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="form-control" id="exampleInputEmail1" placeholder='Enter Email'/>
          </div>
          <div className="mb-3">
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="form-control" id="exampleInputPassword1" placeholder='Enter Password'/>
          </div>
          <div className="mb-3">
            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required className="form-control" id="exampleInputEmail1" placeholder='Enter Phone'/>
          </div>
          <div className="mb-3">
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required className="form-control" id="exampleInputEmail1" placeholder='Enter Address'/>
          </div>
          <button type="submit" className="btn btn-primary submit-button">Submit</button>
        </form>
        <p>Already Have An Account? <Link to="/login">Sign In</Link></p>

        
            </div>
        </div>
        
    </Layout>
  )
}

export default Register