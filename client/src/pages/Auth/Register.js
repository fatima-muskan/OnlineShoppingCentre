import React,{useState} from 'react'
import Layout from './../../components/Layout/Layout';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import axios from 'axios';

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
        <div className='register'>
        <h1>Register Page</h1>
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
          
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>

        </div>
    </Layout>
  )
}

export default Register