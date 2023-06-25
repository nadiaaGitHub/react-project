import React from "react";
import { Box } from "@mui/system";
import { Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
import paypal from "../../assets/paypal.png";
import visa from "../../assets/visa.png";
import easy from "../../assets/easyPaise.png";
import jazz from "../../assets/jazzcash.jpg";
import cool from "../../assets/cool.jpg";
import applestore from "../../assets/applestore.jpg";
import facebook from "../../assets/facebbok.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import youtube from "../../assets/youtube.png";
import { styled } from "@mui/material/styles";
import footerStyle from "./style";

const Footer = () => {
  const classes = footerStyle();

  return (
    <Box className={classes.footer}>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={6} md={2}>
          <Box className={classes.sceenLinks}>
            <Typography variant="body1">Amber Store</Typography>
            <globalStyle />
            <List className={classes.screenLinks}>
              <ListItem disablePadding>
                <ListItemText primary="Home"/>
              </ListItem>
              <ListItem disablePadding>
                <ListItemText primary="Categories" />
              </ListItem>
              <ListItem disablePadding>
                <ListItemText primary="Login" />
              </ListItem>
              <ListItem disablePadding>
                <ListItemText primary="Sign Up" />
              </ListItem>
              <ListItem disablePadding>
                <ListItemText primary="Cart" />
              </ListItem>
              <ListItem disablePadding>
                <ListItemText primary="About Us" />
              </ListItem>
            </List>
          </Box>
          <div className="payments_link">
            <img src={paypal} width="16%" style={{ marginLeft: "2px" }} />
            <img src={visa} width="16%" style={{ marginLeft: "2px" }} />
            <img src={easy} width="16%" style={{ marginLeft: "2px" }} />
            <img src={jazz} width="16%" style={{ marginLeft: "2px" }} />
            <img src={cool} width="16%" style={{ marginLeft: "2px" }} />
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={5}>
          <Box>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.2806351458776!2d67.02683281431986!3d24.854263051628486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33fb3d4829cd3%3A0xb14f6b89f6d26466!2sAmberStore.Pk!5e0!3m2!1sen!2s!4v1678179475439!5m2!1sen!2s"
              width="100%"
              height="300px"
              style={{ boredr: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box textAlign="center" sx={{ padding: "10px" }}>
            <Typography variant="body1" mt={1.5}>
              Need Help ?
            </Typography>
            <Typography variant="body1" mt={1.5} sx={{ color: "gray" }}>
              call u{" "}
              <span style={{ color: "white" }}>
                +923432535307 / +923110242139
              </span>
            </Typography>
            <Typography variant="body1" mt={1.5} sx={{ color: "gray" }}>
              Email us{" "}
              <span style={{ color: "white" }}>admin@amberstore.pk</span>
            </Typography>
            <Typography variant="body1" mt={1.5} sx={{ color: "gray" }}>
              If Any Complain Call / WhatsApp Us :
              <span style={{ color: "white" }}>0318 6335306</span>
            </Typography>
            <Box mt={1.5}>
              <img src={applestore} className="store_links" />
              <img src={applestore} className="store_links" />
            </Box>
            <Box mt={1.5}>
              <img src={facebook} width="10%" />
              <img src={instagram} width="10%" />
              <img src={youtube} width="10%" />
              <img src={twitter} width="10%" />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
