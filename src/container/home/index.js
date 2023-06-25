import React from "react";
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import frontPageStyle from "./style";
import catogories from "./category";
import product from "./product";
import "./style.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Navbar from "../../component/navbar";
import Footer from "../../component/footer";

const slideImages = [
  {
    original: "https://amberstore.pk/uploads/159809924-web-banner-1.png",
  },
  {
    original: "https://amberstore.pk/uploads/265433598-web-banner-2.png",
  },
  {
    original:
      "https://amberstore.pk/uploads/795816936-61af9e66-520b-4021-804a-7f1a1a01dfe7.jpeg",
  },
  {
    original: "https://amberstore.pk/uploads/627627423-airpods-banner.jpg",
  },
];

const Home = () => {
  const classes = frontPageStyle();
  return (
    <div style={{ backgroundColor: "#f5f5f5" }}>
      <Navbar />
      <Box sx={{ width: "100%" }}>
        <ImageGallery
          items={slideImages}
          showFullscreenButton={false}
          showPlayButton={false}
          slideDuration={1000}
          slideInterval={1000}
          autoPlay={true}
        />
      </Box>
      <Box className={classes.cardDiv}>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Typography variant="h5">Categories</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5" sx={{ fontWeight: "bold !important" }}>
              See More
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={0.5} mt={2}>
          {catogories.map((elem, index) => {
            return (
              <Grid item xs={12} sm={4} md={2} key={index}>
                <div className="catogery_card">
                  <div className="card_circle">
                    <img src={elem.productPic} />
                  </div>
                  <div className="car_title">
                    <Typography mt={1.5} mb={2} className={classes.cardTitle}>
                      {elem.productName}
                    </Typography>
                  </div>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <Box className={classes.cardDiv}>
        <Grid container>
          <Grid item>
            <Typography variant="h5">Products</Typography>
          </Grid>
        </Grid>
        <Grid container mt={2} spacing={0.5}>
          {product.map((elem, index) => {
            return (
              <Grid item xs={12} sm={4} md={2} key={index}>
                <div className="product_card_hover">
                  <div className="product_card">
                    <div className="card_button">
                      <button>sale</button>
                    </div>
                    <div className="product_pic">
                      <img src={elem.productPic} />
                    </div>
                    <div className="product_title">
                      <Typography mt={1} sx={{ fontSize: "14px !important" }}>
                        {elem.productTitle}
                      </Typography>
                    </div>
                    <div className="product_price">
                      <Typography mt={1} variant="h5" sx={{ color: "#f57224" }}>
                        Rs.{elem.productPrice}
                      </Typography>
                    </div>
                    <div className="deleted_price">
                      <Typography
                        mt={1}
                        mb={4}
                        sx={{
                          color: "#a5a2a2",
                          fontSize: "14px",
                          textDecoration: "line-through",
                        }}
                      >
                        Rs.{elem.productDeletedPrice}
                      </Typography>
                    </div>
                  </div>
                </div>
              </Grid>
            );
          })}
        </Grid>
        <Grid container justifyContent="center" mt={4}>
          <Grid Item>
            <Button variant="contained" className={classes.loadButton}>
              Load More
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Footer/>
    </div>
  );
};

export default Home;
