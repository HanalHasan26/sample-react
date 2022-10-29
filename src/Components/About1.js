import React, { useState } from 'react'
import { TestState } from '../Context/TestProvider'
import About2 from './About2'
import axios from "axios"
import data from "../Data/Json"
import CarouselItem from './Carousel'
import { Box, Button, Container, Stack, TextField } from '@mui/material'
import { useDispatch } from 'react-redux'
import { decrement, increment } from '../Redux/Count'

const About1 = () => {

  const dispatch = useDispatch()

  return ( 
    <>
    <Box sx={{display:"flex" , justifyContent:"center"}} bgcolor={'#26a69a'} height={"200px"} >
        <Button variant='contained' color='secondary' onClick={()=>dispatch(increment(10))}>+</Button>
    </Box>
    <Box sx={{display:"flex" , justifyContent:"center"}} bgcolor={'#26a69a'} height={"200px"} >
        <Button variant='contained' color='info'  onClick={()=>dispatch(decrement(20))}>-</Button>
    </Box>
      <Box>
        
      </Box>
    </>
  )
}

export default About1
