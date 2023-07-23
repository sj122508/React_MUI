import {AppBar, Toolbar, Typography, IconButton, Stack, Button} from  '@mui/material'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

function MUIAppbar() {
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
          <Button color='inherit'>Login</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default MUIAppbar