import { AppBar, Avatar, Badge, Box, Button, Toolbar, Typography } from "@mui/material"
import Product from "./Product"
import imageURL1 from "/product-images/product_1.jpg"
const imgUrl = new URL('/product-images/product_2.jpg', import.meta.url).href
import FilterListIcon from '@mui/icons-material/FilterList';
import SideBar from './SideBar'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PublicIcon from '@mui/icons-material/Public';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function ProductMenu() {
    
    const productsInfo = [
        {img: imageURL1, tag: "NEW", name: "Nike Air Force 1 NDESTRUKT", colors: ["rgb(0, 171, 85)", "rgb(0, 0, 0)"], price: "85.84", discPrice: ''},
        {img: imgUrl, tag: "SALE", name: "Nike Space Hippie 04", colors: ["rgb(0, 0, 0)", "rgb(255, 255, 255)"], price: "26.10", discPrice: ''},
        {img: "/product-images/product_3.jpg", tag: '', name: "Nike Air Zoom Pegasus 37 A.I.R. C", colors: ["rgb(255, 255, 255)", "rgb(255, 192, 203)"], price: "19.75", discPrice: "5.07"},
        {img: "/product-images/product_4.jpg", tag: "SALE", name: "Nike Blazer Low 77 Vintage", colors: ["rgb(255, 192, 203)", "rgb(255, 72, 66)", "rgb(24, 144, 255)"], price: "58.96", discPrice: ''},
        {img: imageURL1, tag: "NEW", name: "Nike Air Force 1 NDESTRUKT", colors: ["rgb(0, 171, 85)", "rgb(0, 0, 0)"], price: "85.84", discPrice: ''},
        {img: imgUrl, tag: "SALE", name: "Nike Space Hippie 04", colors: ["rgb(0, 0, 0)", "rgb(255, 255, 255)"], price: "26.10", discPrice: ''},
        {img: "/product-images/product_3.jpg", tag: '', name: "Nike Air Zoom Pegasus 37 A.I.R. C", colors: ["rgb(255, 255, 255)", "rgb(255, 192, 203)"], price: "19.75", discPrice: "5.07"},
        {img: "/product-images/product_4.jpg", tag: "SALE", name: "Nike Blazer Low 77 Vintage", colors: ["rgb(255, 192, 203)", "rgb(255, 72, 66)", "rgb(24, 144, 255)"], price: "58.96", discPrice: ''}
    ]
    
    const products = productsInfo.map(p => <Product img={p.img} tag={p.tag} name={p.name} colors={p.colors} price={p.price} discPrice={p.discPrice} />)

    return (
        <Box sx={{display: "flex", alignItems: "flex-start", justifyContent: "space-between", backgroundColor: "#F3F4F9"}}>
            <Box>
                <SideBar />
            </Box>
            <Box sx={{backgroundColor: "white", borderTopLeftRadius: "1rem", borderBottomLeftRadius: "1rem", padding: "0.7rem", paddingRight: "1.5rem",  position: "fixed", top: "20%", right: "0%", zIndex: "3"}}>
                <Badge badgeContent={4} color="error">
                    <ShoppingCartIcon />
                </Badge>
            </Box>
            <Box sx={{padding: "2rem"}}>
                <AppBar sx={{backdropFilter: "blur(20px)"}} color="transparent" elevation={0} position="sticky">
                    <Toolbar sx={{display: "flex", justifyContent: "space-between"}}>
                        <SearchIcon />
                        <Box sx={{display: "flex", alignItems: "center", columnGap: "1.3rem"}}>
                            <PublicIcon />
                            <NotificationsIcon />
                            <Avatar alt="Jaydon Frankie" src="src\assets\avatar_default.jpg" />
                        </Box>
                    </Toolbar>
                </AppBar>
                <Box sx={{padding: "2rem", margin: "1rem 0"}}>
                    <Box>
                        <Typography sx={{fontWeight: "bold"}} variant="h4">Products</Typography>
                    </Box>
                    <Box sx={{display: "flex", justifyContent: "flex-end", margin: "2rem 0"}}>
                        <Button sx={{color: "black", fontWeight: "700", textTransform: "none"}} variant="text" endIcon={<FilterListIcon />}>Filters</Button>
                        <Button sx={{color: "black", fontWeight: "700", textTransform: "none"}} variant="text" endIcon={<KeyboardArrowDownIcon />}>Sort By: <Box sx={{color: "gray"}}>Newest</Box></Button>
                    </Box>
                    {/* Box for products */}
                    <Box sx={{display: "flex", flexWrap: "wrap", columnGap: "1.5rem", rowGap: "1.5rem", justifyContent: "center"}}>
                        {products}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}