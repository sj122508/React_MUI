
import {useState} from 'react'
import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import Person from '@mui/icons-material/Person';

function MUIBottomNavigation() {
    const [value, setValue] = useState(0)

  return (
    <BottomNavigation 
        sx={{width: '100%', position: 'absolute', bottom: 0}} 
        value={value} 
        onChange={(event, newValue) => setValue(newValue)}
        showLabels
    >
        <BottomNavigationAction label='Home' icon={<HomeIcon />} />
        <BottomNavigationAction label='Favorites' icon={<FavoriteIcon />} />
        <BottomNavigationAction label='Profile' icon={<Person />} />
    </BottomNavigation>
  )
}

export default MUIBottomNavigation