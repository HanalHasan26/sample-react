import React, { useState } from 'react';
import './Carousel.css'
import datas from '../Data/example_1.json'
import { useNavigate } from 'react-router';

const CarouselItem = () => {

const handleClickLeft =()=>{

    const left = document.querySelector(".stack")

    left.scrollBy(350, 0)

}
const handleClickRight =()=>{

    const left = document.querySelector(".stack")

    left.scrollBy(-350, 0)

}

const navigate = useNavigate()


  return (
    <>
        <div className='stack'>
            {datas.map((val)=>(
            <div className='card' onClick={()=>{
                navigate(`/datasDetails/${val.id}`)
            }} >
                <h3 style={{marginTop:"100px"}}>{val.Name}</h3>
            </div>
            ))}
        </div>


        <button onClick={()=>{
            handleClickRight()
        }}>Right</button>
        <button onClick={()=>{
            handleClickLeft()
        }}>Left</button>


    </>
  )
}

export default CarouselItem
