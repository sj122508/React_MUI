import {Button, Stack, Typography} from '@mui/material'

function MUIStack() {
  return (
    <Stack spacing={2}>
        <Typography variant="h6" color='#616161'>Sample One</Typography>
        <Stack sx={{border: '1px solid' , p: '2px'}} spacing={2}>
                <Button variant="text">Text</Button>
                <Button variant="text" href='https://google.com'>With link</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            
        </Stack>

        <Typography variant="h6" color='#616161'>Sample Two</Typography>
        <Stack spacing={2} direction='row'>
                <Button variant="text">Text</Button>
                <Button variant="text" href='https://google.com'>With link</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            
        </Stack>

        <Typography variant="h6" color='#616161'>Sample Three</Typography>
        <Stack spacing={2} direction='row-reverse'>
                <Button variant="text">Text</Button>
                <Button variant="text" href='https://google.com'>With link</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
        </Stack>

        <Typography variant="h6" color='#616161'>Sample Four</Typography>
        <Stack spacing={2} direction='row' and justifyContent='center'>
            
                <Button variant="text">Text</Button>
                <Button variant="text" href='https://google.com'>With link</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
        </Stack>

        <Typography variant="h6" color='#616161'>Sample Five</Typography>
        <Stack spacing={2} direction='row' and justifyContent='space-evenly'>
                <Button variant="text">Text</Button>
                <Button variant="text" href='https://google.com'>With link</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
        </Stack>
    </Stack>
  )
}

export default MUIStack

// Stack is a component that is used to display a group of elements in a single column or row
// By default stack is vertical
// To make it horizontal, add direction='row' to Stack component
// To make it horizontal and reverse, add direction='row-reverse' to Stack component
// To make it vertical and reverse, add direction='column-reverse' to Stack component
// To make it horizontal and center, add direction='row' and justifyContent='center' to Stack component
// To make it horizontal and space between, add direction='row' and justifyContent='space-between' to Stack component
// To make it horizontal and space around, add direction='row' and justifyContent='space-around' to Stack component
// To make it horizontal and space evenly, add direction='row' and justifyContent='space-evenly' to Stack component
// To make it horizontal and align items center, add direction='row' and alignItems='center' to Stack component
// To make it horizontal and align items flex-end, add direction='row' and alignItems='flex-end' to Stack component
// To make it horizontal and align items flex-start, add direction='row' and alignItems='flex-start' to Stack component
// To make it horizontal and align items stretch, add direction='row' and alignItems='stretch' to Stack component
// To make it horizontal and align items baseline, add direction='row' and alignItems='baseline' to Stack component
// To make it horizontal and align items normal, add direction='row' and alignItems='normal' to Stack component
// To make it horizontal and align items inherit, add direction='row' and alignItems='inherit' to Stack component
// To make it horizontal and align items initial, add direction='row' and alignItems='initial' to Stack component
// To make it horizontal and align items unset, add direction='row' and alignItems='unset' to Stack component
// To make it horizontal and align items self-start, add direction='row' and alignItems='self-start' to Stack component
// To make it horizontal and align items self-end, add direction='row' and alignItems='self-end' to Stack component
// To make it horizontal and align items center, add direction='row' and alignItems='center' to Stack component
// To make it horizontal and align items flex-end, add direction='row' and alignItems='flex-end' to Stack component
