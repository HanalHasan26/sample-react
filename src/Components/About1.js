import React, { useState } from 'react'
import { TestState } from '../Context/TestProvider'
import About2 from './About2'
import axios from "axios"
import data from "../Data/Json"
import CarouselItem from './Carousel'
const About1 = () => {

  // const {test,data} = TestState()

  const [testData, setTestData] =useState([])

// const datas =async()=>{
// const {data} = await axios.get("https://dummyjson.com/products")
// console.log(data.products);
// setTestData(data.products)
// }

// datas()

  return (
    <div style={{display:"flex" , justifyContent:"center"}}>
      <div style={{backgroundColor:"yellow",width:"400px",height:"400px",marginTop:"45px"}}>

{data.map((val)=>(


  <h3>{val.title}</h3>



))}


      </div>  
    </div>
  )
}

export default About1
