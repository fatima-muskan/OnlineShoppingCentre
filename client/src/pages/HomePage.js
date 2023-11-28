import React,{useState,useEffect} from 'react'
import Layout from './../components/Layout/Layout';
import axios from 'axios';
import toast from 'react-hot-toast';
import {Button, Checkbox,Radio} from 'antd';
import { Prices } from '../components/Prices';
const HomePage = () => {
  
  const [products,setProducts]=useState([])
  const [categories,setCategories]=useState([])
  const [checked, setChecked]=useState([])
  const [radio, setRadio]=useState([])

  // Get all categories
  const getAllCategory = async() => {
    try {
      const {data}=await axios.get('/api/v1/category/get-category');
      if(data?.success){
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getAllCategory();
  },[]);

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

  // Filter by Categories
  const handleFilter=(value,id)=>{
    let all=[...checked]
    if(value){
      all.push(id)
    }
    else{
      all=all.filter((c)=>c!== id);
    }
    setChecked(all)
  }

  //Lifecycle method
  useEffect(()=>{
    if(!checked.length || !radio.length) getAllProducts();
    //eslint-disable-next-line
  },[checked.length,radio.length]);

  useEffect(()=>{
    if(checked.length || radio.length) filterProducts();
  },[checked,radio]);


  // Get Filtered Products
  const filterProducts=async()=>{
    try {
        const {data}=await axios.post('/api/v1/product/product-filters',{checked,radio,});
        
        setProducts(data?.products);
        
    } catch (error) {
        console.log(error)
        toast.error('Something went wrong');
    }
  }
  return (
    <Layout title={'Best Offers'}>
        <div className='container-fluid row mt-3'>
          <div className='col-md-2'>
            <h4 className='text-center'>Filter by Categories</h4>
            <div className='d-flex flex-column'>

            {
              categories?.map((c) =>(
                <Checkbox key={c._id} onChange={(e) => handleFilter(e.target.checked,c._id)}>
                  {c.name}
                </Checkbox>
              ))
            }
            </div>
            
            <h4 className='text-center mt-4'>Filter by Price</h4>
            <div className='d-flex flex-column'>
              <Radio.Group onChange={e=>setRadio(e.target.value)}>
                {Prices?.map(p=>(
                  <div key={p._id}>

                  <Radio value={p.array}>{p.name}</Radio>
                  </div>
                ))}
              </Radio.Group>
            </div>
            <div className='d-flex flex-column'>
              <Button className='btn btn-danger' onClick={()=> window.location.reload()}>Reset Filters</Button>
            </div>
          </div>
          <div className='col-md-9'>
            <h1 className='text-center'> All Products</h1>
            <div className="d-flex flex-wrap">
            {products?.map(p => (
                   
                    <div className="card m-2" style={{width: '17rem'}} >
                      <img src={`/api/v1/product/product-photo/${p._id}`} className="card-img-top" alt={p.name} />
                      <div className="card-body">
                        <h5 className="card-title">{p.name}</h5>
                        <p className="card-text">{p.description.substring(0,40)}</p>
                        <p className="card-text">PKR {p.price}</p>
                        <button className='btn btn-primary ms-1'>More Details</button>
                        <button className='btn btn-secondary ms-1'>Add to Cart</button>
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