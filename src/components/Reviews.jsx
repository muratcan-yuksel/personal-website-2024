import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
//import review images
import review1 from "../assets/images/reviews/1.png";
import review2 from "../assets/images/reviews/2.png";
import review3 from "../assets/images/reviews/3.png";
import review4 from "../assets/images/reviews/4.png";
import review5 from "../assets/images/reviews/5.png";
import review6 from "../assets/images/reviews/6.png";
import review7 from "../assets/images/reviews/7.png";
import review8 from "../assets/images/reviews/8.png";
import review9 from "../assets/images/reviews/9.png";
import bigReview from "../assets/images/reviews/bigone.png";
import { Box, Typography } from "@mui/material";
const Reviews = () => {
  const reviews = [
    {
      image: review9,
    },

    {
      image: review4,
    },
    {
      image: review8,
    },

    {
      image: review7,
    },
    {
      image: review6,
    },
    {
      image: review5,
    },
    {
      image: review1,
    },
  ];

  const renderReviews = () => {
    return reviews.map((review) => {
      return (
        <Box
          key={review.image}
          sx={{
            width: "100%",
            height: "350px",
          }}
        >
          {" "}
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
            src={review.image}
          />{" "}
          1
        </Box>
      );
    });
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Box
      sx={{
        backgroundColor: "white",
        width: "100%",
        height: "auto",
        margin: "5em 0 0 0",
        paddingBottom: "1em",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {" "}
      <Box
        sx={{
          width: {
            xs: "90%",
            sm: "80%",
            md: "60%",
            lg: "60%",
          },
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: 0,
          color: "#001c46",
          textAlign: "center",
          fontWeight: "medium",
          marginTop: "2em",

          borderBottom: "3px solid #001c46",
        }}
      >
        <Typography
          sx={{
            color: "#001c46",
            fontSize: "2em",

            width: "auto",
            textAlign: {
              xs: "center",
              lg: "start",
            },
            lineHeight: "1.1em",
          }}
        >
          What clients say about me
        </Typography>
      </Box>
      <Box
        sx={{
          width: "80%",
        }}
      >
        {" "}
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          // customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          //   deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {renderReviews()}
        </Carousel>
      </Box>
      {/* <Box>
        <img src={bigReview} style={{ width: "100%" }} />
      </Box> */}
    </Box>
  );
};

export default Reviews;
