import React,{useState,useEffect} from 'react'
import Layout from './../components/Layout/Layout';
import { useAuth } from '../context/auth';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [auth,setAuth]=useAuth()
  const [products,setProducts]=useState([])
  const [categories,setCategories]=useState([])

  // Get all Producst
  const getAllProducts=async()=>{
    try {
        const {data}=await axios.get('/api/v1/product/get-product');
        if(data?.success){
            setProducts(data.products);
        }
    } catch (error) {
        console.log(error)
        toast.error('Something went wrong');
    }
  }
  //Lifecycle method
  useEffect(()=>{
    getAllProducts()
  },[])
  return (
    <Layout title={'Best Offers'}>
        <div className='row'>
          <div className='col-md-3'>
            <h4 className='text-center'>Filter by Categories</h4>
          </div>
          <div className='col-md-9'>
            <h1 className='text-center'> All Products</h1>
            <div className="d-flex flex-wrap">
            {products?.map(p => (
                   
                    <div className="card m-2" style={{width: '17rem'}} >
                      <img src={`/api/v1/product/product-photo/${p._id}`} className="card-img-top" alt={p.name} />
                      <div className="card-body">
                        <h5 className="card-title">{p.name}</h5>
                        <p className="card-text">{p.description}</p>
                        <button className='btn btn-primary'>More Details</button>
                      </div>
                    </div>
                    

                    ))}
            </div>
          </div>
        </div>
    </Layout>
  )
}


export default HomePage