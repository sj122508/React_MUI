import React , {useState}from 'react'
import { Stack, Button, Typography, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

function MUIButton() {
    // create state format text
    const [formats, setFormats] = useState(() => []);

    // create handle change format text
    const handleFormat = (event, newFormats) => {
        console.log(newFormats, 'newFormats')
        setFormats(newFormats);
    };


  return (
    <Stack spacing={4}>
        <Typography variant="h6" color='#616161'>Button Variant</Typography>
        <Stack spacing={2} direction='row'>
            <Button variant="text">Text</Button>
            <Button variant="text" href='https://google.com'>With link</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
            
        </Stack>

        <Typography variant="h6" color='#616161'>Button color pallete</Typography>
        <Stack spacing={2} direction='row'>
            <Button variant="contained" color='primary'>Primary</Button>
            <Button variant="contained" color='secondary'>Secondary</Button>
            <Button variant="contained" color='error'>Error</Button>
            <Button variant="contained" color='warning'>Warning</Button>
            <Button variant="contained" color='info'>Info</Button>
            <Button variant="contained" color='success'>Success</Button>
        </Stack>

        <Stack spacing={2} direction='row'>
            <Button variant="text" color='primary'>Primary</Button>
            <Button variant="text" color='secondary'>Secondary</Button>
            <Button variant="text" color='error'>Error</Button>
            <Button variant="text" color='warning'>Warning</Button>
            <Button variant="text" color='info'>Info</Button>
            <Button variant="text" color='success'>Success</Button>
        </Stack>

         <Stack spacing={2} direction='row'>
            <Button variant="outlined" color='primary'>Primary</Button>
            <Button variant="outlined" color='secondary'>Secondary</Button>
            <Button variant="outlined" color='error'>Error</Button>
            <Button variant="outlined" color='warning'>Warning</Button>
            <Button variant="outlined" color='info'>Info</Button>
            <Button variant="outlined" color='success'>Success</Button>
        </Stack>

        <Typography variant="h6" color='#616161'>Button size</Typography>
        <Stack spacing={2} direction='row' display='block'>
            <Button variant="contained" size='small'>Small</Button>
            <Button variant="contained" size='medium'>Medium</Button>
            <Button variant="contained" size='large'>Large</Button>
        </Stack>

        <Typography variant="h6" color='#616161'>Button with icon</Typography>
        <Stack spacing={2} direction='row' display='block'>
            <Button variant="contained" startIcon={<SendIcon />}>Send Start</Button>
            <Button variant="contained" endIcon={<SendIcon />}>Send End</Button>
            <IconButton aria-label='send'><SendIcon color='primary'/></IconButton>
            
        </Stack>

        <Typography variant="h6" color='#616161'>Button disable elevation</Typography>
        <Stack spacing={2} direction='row' >
            <Button variant="contained" disableElevation>Disable Elevation</Button>
        </Stack>

        <Typography variant="h6" color='#616161'>Button disable ripple</Typography>
        <Stack spacing={2} direction='row' >
            <Button variant="contained" disableRipple>Disable Ripple</Button>
        </Stack>

        <Typography variant="h6" color='#616161'>Button group horizontal default</Typography>
        <Stack spacing={2} direction='row'>
            <ButtonGroup 
                variant="contained" 
                size='small' 
                color='secondary'
                aria-label='alignment button group'
            >
                <Button onClick={() => alert('Left Clicked')} >Left Contained</Button>
                <Button onClick={() => alert('Center Clicked')}>Center Contained</Button>
                <Button onClick={() => alert('Right Clicked')}>Right Contained</Button>
            </ButtonGroup>

            <ButtonGroup variant="outlined" size='small'>
                <Button  >Left Outlined</Button>
                <Button  >Center Outlined</Button>
                <Button  >Right Outlined</Button>
            </ButtonGroup>

             <ButtonGroup variant="text" size='small'>
                <Button  >Left Text</Button>
                <Button  >Center Text</Button>
                <Button  >Right Text</Button>
            </ButtonGroup>
        </Stack>

        <Typography variant="h6" color='#616161'>Button group vertical</Typography>
        <Stack spacing={2} direction='row'>
            <ButtonGroup variant="contained" size='small' orientation='vertical'>
                <Button  >Left Contained</Button>
                <Button  >Center Contained</Button>
                <Button  >Right Contained</Button>
            </ButtonGroup>
        </Stack>

        <Typography variant="h6" color='#616161'>Button toggle</Typography>
        <Stack spacing={2} direction='row'>
            <ToggleButtonGroup
                color='success'
                variant='outlined'
                size='small'
                value={formats}
                exclusive // only one button can be selected at a time
                aria-label='text alignment'
                onChange={handleFormat}
                orientation='horizontal' // vertical
            >
                <ToggleButton value='bold' aria-label='bold aligned'>
                    <FormatBoldIcon />
                </ToggleButton>
                <ToggleButton value='italic' aria-label='italic aligned'>
                    <FormatItalicIcon />
                </ToggleButton>
                <ToggleButton value='underline' aria-label='underline aligned'> 
                    <FormatUnderlinedIcon />
                </ToggleButton>
            </ToggleButtonGroup>

        </Stack>

    </Stack>
  )
}

export default MUIButton