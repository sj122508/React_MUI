
import {Box, List, ListItem, ListItemText, ListItemIcon, ListItemAvatar, Avatar, Stack, ListItemButton, Divider} from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'

function MUIList() {
  return (
    <Stack spacing={2} direction='row' m={4}>
        
    <Box sx={{width: '400px', bgcolor: '#efefef', margin: '4px'}}>
        <List>
            <ListItem>
                <ListItemIcon>
                    <MailIcon />
                </ListItemIcon>
                <ListItemText primary='Primary' />
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <MailIcon />
                </ListItemIcon>
                <ListItemText primary='Secondary' />
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <MailIcon />
                </ListItemIcon>
                <ListItemText primary='Tertiary' />
            </ListItem>
        </List>
    </Box>

     <Box sx={{width: '400px', bgcolor: '#efefef', margin: '4px'}}>
        <List>
            <ListItem>
                <ListItemButton>
                    <ListItemIcon>
                        <ListItemAvatar>
                            <Avatar>
                                <MailIcon />
                            </Avatar>
                        </ListItemAvatar>
                    </ListItemIcon>
                    <ListItemText primary='Primary' secondary='text two'/>
                </ListItemButton>
            </ListItem>
            <Divider />

            <ListItem>
                <ListItemButton>
                    <ListItemIcon>
                        <ListItemAvatar>
                            <Avatar>
                                <MailIcon />
                            </Avatar>
                        </ListItemAvatar>
                    </ListItemIcon>
                    <ListItemText primary='Secondary' secondary='text two'/>
                </ListItemButton>
            </ListItem>
            <Divider />

            <ListItem>
                <ListItemButton>
                    <ListItemIcon>
                        <ListItemAvatar>
                            <Avatar>
                                <MailIcon />
                            </Avatar>
                        </ListItemAvatar>
                    </ListItemIcon>
                    <ListItemText primary='Tertiary' secondary='text two'/>
                </ListItemButton>
            </ListItem>
        </List>
    </Box>
    </Stack>
  )
}

export default MUIList