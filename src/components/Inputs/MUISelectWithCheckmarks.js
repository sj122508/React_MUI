import {useState} from 'react';
import {InputLabel, MenuItem, Select, Checkbox, ListItemText, OutlinedInput, FormControl   } from '@mui/material';


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

function MUISelectWithCheckmarks() {

    // create state for person names
    const [personName, setPersonName] = useState([]);

    // create handle change for person names
    const handleChangePersonName = (event) => {
        const {value} = event.target;

        setPersonName( typeof value === 'string' ? value.split(',') : value);
    };

  return (
    <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Multiple Select with Checkbox</InputLabel>
        <Select 
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={personName}
            onChange={handleChangePersonName}
            renderValue={(selected) => selected.join(', ')}
            input={<OutlinedInput label="Multiple Select with Checkbox" />}
            fullWidth
            sx={{mb: 2}}
        >
            {names.map((name) => (
                <MenuItem key={name} value={name}>
                    <Checkbox checked={personName.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                </MenuItem>
            ))}
        </Select>
    </FormControl>
  )
}

export default MUISelectWithCheckmarks