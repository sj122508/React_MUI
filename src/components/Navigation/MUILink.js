import {
    Stack,
    Link
} from  '@mui/material'

function MUILink() {
  return (
    <Stack spacing={2} direction='row' m={4}>
        <Link href='#'>Link</Link>
        <Link href='#' color='secondary'>Secondary</Link>
    </Stack>
  )
}

export default MUILink