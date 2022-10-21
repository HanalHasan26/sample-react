import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import cars from '../api/cars.json'
// import datas from '../Data/example_1.json'
const Deatails = () => {
    const carsId = useParams()

    console.log(carsId.data); 
      const data = cars.find((val)=> val.id)

  return (
    <Box display={'flex'} justifyContent='center'>

   <Box width={'500px'} height={"500px"} bgcolor={"whitesmoke"} marginTop="100px">
<h3>{data.modelName}</h3>
    <img style={{width:"400px", height:"400px"}} src={`${data.imageUrl}`} />
   </Box>
    </Box> 
  )
}

export default Deatails
