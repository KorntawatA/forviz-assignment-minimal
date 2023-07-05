import { Avatar, Box, Button, Grid, InputAdornment, TextField, Typography } from '@mui/material'
import AppBar from './AppBar'
import SideBar from './SideBar'
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import { DataGrid } from '@mui/x-data-grid';
import UserStatus from './UserStatus';

export default function UserMenu() {

    const columns = [
        {field: "avatar", headerName: "", renderCell: (params) => <Avatar>{params.value}</Avatar>},
        {field: "name", headerName: "Name", width: 150},
        {field: "company", headerName: "Company", width: 300},
        {field: "role", headerName: "Role", width: 200},
        {field: "verified", headerName: "Verified", width: 150},
        {field: "status", headerName: "Status", width: 150, renderCell: (params) => <UserStatus isActive = {params.value}/>}
    ]

    const rows = [
        {id: 1, avatar: "B", name: <Typography>"Becky Cole"</Typography>, company: "Nolan, Keeling and Green", role: "Full Stack Designer", verified: "Yes", status: "Active"},
        {id: 2, avatar: "B", name: "Beth Wuckert", company: "Champlin, Denesik and Ernser", role: "Hr Manager", verified: "No", status: "Banned"},
        {id: 3, avatar: "C", name: "Cecilia Collins", company: "Schneider Group", role: "Full Stack Designer", verified: "Yes", status: "Banned"},
        {id: 4, avatar: "C", name: "Clifford Batz MD", company: "Lebsack - Batz", role: "Leader", verified: "Yes", status: "Banned"},
        {id: 5, avatar: "C", name: "Curtis Roberts", company: "Ryan, Towne and Murphy", role: "UX Designer", verified: "No", status: "Active"}
    ]

    return (
        <Box sx={{display: "flex", alignItems: "flex-start"}}>
            <SideBar />
            <Box sx={{padding: "2rem"}}>
                <AppBar />
                <Box sx={{display: "flex", justifyContent: "space-between", margin: "3rem 0"}}>
                    <Typography variant="h4">User</Typography>
                    <Button startIcon={<AddIcon />} variant="contained">New User</Button>
                </Box>
                <Box sx={{display: "flex", alignItems: "center", justifyContent: "space-between", padding: "2rem"}}>
                    <TextField 
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            )
                        }} 
                        label="Search user..."
                    />
                    <FilterListIcon />
                </Box>
                <DataGrid 
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                          paginationModel: { page: 0, pageSize: 5 },
                        },
                    }}
                    checkboxSelection
                />
            </Box>
        </Box>
    )
}