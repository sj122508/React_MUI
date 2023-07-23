import {Box} from '@mui/material'

function MUIBox() {
  return (
    <Box>
        <Box>
            Div tag
        </Box>

        <Box component='span'>
            Span tag
        </Box>

        <Box sx={{
            backgroundColor: 'primary.main',
            color : 'white',
            height: '100px',
            width: '100px',
            padding: '10px',
            '&:hover': {
                backgroundColor: 'primary.light',
                cursor: 'pointer'
            }
        }}>
            With style
        </Box>

        <Box 
            display='flex' 
            height='100px' 
            width='100px' 
            bgcolor='success.light'
            p={2} // padding
        >
            Display flex
        </Box>
    </Box>
    
  )
}

export default MUIBox

