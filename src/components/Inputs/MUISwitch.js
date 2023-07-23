import {useState} from 'react';
import {Box, FormControlLabel, Switch} from '@mui/material';

function MUISwitch() {
    // create state for switch value
    const [darkMode, setDarkMode] = useState(false);

    // create handle change for switch
    const handleChange = (event) => {
        console.log(event.target.checked, 'event.target.checked')
        setDarkMode(event.target.checked);
    };

  return (
    <Box>
        <FormControlLabel 
            label='Dark mode' 
            control={
                <Switch  checked={darkMode} onChange={handleChange}/>}   
        />

        <FormControlLabel 
            label='Dark mode' 
            control={
                <Switch disabled/>}   
        />

        <FormControlLabel 
            label='Size and Color' 
            control={
                <Switch size='small' color='success' checked={darkMode} onChange={handleChange}/>}  
        />
    </Box>
  )
}

export default MUISwitch