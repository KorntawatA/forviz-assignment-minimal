import { createTheme } from "@mui/material";

export const productTheme = createTheme({
    components: {
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