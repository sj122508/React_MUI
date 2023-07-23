import { useState } from 'react'
import {Stack, Rating} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function MUIRating() {
    const [value, setValue] = useState(null);

    const handleChange = (event, newValue) => {
        console.log(newValue, 'newValue')
        setValue(newValue);
    };

  return (
    <Stack spacing={2}>
        <Rating value={value} onChange={handleChange} />

        <Rating 
            value={value} 
            onChange={handleChange} 
            precision={0.5} 
            size='large'
        />

         <Rating 
            value={value} 
            onChange={handleChange}
            size='large'
            icon={<FavoriteIcon fontSize='inherit' color='error'/>}
            emptyIcon={<FavoriteBorderIcon fontSize='inherit'/>}
        />

        <Rating 
            value={value} 
            onChange={handleChange}
            size='large'
            icon={<FavoriteIcon fontSize='inherit' color='error'/>}
            emptyIcon={<FavoriteBorderIcon fontSize='inherit'/>}
            readOnly
        />

        <Rating 
            value={value} 
            onChange={handleChange}
            size='large'
            icon={<FavoriteIcon fontSize='inherit' color='error'/>}
            emptyIcon={<FavoriteBorderIcon fontSize='inherit'/>}
            highlightSelectedOnly
        />
    </Stack>
  )
}

export default MUIRating