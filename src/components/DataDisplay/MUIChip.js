import { useState } from 'react'
import {Stack, Chip, Avatar} from '@mui/material'
import DoneIcon from '@mui/icons-material/Done'
import FaceIcon from '@mui/icons-material/Face'

function MUIChip() {
    const [chipData, setChipData] = useState(['Chip 1', 'Chip 2', 'Chip 3'])

    const handleDelete = (chipToDelete) => {
        setChipData((chips) => chips.filter((chip) => chip !== chipToDelete))
    }

  return (
    <Stack  spacing={2} m={4}>
        
        <Stack direction="row" spacing={1} m={4}>
            <Chip label="Basic" />
            <Chip label="Disabled" disabled />
            <Chip label="Clickable" clickable />
            <Chip label="Deletable" onDelete={() => {}} />
            <Chip label="Clickable deletable" onClick={() => {}} onDelete={() => {}} />
            <Chip label="Custom delete icon" onDelete={() => {}} deleteIcon={<DoneIcon />} />
            <Chip label="Clickable Link" component="a" href="#chip" clickable />
            <Chip label="Primary clickable" clickable color="primary" onDelete={() => {}} />
            <Chip label="Deletable primary" onDelete={() => {}} color="primary" />
            <Chip label="Deletable secondary" onDelete={() => {}} color="secondary" />
            <Chip label="Clickable link secondary" component="a" href="#chip" clickable color="secondary" />
            <Chip label="Deletable avatar" onDelete={() => {}} avatar={<Avatar>JV</Avatar>} color='secondary' variant='outlined'/>
            <Chip label="Deletable avatar" onDelete={() => {}} icon={<FaceIcon />} color='primary' size='small' clickable/>
        </Stack>

        <Stack direction="row" spacing={1} m={4}>
            {chipData.map((chip) => (
                <Chip 
                    key={chip} 
                    label={chip} 
                    onDelete={() => handleDelete(chip)} 
                    color='primary'
                    size='small'
                />
                ))
            }
        </Stack>
    </Stack>
  )
}

export default MUIChip