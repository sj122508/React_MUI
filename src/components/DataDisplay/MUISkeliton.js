import React, {useState, useEffect} from 'react'
import { Stack , Skeleton, Box, Avatar, Typography} from '@mui/material'

function MUISkeliton() {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 5000)
    }, [])
  return (
    <>
        <Stack spacing={1} width='250px'>
                <Skeleton variant="text" animation='wave'/>    
                <Skeleton variant="circular" height={40} width={40} animation='wave'/>
                <Skeleton variant="rectangular" height={125} width={250} animation='wave'/>        
        </Stack>

        <Box sx={{ width: '250px'}}>
            {loading ? (
                <Skeleton variant="rectangular" height={125} width={250} animation='wave'/> ) : 
                (<img src="https://source.unsplash.com/random" alt="random" width='250px' height='125px' />)}
        </Box>

        <Stack spacing={1} direction= 'row' sx={{width: '100%', marginTop: '12px'}}>
                {loading ? (
                <Skeleton variant="circular" height={40} width={40} animation='wave'/> ) : 
                (<Avatar>V</Avatar>)}  

                <Stack  sx={{width: '80%'}}>
                {loading ? <>
                    <Typography variant='body1'>
                        <Skeleton variant="text" width='100%' animation='wave'/>
                    </Typography>
                    <Typography variant='body2'>
                        <Skeleton variant="text" width='100%' animation='wave'/>
                    </Typography>
                </> : <>
                    <Typography variant='body1'>
                        React Tutorial MUI
                    </Typography>
                </>}  
        </Stack>
        </Stack>

        
    </>
  )
}

export default MUISkeliton