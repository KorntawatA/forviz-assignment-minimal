import { Box, Grid } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import PublicIcon from '@mui/icons-material/Public';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AppBarProfile from "./AppBarProfile";

export default function AppBar() {
    return (
        <Box sx={{display: "flex", justifyContent: "space-between", width: "75vw", position: "relative", zIndex: "999"}}>
            <SearchIcon />
            <Box sx={{display: "flex", alignItems: "center", columnGap: "1.3rem"}}>
                <PublicIcon />
                <NotificationsIcon />
                <AppBarProfile />
            </Box>
        </Box>
    )
}