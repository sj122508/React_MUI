import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material'

function MUITable() {
  return (
   <TableContainer component={Paper}>
        <Table aria-label='simple table'>
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>First name</TableCell>
                    <TableCell>Last name</TableCell>
                    <TableCell>Email</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    tableData.map((row) => (
                        <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th' : {border: 0}}}>
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.first_name}</TableCell>
                            <TableCell>{row.last_name}</TableCell>
                            <TableCell>{row.email}</TableCell>
                        </TableRow>

                    ))
                }
            </TableBody>


        </Table>
   </TableContainer>
            
  )
}

export default MUITable

const tableData = 
[{
  "id": 1,
  "first_name": "Angeline",
  "last_name": "Nowell",
  "email": "anowell0@alibaba.com",
  "gender": "Non-binary",
  "ip_address": "168.35.234.190"
}, {
  "id": 2,
  "first_name": "Maddy",
  "last_name": "Wichard",
  "email": "mwichard1@hatena.ne.jp",
  "gender": "Male",
  "ip_address": "165.159.30.186"
}, {
  "id": 3,
  "first_name": "Seymour",
  "last_name": "Kilty",
  "email": "skilty2@vistaprint.com",
  "gender": "Male",
  "ip_address": "61.156.105.246"
}, {
  "id": 4,
  "first_name": "Gardy",
  "last_name": "Withnall",
  "email": "gwithnall3@jigsy.com",
  "gender": "Male",
  "ip_address": "37.21.169.129"
}, {
  "id": 5,
  "first_name": "Ingrim",
  "last_name": "Tupp",
  "email": "itupp4@shinystat.com",
  "gender": "Male",
  "ip_address": "15.77.96.167"
}, {
  "id": 6,
  "first_name": "Jerrold",
  "last_name": "Longmaid",
  "email": "jlongmaid5@marriott.com",
  "gender": "Male",
  "ip_address": "162.217.212.219"
}, {
  "id": 7,
  "first_name": "Lura",
  "last_name": "Rivenzon",
  "email": "lrivenzon6@guardian.co.uk",
  "gender": "Female",
  "ip_address": "64.91.71.176"
}, {
  "id": 8,
  "first_name": "Brooke",
  "last_name": "Grimsey",
  "email": "bgrimsey7@clickbank.net",
  "gender": "Female",
  "ip_address": "57.106.124.76"
}, {
  "id": 9,
  "first_name": "Creighton",
  "last_name": "Ranns",
  "email": "cranns8@bloglovin.com",
  "gender": "Male",
  "ip_address": "239.90.15.92"
}, {
  "id": 10,
  "first_name": "Abbye",
  "last_name": "Oiller",
  "email": "aoiller9@ehow.com",
  "gender": "Female",
  "ip_address": "229.226.96.24"
}]