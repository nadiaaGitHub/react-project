import React from 'react'
import { Box, Grid, TextField } from '@mui/material'
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import navbarStyle from './style'

const Navbar = () => {

    const classes=navbarStyle()

  return (
    <Box
    sx={{ height: "70px", backgroundColor: "rgb(255,255,255)" }}
    justifyContent="center"
  >
    <Grid container alignItems={"center"}>
      <Grid item xs={3} textAlign="center">
        <img
          src="https://amberstore.pk/static/media/web-logo.5887bfe9.png"
          height="70px"
          width="100px"
        />
      </Grid>
      <Grid item xs={8}>
        <Box sx={{ width: "95%", display: "flex" }}>
          <TextField
            className={classes.textFieldStyle}
            size="small"
            placeholder="search in store"
            fullWidth
          />
          <SearchIcon className={classes.SearchIcon} />
        </Box>
      </Grid>
      <Grid item xs={1}>
        <ShoppingCartOutlinedIcon className={classes.shoppingCart} />
      </Grid>
    </Grid>
  </Box>
  )
}

export default Navbar
