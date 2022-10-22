import React from 'react'
import { TestState } from '../Context/TestProvider'
import { Box, Card, CardActions, CardContent, IconButton, TextField, Typography } from '@mui/material';
import cars from '../api/cars.json'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router';
const About2 = () => {

    const {test,data} = TestState()
    const navigate = useNavigate()


    const handleClickLeft =()=>{

      const left = document.querySelector(".stack")
  
      left.scrollBy(350, 0)
  
  }
  const handleClickRight =()=>{
  
      const left = document.querySelector(".stack")
  
      left.scrollBy(-350, 0)
  
  }

  return (
    <>  
    <div className='stack' style={{display:"flex" ,
    backgroundColor:"#ebeeef",
    maxHeight:"390px",
    borderRadius:"4px",
    overflowX:"auto",
    marginTop:"100px"
    }}>
{cars.map((val)=>(

            <Card  sx={{ minWidth: 275 , marginLeft:"10px"}}>

      <CardContent sx={{display:'flex'}}>
        <Typography sx={{fontSize:"20px"}}>
          {val.modelName}
        </Typography>
      </CardContent>
      
      <CardContent>
        <Box>
          <img style={{width:"250px", height:"220px"}} src={`${val.imageUrl}`}/>
        </Box>
      </CardContent>
      <CardActions>
        <IconButton color='primary' size="small" onClick={()=>{
          navigate(`/details/${val.id}`)
        }}>Learn More <ArrowForwardIcon/> </IconButton>
        <IconButton color='primary' size="small" onClick={()=>{
          navigate(`/details/${val.id}`)
        }}>Shop <ArrowForwardIcon/> </IconButton>
      </CardActions>
    </Card>
   
))}


    </div>
<Box>
  <IconButton  aria-label="delete" size="small" onClick={()=>{
    handleClickRight()
  }}>
<ArrowBackIcon/>
</IconButton>
  <IconButton  aria-label="delete" size="small" onClick={()=>{
    handleClickLeft()
  }}>
<ArrowForwardIcon/>
</IconButton>
</Box>
     </>
  )
}

export default About2
