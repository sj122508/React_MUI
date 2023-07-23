import {
    Card, 
    CardHeader, 
    CardContent, 
    CardActions, 
    Button, 
    Typography, 
    Stack, 
    CardMedia, 
    Avatar, 
    IconButton
} from  '@mui/material'

import MoreVertIcon from '@mui/icons-material/MoreVert';

function MUICard() {
  return (
    <Stack width='300px' spacing={2} direction='column'>
        <Card elevation={1}>
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>React</Typography>
                <Typography gutterBottom variant='body2' color='text.secondary'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, voluptatum.

                </Typography>
            </CardContent>
        </Card>

        <Card elevation={2}>
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>React</Typography>
                <Typography gutterBottom variant='body2' color='text.secondary'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, voluptatum.
                    
                </Typography>
            </CardContent>
            <CardActions>
                <Button size='small'>Share</Button>
                <Button size='small'>Learn More</Button>
            </CardActions>
        </Card>

        <Card elevation={3}>
            <CardMedia 
                component='img' 
                height='140' 
                image='https://picsum.photos/300/300' 
                alt='random image' 
            />
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>React</Typography>
                <Typography gutterBottom variant='body2' color='text.secondary'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, voluptatum.
                    
                </Typography>
            </CardContent>
            <CardActions>
                <Button size='small'>Share</Button>
                <Button size='small'>Learn More</Button>
            </CardActions>
        </Card>

        <Card elevation={4}>
            <CardHeader 
                avatar={
                    <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                        R
                    </Avatar>
                }
                title='Shrimp and Chorizo Paella'
                subheader='September 14, 2016'
                action={
                    <IconButton aria-label="settings">
                        <Typography variant='h6'>
                            <MoreVertIcon />
                        </Typography>
                    </IconButton>
                }
                

            />
            <CardMedia 
                component='img' 
                height='140' 
                image='https://picsum.photos/300/300' 
                alt='random image' 
            />
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>React</Typography>
                <Typography gutterBottom variant='body2' color='text.secondary'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, voluptatum.
                    
                </Typography>
            </CardContent>
            <CardActions>
                <Button size='small'>Share</Button>
                <Button size='small'>Learn More</Button>
            </CardActions>
        </Card>
    </Stack>
  )
}

export default MUICard