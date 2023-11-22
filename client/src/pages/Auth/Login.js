import React,{useState} from 'react'
import Layout from './../../components/Layout/Layout';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import '../../styles/authStyle.css';
import { useAuth } from '../../context/auth';


const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const [auth,setAuth]=useAuth();
    const navigate= useNavigate()

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post('/api/v1/auth/login',{email,password});
        if(res.data.success){
          toast.success(res.data.message);
          setAuth({
            ...auth,
            user: res.data.user,
            token:res.data.token,
          });
          localStorage.setItem('auth', JSON.stringify(res.data))
          navigate('/');
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
            
        <h1 className='bg-dark p-2 text-white text-center'>Log In</h1>
        <form onSubmit={handleSubmit} >
          
          <div className="mb-3">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="form-control" id="exampleInputEmail1" placeholder='Enter Email'/>
          </div>
          <div className="mb-3">
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="form-control" id="exampleInputPassword1" placeholder='Enter Password'/>
          </div>
          
          <button type="submit" className="btn btn-primary submit-button">Login</button>
        </form>
        <p>Dont Have a Account? <Link to="/register">Sign Up</Link></p>

        
            </div>
        </div>
    </Layout>
  )
}

export default Login