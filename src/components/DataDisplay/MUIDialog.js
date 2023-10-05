
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material'
import React, { useState } from 'react'
import Slide from '@mui/material/Slide';

// const Transition = React.forwardRef(function Transition(props, ref) {
//   return <Slide direction="down" ref={ref} {...props} />;
// });

function MUIDialog() {
    const [open, setOpen] = useState(false)

   
  return (
    <>
        <Button onClick={() => setOpen(true)} variant='contained' color='primary'>Open Dialog</Button>
        <Dialog 
        // TransitionComponent={Transition} 
        open={open} onClose={() => setOpen(false)} aria-labelledby='dialog-title' aria-describedby='dialog-description'>
            <DialogTitle id='dialog-title'>Dialog Title</DialogTitle>
            <DialogContent>
                <DialogContentText id='dialog-description'>
                    Are you sure you want to delete this item?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setOpen(false)} autoFocus variant='contained' color='primary'>Yes</Button>
                <Button onClick={() => setOpen(false)}  variant='contained' color='error'>No</Button>
            </DialogActions>
        </Dialog>
        
    </>
  )
}

export default MUIDialog