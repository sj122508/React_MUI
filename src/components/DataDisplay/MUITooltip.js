import { Tooltip, IconButton, Stack, Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import DoneIcon from '@mui/icons-material/Done'
import FaceIcon from '@mui/icons-material/Face'

function MUITooltip() {
  return (
    <Stack spacing={2}>
        <Stack direction="row" spacing={2} p={4}>
            <Tooltip title="Delete">
            <IconButton aria-label="delete">
                    <DeleteIcon />
            </IconButton>
        </Tooltip>

        <Tooltip title="Done" placement='right'>
            <IconButton aria-label="done">
                    <DoneIcon />
            </IconButton>
        </Tooltip>

        <Tooltip title="Bottom End" placement='bottom-end'>
            <IconButton aria-label="done">
                    <DoneIcon />
            </IconButton>
        </Tooltip>

        <Tooltip title="Bottom Start" placement='bottom-start'>
            <IconButton aria-label="done">
                    <DoneIcon />
            </IconButton>
        </Tooltip>

        <Tooltip title="Left" placement='left'>
            <IconButton aria-label="done">
                    <DoneIcon />
            </IconButton>
        </Tooltip>

        <Tooltip title="Left End" placement='left-end'>
            <IconButton aria-label="done">
                    <DoneIcon />
            </IconButton>
        </Tooltip>

        <Tooltip title="Left Start" placement='left-start'>
            <IconButton aria-label="done">
                    <DoneIcon />
            </IconButton>
        </Tooltip>

         <Tooltip title="Right" placement='right'>
            <IconButton aria-label="done">
                    <DoneIcon />
            </IconButton>
        </Tooltip>

        <Tooltip title="Right End" placement='right-end'>
            <IconButton aria-label="done">
                    <DoneIcon />
            </IconButton>
        </Tooltip>

        <Tooltip title="Right Start" placement='right-start'>
            <IconButton aria-label="done">
                    <DoneIcon />
            </IconButton>
        </Tooltip>

        <Tooltip title="Top" placement='top'>
            <IconButton aria-label="done">
                    <DoneIcon />
            </IconButton>
        </Tooltip>

        <Tooltip title="Top End" placement='top-end'>
            <IconButton aria-label="done">
                    <DoneIcon />
            </IconButton>
        </Tooltip>

        <Tooltip title="Top Start" placement='top-start'>
            <IconButton aria-label="done">
                    <DoneIcon />
            </IconButton>
        </Tooltip>
        </Stack>

        <Stack direction="row" spacing={2} p={4}>
            <Tooltip title="With Arrow" placement='top' arrow>
                <IconButton aria-label="done">
                        <FaceIcon />
                </IconButton>
            </Tooltip>

            <Tooltip 
                title="With Delay" 
                placement='top' 
                arrow
                enterDelay={500}
                leaveDelay={200}
            >
                <IconButton aria-label="done">
                        <FaceIcon />
                </IconButton>
            </Tooltip>
        </Stack>
        

    </Stack>
    
  )
}

export default MUITooltip