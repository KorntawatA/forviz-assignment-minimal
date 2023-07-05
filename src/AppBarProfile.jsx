import { Avatar, Box, Divider, List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";

export default function AppBarProfile() {
    
    const [profileActive, setProfileActive] = React.useState(false);
    function toggleProfileActive() {
        setProfileActive(active => !active);
    }
    
    return (
        <Box sx={{position: "relative"}}>
            <Avatar alt="Jaydon Frankie" src="src\assets\avatar_default.jpg" onClick={toggleProfileActive} />

            {
                profileActive &&
                <Box 
                    sx={{
                        backgroundColor: "white",
                        borderRadius: "6px",
                        boxShadow: "rgba(145, 158, 171, 0.2) 0px 5px 5px -3px, rgba(145, 158, 171, 0.14) 0px 8px 10px 1px, rgba(145, 158, 171, 0.12) 0px 3px 14px 2px",
                        left: "-300%",
                        padding: "1rem",
                        position: "absolute",
                        top: "150%"
                    }}
                >
                    <Box>
                        <Typography variant="h6">Jaydon Frankie</Typography>
                        <Typography variant="body1">demo@minimals.cc</Typography>
                    </Box>
                    <Divider></Divider>
                    <List>
                        <ListItem>
                            <ListItemText primary="Home" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Profile" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="Settings" />
                        </ListItem>
                    </List>
                    <Divider></Divider>
                    <Box>
                        <List>
                            <ListItem>
                                <ListItemText primary="Logout" />
                            </ListItem>
                        </List>
                    </Box>
                </Box>
            }
        </Box>
    )
}