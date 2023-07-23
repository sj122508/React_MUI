import React from 'react'
import { Typography } from '@mui/material';

function MUITypography() {
  return (
    <div>
        <Typography variant="h1" gutterBottom>h1 Heading</Typography>
        <Typography variant="h2" gutterBottom>h2 Heading</Typography>
        <Typography variant="h3" gutterBottom>h3 Heading</Typography>
        <Typography variant="h4" gutterBottom>h4 Heading</Typography>
        <Typography variant="h5" gutterBottom>h5 Heading</Typography>
        <Typography variant="h6" gutterBottom>h6 Heading</Typography>

        <Typography variant="subtitle1" gutterBottom>subtitle1</Typography>
        <Typography variant="subtitle2" gutterBottom>subtitle2</Typography>

        <Typography variant="body1" gutterBottom>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>
        <Typography variant="body2" gutterBottom>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>
    </div>
  )
}


export default MUITypography