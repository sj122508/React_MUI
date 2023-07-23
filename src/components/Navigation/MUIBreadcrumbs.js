import {Box, Breadcrumbs, Link, Typography} from '@mui/material'
import { NavigateNext } from '@mui/icons-material'
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';

function MUIBreadcrumbs() {
  return (
    <Box m={2}>
        <Breadcrumbs 
            aria-label='breadcrumb' 
            separator={
            <NavigateNext fontSize='small' />
            }
            maxItems={4} // maxItems is the number of breadcrumbs to show before collapsing.
            itemsBeforeCollapse={2} // itemsBeforeCollapse is the number of breadcrumbs to show when collapsing from the end.
            itemsAfterCollapse={2} // itemsAfterCollapse is the number of breadcrumbs to show when collapsing from the start.
        >
            <Link underline='hover'  href='#'>
                React
            </Link>
            <Link underline='hover'  href='#'>
                UI
            </Link>
            <Link underline='hover'  href='#'>
                Material-UI
            </Link>
            <Link underline='hover'  href='#'>
                Core
            </Link>
            <Typography color='text'>Breadcrumb</Typography>
        </Breadcrumbs>

        <Breadcrumbs 
            aria-label='breadcrumb' 
            separator={
            <NavigateNext fontSize='small' />
            }
            // maxItems={4} // maxItems is the number of breadcrumbs to show before collapsing.
            // itemsBeforeCollapse={2} // itemsBeforeCollapse is the number of breadcrumbs to show when collapsing from the end.
            // itemsAfterCollapse={2} // itemsAfterCollapse is the number of breadcrumbs to show when collapsing from the start.
        >
            <Link
                underline="hover"
                sx={{ display: 'flex', alignItems: 'center' }}
                color="inherit"
                href="/" 
            >
                <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                MUI
            </Link>
            
            <Link
                underline="hover"
                sx={{ display: 'flex', alignItems: 'center' }}
                color="inherit"
                href="/material-ui/getting-started/installation/"
            >
                <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                Core
            </Link>
            
            <Typography
                sx={{ display: 'flex', alignItems: 'center' }}
                color="text.primary"
            >
            <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Breadcrumb
            </Typography>
        </Breadcrumbs>

    </Box>
  )
}


export default MUIBreadcrumbs