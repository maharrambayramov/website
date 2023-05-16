import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ProductsAdd } from '../Schema/ProductsAdd';
import "../css/Main.css"
const ProductsPost = () => {
  const [data,setData] =useState([])

  const { register, handleSubmit, getValues } = useForm({
    resolver: yupResolver(ProductsAdd),
  });

  const getData = async() => {
    const res = await axios.get("https://api.instantwebtools.net/v1/airlines")
    setData(res.data)
  }

    const onSubmit = async() => {
      const values = getValues();
      console.log(values);
      axios.post("https://api.instantwebtools.net/v1/airlines", {
        name: values.name,
        logo: values.logo,
        website: values.website
      })
    }
  useEffect(() =>{
    getData()
  }, [])
  return (
    <div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="">Airlines Name</label>
        <input type="text" {...register("name")}/>
        <label htmlFor="">Logo</label>
        <input type="text" {...register("logo")}/>
        <label htmlFor="">WebSite</label>
        <input type="text" {...register("website")}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default ProductsPost