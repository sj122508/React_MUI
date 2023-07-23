import {Grid, Box} from '@mui/material'

function MUIGrid() {
  return (
    <>
        <Grid 
            container 
            my={4} // margin vertical
            spacing={2} // space between items / add 16px to the left and right of the container
        >
            <Grid item xs={12} xl={6} >
                <Box bgcolor='primary.main' p={2}>Item 1</Box>
            </Grid>
            <Grid item xs={12} xl={6}>
                <Box bgcolor='primary.light' p={2}>Item 2</Box>
            </Grid>
            <Grid item xs={12} xl={6}>
                <Box bgcolor='primary.light' p={2}>Item 3</Box>
            </Grid>
            <Grid item xs={12} xl={6}>
                <Box bgcolor='primary.main' p={2}>Item 4</Box>
            </Grid>
            
        </Grid>
    </>
  )
}

export default MUIGrid

// Grid is a layout component that is used to create a responsive layout
// Grid is a flexbox based component
// Grid is used to create a responsive layout
// Grid component is has variants like container (parent), item (child), etc
// Grid component consists of 12 columns
// There are five breakpoints for Grid component: xs, sm, md, lg, xl
// xs is for mobile devices
// sm is for tablet devices
// md is for desktop devices
// lg is for large desktop devices
// xl is for extra large desktop devices
// xs is the default breakpoint
// Add columnSpacing={2} to Grid component to add space between items
// Add rowSpacing={2} to Grid component to add space between rows