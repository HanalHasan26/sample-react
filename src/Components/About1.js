import React, { useState } from 'react'
import { TestState } from '../Context/TestProvider'
import About2 from './About2'
import axios from "axios"
import data from "../Data/Json"
import CarouselItem from './Carousel'
import { Box, Button, Container, Stack, TextField } from '@mui/material'

const About1 = () => {


  return ( 
    <>
    <Box sx={{display:"flex" , justifyContent:"center"}} bgcolor={'#26a69a'} height={"200px"} >
        <Button variant='contained' color='secondary'>+</Button>
    </Box>
    <Box sx={{display:"flex" , justifyContent:"center"}} bgcolor={'#26a69a'} height={"200px"} >
        <Button variant='contained' color='info'>-</Button>
    </Box>
      <Box>
        
      </Box>
    </>
  )
}

export default About1
