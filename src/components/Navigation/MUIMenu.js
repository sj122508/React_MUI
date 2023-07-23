import {useState} from 'react'
import {
    AppBar, 
    Toolbar, 
    Typography, 
    IconButton, 
    Stack, 
    Button,
    Menu,
    MenuItem,
} from  '@mui/material'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function MUIMenu() {
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

        
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size='large' edge='start' color='inherit' aria-label='menu'>
          <CatchingPokemonIcon sx={{mr: 2}} />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Pokemon Catcher
        </Typography>
        <Stack direction='row' spacing={2}>
          <Button color='inherit'>Features</Button>
          <Button color='inherit'>Pricing</Button>
          <Button color='inherit'>About</Button>
          <Button 
            color='inherit' 
            id='resources-button'
            aria-controls={open ? 'resources-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            endIcon={<KeyboardArrowDownIcon />}
            >
                Resources
            </Button>
          <Button color='inherit'>Login</Button>
        </Stack>

        <Menu 
            id='resources-menu'
            anchorEl={anchorEl}
            open={open}
            MenuListProps={{
                'aria-labelledby': 'resources-button',
            }}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
        >
            <MenuItem onClick={handleClose} >Blog</MenuItem>
            <MenuItem onClick={handleClose} >Podcast</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  )
}

export default MUIMenu

// Menu anchorEl prop is the element that the menu should be positioned against.
// Menu open prop is a boolean that controls whether the menu is displayed.
// Menu onClose prop is a function that is called when the menu is closed.
// Menu MenuListProps prop is an object that is passed to the MenuList component.
// Menu anchorOrigin prop is an object that controls the menu's position relative to the anchorEl.
// Menu transformOrigin prop is an object that controls the menu's position relative to the menuList.
// Menu MenuItem component is used to display a menu item.
// Menu MenuItem onClick prop is a function that is called when the menu item is clicked.

