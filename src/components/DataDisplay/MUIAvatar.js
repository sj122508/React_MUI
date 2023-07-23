import {Stack, Avatar, AvatarGroup} from '@mui/material'
import { deepOrange, green } from '@mui/material/colors';
import AssignmentIcon from '@mui/icons-material/Assignment';

function MUIAvatar() {
  return (
    <Stack spacing={4} p={4} >
        <Stack direction='row' spacing={1} >
            <Avatar sx={{bgcolor: 'success.light'}}>BW</Avatar>
            <Avatar sx={{bgcolor: 'primary.light'}}>CK</Avatar>
        </Stack>

        <Stack direction='row' spacing={1} >
            <Avatar alt='Remy Sharp' src='https://mui.com/static/images/avatar/1.jpg' />
            <Avatar alt='Remy Sharp' src='https://mui.com/static/images/avatar/2.jpg' />
        </Stack>

        <Stack direction='row' spacing={1} >
            <AvatarGroup max={4}>
                <Avatar alt='Remy Sharp' src='https://mui.com/static/images/avatar/1.jpg' />
                <Avatar alt='Remy Sharp' src='https://mui.com/static/images/avatar/2.jpg' />
                <Avatar alt='Remy Sharp' src='https://mui.com/static/images/avatar/3.jpg' />
                <Avatar alt='Remy Sharp' src='https://mui.com/static/images/avatar/4.jpg' />
            </AvatarGroup>
        </Stack>

        <Stack direction='row' spacing={1} >
            <AvatarGroup max={3}>
                <Avatar alt='Remy Sharp' src='https://mui.com/static/images/avatar/1.jpg' />
                <Avatar alt='Remy Sharp' src='https://mui.com/static/images/avatar/2.jpg' />
                <Avatar alt='Remy Sharp' src='https://mui.com/static/images/avatar/3.jpg' />
                <Avatar alt='Remy Sharp' src='https://mui.com/static/images/avatar/4.jpg' />
            </AvatarGroup>
        </Stack>

        <Stack direction='row' spacing={1} >
            <Avatar sx={{bgcolor: 'success.light', width: 48, height: 48}}>BW</Avatar>
            <Avatar sx={{bgcolor: 'primary.light', width: 48, height: 48}}>CK</Avatar>
        </Stack>

        <Stack direction="row" spacing={2}>
            <Avatar sx={{ bgcolor: deepOrange[500] }} variant="square">
                N
            </Avatar>
            <Avatar sx={{ bgcolor: green[500] }} variant="rounded">
                <AssignmentIcon />
            </Avatar>
        </Stack>
    </Stack>
  )
}

export default MUIAvatar