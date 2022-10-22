import React, { useState } from 'react'
import { TestState } from '../Context/TestProvider'
import About2 from './About2'
import axios from "axios"
import data from "../Data/Json"
import CarouselItem from './Carousel'
import { Box, Button, Container, Stack, TextField } from '@mui/material'
const About1 = () => {

  // const {test,data} = TestState()

  const {setTestData} = TestState();
 


const handleChange = (value)=>{
  console.log(value);
  setTestData(value);
  localStorage.setItem("key123",JSON.stringify(value) )
}

  return ( 
    <>
    <Box sx={{display:"flex" , justifyContent:"center"}} bgcolor={'#26a69a'} height={"200px"} >
      <Container>
        <Stack mt={10} spacing={3}>
          <TextField fullWidth label="Required" onChange={(e)=>handleChange(e.target.value)}/>
        </Stack>
      </Container>
    </Box>
    </>
  )
}

export default About1
