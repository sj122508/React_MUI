import { useState } from 'react';
import {
    Box, 
    FormControl, 
    FormLabel, 
    FormControlLabel, 
    RadioGroup, 
    Radio, 
    Typography,
    FormHelperText
} from '@mui/material';

function MUIRadioButton() {
// create state for job expirience
const [jobExpirience, setJobExpirience] = useState('');

// create handle change for job expirience
const handleChange = (event) => {
    console.log(event.target.value, 'event.target.value')
    setJobExpirience(event.target.value);
};



  return (
    <Box>
        <Typography variant="h6" color='#616161'>Radio Button Vertical</Typography>
        <FormControl component='fieldset'>
            <FormLabel id='job-expirience-group-label'>
                Years of experience
            </FormLabel>
            <RadioGroup 
                name='job-expirience-group' 
                aria-labelledby='job-expirience-group-label'
                value={jobExpirience}
                onChange={handleChange}
            >
                <FormControlLabel 
                    value='0-2' 
                    control={<Radio />} 
                    label='0-2' 
                />
                 <FormControlLabel 
                    value='3-5' 
                    control={<Radio />} 
                    label='3-5' 
                />
                 <FormControlLabel 
                    value='6-10' 
                    control={<Radio />} 
                    label='6-10' 
                />
            </RadioGroup>
        </FormControl>

        <Typography variant="h6" color='#616161'>Radio Button Horizontal</Typography>
        <FormControl component='fieldset'>
            <FormLabel id='job-expirience-group-label'>
                Years of experience
            </FormLabel>
            <RadioGroup 
                name='job-expirience-group' 
                aria-labelledby='job-expirience-group-label'
                value={jobExpirience}
                onChange={handleChange}
                row
            >
                <FormControlLabel 
                    value='0-2' 
                    control={<Radio size='small' color='secondary'/>} 
                    label='0-2' 
                />
                 <FormControlLabel 
                    value='3-5' 
                    control={<Radio size='small' color='secondary'/>} 
                    label='3-5' 
                />
                 <FormControlLabel 
                    value='6-10' 
                    control={<Radio size='small' color='secondary'/>} 
                    label='6-10' 
                />
            </RadioGroup>
        </FormControl>

        <Typography variant="h6" color='#616161'>Radio Button With Error</Typography>
        <FormControl component='fieldset' error>
            <FormLabel id='job-expirience-group-label'>
                Years of experience
            </FormLabel>
            <RadioGroup 
                name='job-expirience-group' 
                aria-labelledby='job-expirience-group-label'
                value={jobExpirience}
                onChange={handleChange}
                row
            >
                <FormControlLabel 
                    value='0-2' 
                    control={<Radio size='small' color='secondary'/>} 
                    label='0-2' 
                />
                 <FormControlLabel 
                    value='3-5' 
                    control={<Radio size='small' color='secondary'/>} 
                    label='3-5' 
                />
                 <FormControlLabel 
                    value='6-10' 
                    control={<Radio size='small' color='secondary'/>} 
                    label='6-10' 
                />
            </RadioGroup>
            <FormHelperText>Some important helper text</FormHelperText>
        </FormControl>
    </Box>
  )
}

export default MUIRadioButton