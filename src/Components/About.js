import { Button, Container } from '@mui/material'
import React, { useEffect, useState } from 'react'
import About1 from './About1'
import data from '../Data/Json'
import { useSelector } from 'react-redux'

const About = () => {
  
const {StateCount} = useSelector((state)=> state.count)

console.log(StateCount);

  return (
    <>
<h3>{StateCount}</h3>

<About1/>

    </>
  )
}

export default About

