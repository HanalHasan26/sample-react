import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../Redux/Api';

const Dummydata = () => {

    const {products,car} = useSelector((state)=> state.api)

    const dispatch = useDispatch();


    useEffect(()=>{
        dispatch(getProducts())
    },[])


  return (
    <>
      {products.map((val)=>(
        <h3>{val.title}</h3>
      ))}
    </>
  )
}

export default Dummydata
