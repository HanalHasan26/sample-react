import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import datas from '../Data/example_1.json'

const DatasDetails = () => {

    const dataId = useParams()
    console.log(dataId.id); 

      const data = datas.find((val)=> val.id === parseInt(dataId.id))
      

  return (
    <div>
        <Box bgcolor={'whitesmoke'}>

<Typography>{data.Name}</Typography>
      
        </Box>
    </div>
  )
}

export default DatasDetails
