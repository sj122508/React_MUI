import {Paper} from  '@mui/material'
import { Box } from '@mui/system'

function MUIPaper() {
  return (
    <Paper elevation={4} sx={{p: 2}}>
        <Box sx={{height: '100px', width: '100px', bgcolor: 'primary.main'}}>Hello</Box>
    </Paper>
  )
}

export default MUIPaper