import styled from "@emotion/styled"
import { Box, Typography } from "@mui/material"

const CustomStatus = styled(Box, {
    shouldForwardProp: (prop) =>
    prop !== "isActive"
})(({isActive}) => { 
    return {
        backgroundColor: isActive === "Active" ? "#ccff90" : "#ff80ab",
        borderRadius: 4,
        color: isActive === "Active" ? "#00a152" : "#5f0937",
        padding: 6
    }
})

export default function UserStatus(props) {    
    return (
        <CustomStatus isActive={props.isActive}>
            <Typography variant="body1">{props.isActive}</Typography>
        </CustomStatus>
    )
}