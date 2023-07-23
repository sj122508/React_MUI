import {Stack, Badge} from '@mui/material'
import MailIcon from '@mui/icons-material/Mail';

function MUIBadge() {
  return (
    <Stack spacing={2} direction='row' p={4}>
        <Badge badgeContent={4} color='primary'>
            <MailIcon />
        </Badge>

        <Badge badgeContent={4} color='secondary'>
            <MailIcon />
        </Badge>

        <Badge badgeContent={0} color='secondary' showZero>
            <MailIcon />
        </Badge>

        <Badge badgeContent={100} color='secondary' showZero>
            <MailIcon />
        </Badge>

        <Badge variant='dot' color='secondary' showZero>
            <MailIcon />
        </Badge>
    </Stack>
  )
}

export default MUIBadge