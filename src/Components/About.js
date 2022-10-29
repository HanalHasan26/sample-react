import { Button, Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import About1 from './About1'
import data from '../Data/Json'
import { useSelector } from 'react-redux'

const About = () => {
  
const {StateCount} = useSelector((state)=> state.count)


  return (
    <>
    <div style={{display:"flex", justifyContent:"center"}}>
<h3>{StateCount}</h3>
    </div>

<About1/>



    </>
  )
}

export default About

