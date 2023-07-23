import {useState} from 'react'
import {Stack, TextField, Typography, InputAdornment} from '@mui/material';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

function MUITextField() {
    // create state for value
    const [value, setValue] = useState('');

    // create handle change value
    const handleChange = (event) => {
        setValue(event.target.value);
    };

  return (
    <div>
        <Stack spacing={4} >
            <Typography variant="h6" color='#616161'>TextField variant</Typography>
            <Stack spacing={2} direction='row'>
                <TextField label="Standard" variant="standard" />
                <TextField label="Filled" variant="filled" />
                {/* default */}
                <TextField label="Outlined" variant="outlined" /> 
            </Stack>
            
        <Typography variant="h6" color='#616161'>TextField size</Typography>
            <Stack spacing={2} direction='row'>
                <TextField label="Small" variant="outlined" color='secondary' size='small'/> 
                <TextField label="Medium" variant="outlined" color='success' size='medium'/> 
                <TextField label="Large" variant="outlined" color='warning' size='large'/> 
            </Stack>

        <Typography variant="h6" color='#616161'>TextField other props</Typography>
            <Stack spacing={2} direction='row'>
                <TextField 
                    label="Small" 
                    variant="outlined" 
                    color='secondary' 
                    size='small' 
                    required
                /> 
                <TextField 
                    label="Helper text" 
                    variant="outlined" 
                    color='secondary' 
                    size='small' 
                    required
                    helperText='Helper text'
                /> 
                <TextField 
                    type={'password'}
                    label="Password text" 
                    variant="outlined" 
                    color='secondary' 
                    size='small' 
                    required
                    helperText='Password'
                /> 

                <TextField 
                    type={'password'}
                    label="Disabled text" 
                    variant="outlined" 
                    color='secondary' 
                    size='small' 
                    disabled // default false
                /> 

                <TextField 
                    label="Read only text" 
                    variant="outlined" 
                    color='secondary' 
                    size='small' 
                    InputProps={{
                        readOnly: true,
                    }}
                /> 
                
            </Stack>


        <Typography variant="h6" color='#616161'>TextField with adornment</Typography>
            <Stack spacing={2} direction='row'>
                <TextField 
                    label="Amount" 
                    variant="outlined" 
                    color='error' 
                    size='small' 
                    InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                    }}
                /> 
                <TextField 
                    label="Weight" 
                    variant="outlined" 
                    color='secondary' 
                    size='small' 
                    InputProps={{
                        endAdornment: <InputAdornment position="end">kg</InputAdornment>,
                    }}
                />       

                <TextField 
                    label="Weight" 
                    variant="outlined" 
                    color='secondary' 
                    size='small' 
                    InputProps={{
                        endAdornment: <InputAdornment position="end">
                            <MonetizationOnIcon color='secondary'/>
                        </InputAdornment>,
                    }}
                />              
            </Stack>

        <Typography variant="h6" color='#616161'>TextField with adornment</Typography>
            <Stack spacing={2} direction='row'>
                <TextField 
                    label="Form input"
                    required
                    value={value}
                    onChange={e => handleChange(e)} 
                    error={!value}
                    helperText={!value ? 'Required' : 'Do not share your password with anyone.'}
                />           
            </Stack>

        </Stack>

         
    </div>
  )
}

export default MUITextField