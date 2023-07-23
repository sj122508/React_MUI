import {Box, TextField, MenuItem} from '@mui/material';
import {useState} from 'react';

function MUISelect() {
// create state for country
const [country, setCountry] = useState('');
// create state for cities
const [cities, setCities] = useState([]);


// create handle change for cities
const handleChangeCities = (event) => {
    const value = event.target.value;
    setCities(typeof value === 'string' ? value.split(',') : value);
};


// create handle change country
const handleChange = (event) => {
    setCountry(event.target.value);
};


  return (
    <Box width='250px'>
        <TextField 
            label="Single Select country" 
            select value={country} 
            onChange={handleChange}
            fullWidth
            sx={{mb: 2}}
        >
            <MenuItem value='Indonesia'>Indonesia</MenuItem>
            <MenuItem value='Malaysia'>Malaysia</MenuItem>
            <MenuItem value='Singapore'>Singapore</MenuItem>
        </TextField>

         <TextField 
            label="Multi Select City" 
            select value={cities} 
            onChange={handleChangeCities}
            fullWidth
            SelectProps={{multiple: true}}
            size='small'
            color='secondary'
            helperText='Select multiple cities'
        >
            <MenuItem value='Indonesia'>Indonesia</MenuItem>
            <MenuItem value='Malaysia'>Malaysia</MenuItem>
            <MenuItem value='Singapore'>Singapore</MenuItem>
        </TextField>
    </Box>
  )
}

export default MUISelect