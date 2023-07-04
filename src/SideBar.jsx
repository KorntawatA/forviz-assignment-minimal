import { Avatar, Box, Grid, Typography } from "@mui/material";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BookIcon from '@mui/icons-material/Book';
import PasswordIcon from '@mui/icons-material/Password';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';

export default function SideBar() {

    const sidebarButtonsInfo = [
        {icon: <TrendingUpIcon />, name: "Dashboard"},
        {icon: <AccountBoxIcon />, name: "User"},
        {icon: <ShoppingCartIcon />, name: "Product"},
        {icon: <BookIcon />, name: "Blog"},
        {icon: <PasswordIcon />, name: "Login"},
        {icon: <DoNotDisturbIcon />, name: "Not Found"}
    ]

    const sidebarButtons = sidebarButtonsInfo.map(b => {
        return (
            <Grid 
                container 
                columnGap={2} 
                sx={
                    b.name === "User" ? 
                    {backgroundColor: "rgba(145, 158, 171, 0.16)", borderRadius: "0.4rem", color: "rgb(33, 43, 54)", padding: "0.7rem 1rem"} 
                    : {"&:hover": {backgroundColor: "rgba(145, 158, 171, 0.08)", cursor: "pointer"}, padding: "0.7rem 1rem"}}>
                {b.icon}
                <Typography variant="body1" sx={b.name === "User" ? {fontWeight: "700"} : {color: "rgb(99, 115, 129)"}}>{b.name}</Typography>
            </Grid>
        )
    })

    return (
        <Grid container rowGap={6} sx={{borderRight: "1px dashed rgb(99, 115, 129)", padding: "0 0.5rem", paddingTop: "4rem", width: "275px"}}>
            {/* User information */}
            <Grid 
                container 
                columnGap={2} 
                sx={
                    {alignItems: "center",
                    backgroundColor: "rgba(145, 158, 171, 0.12)",
                    borderRadius: "1rem",
                    padding: "1rem",
                    width: "230px"}
                }
            >
                <Avatar alt="Jaydon Frankie" src="src\assets\avatar_default.jpg" />
                <Typography>Jaydon Frankie</Typography>
            </Grid>
            
            <Grid container>
                {sidebarButtons}
            </Grid>
        </Grid>
    )
}