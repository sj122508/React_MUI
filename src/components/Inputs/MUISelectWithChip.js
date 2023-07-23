import {useState} from 'react'
import {FormControl, InputLabel, Select, OutlinedInput, Box, Chip, MenuItem } from '@mui/material'

const names = [
        'Oliver Hansen',
        'Van Henry',
        'April Tucker',
        'Ralph Hubbard',
        'Omar Alexander',
        'Carlos Abbott',
        'Miriam Wagner',
        'Bradley Wilkerson',
        'Virginia Andrews',
        'Kelly Snyder',           
];

function MUISelectWithChip() {
    //create state for person names
    const [personName, setPersonName] = useState([]);

    // create handle change for person names
    const handleChangePersonName = (event) => {
        const {value} = event.target;

        setPersonName( typeof value === 'string' ? value.split(',') : value);
    };


  return (
    <FormControl sx={{ m: 1, width: 500 }}>
        <InputLabel id="demo-multiple-chip-label">Multiple Select with Chip</InputLabel>
        <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            value={personName}
            onChange={handleChangePersonName}
            fullWidth
            input={<OutlinedInput id="select-multiple-chip" label="Multiple Select with Chip" />}
            renderValue={(selected) => (
                <Box sx={{display: 'flex', flexWrap: 'wrap', gap:0.5}}>
                    {selected.map((value) => (
                        <Chip key={value} label={value} />
                    ))}
                </Box>
            )}
        >
        {
            names.map((name) => (
                <MenuItem 
                    key={name} 
                    value={name}
                    // width='100%'
                    >
                    {name}
                </MenuItem>

            ))
        }
        </Select>  
    </FormControl>
  )
}

export default MUISelectWithChip