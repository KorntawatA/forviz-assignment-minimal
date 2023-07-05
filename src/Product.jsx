import { Box, Card, CardContent, CardMedia, ThemeProvider, Typography, createTheme } from "@mui/material";
import { productCard, customTypography } from "./theme/customTheme"

export default function Product(props) {

    console.log(customTypography)

    const productTheme = createTheme({
        components: {
            // productCard
            MuiCard: {
                variants: [
                    {
                        props: { variant: "product" },
                        style: {
                            borderRadius: "12px",
                            boxShadow: "0px 0px 8px gray",
                            width: "275px"
                        }
                    }
                ]
            }
        },
        typography: {
            // customTypography
            fontFamily: "Open Sans",
            subtitle1: {
                margin: "0px",
                fontWeight: "600",
                lineHeight: "1.5",
                fontSize: "1rem"
            },
            subtitle2: {
                margin: "0px",
                fontWeight: "600",
                lineHeight: "1.57143"
            }
        }
    })
    // console.log(productTheme)

    const colors = props.colors.map(c => {
        return (
            <Box sx={{
                backgroundColor: c, 
                border: "2px solid rgb(255, 255, 255)", 
                borderRadius: "50%",
                boxShadow: "rgba(0, 0, 0, 0.24) -1px 1px 2px inset", 
                height: "16px", 
                marginLeft: "-6px", 
                width: "16px"
            }}></Box>
        )
    })

    return (
        <ThemeProvider theme={productTheme}>
            <Card variant="product">
                <Box sx={{position: "relative"}}>
                    {/* Either specify height OR use component="img" */}
                    <CardMedia
                        sx={{ height: 250 }}
                        image={props.img}
                        // component="img"
                    />
                    <Typography 
                        sx={{
                            backgroundColor: props.tag === "NEW" ? "rgb(24, 144, 255)" : "rgb(255, 72, 66)",
                            borderRadius: "6px",
                            color: "white",
                            fontFamily: "Open Sans",
                            fontSize: "0.75rem",
                            letterSpacing: "0.03rem",
                            fontWeight: "700",
                            padding: props.tag === '' ? "0rem" : "0.2rem 0.6rem",
                            position: "absolute",
                            right: "7%",
                            top: "4%",
                        }} 
                        variant="body1"
                    >
                        {props.tag}
                    </Typography>
                </Box>
                <CardContent sx={{padding: "1rem"}}>
                    <Typography sx={{overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap"}} variant="subtitle1">
                        {props.name}
                    </Typography>
                    <Box sx={{display: "flex", alignItems: "flex-end", justifyContent: "space-between", paddingTop: "2rem"}}>
                        <Box sx={{display: "flex"}}>
                            {colors}
                        </Box>
                        {
                            props.discPrice === '' ?
                            <Typography variant="subtitle2">{`$${props.price}`}</Typography> :
                            <Box sx={{display: "flex", columnGap: "0.5rem"}}>
                                <Typography sx={{color:"gray", fontWeight: "400", textDecoration: "line-through"}} variant="subtitle2">{`$${props.price}`}</Typography>
                                <Typography variant="subtitle2">{`$${props.discPrice}`}</Typography>
                            </Box>
                        }
                    </Box>
                </CardContent>
            </Card>
        </ThemeProvider>
    )
}