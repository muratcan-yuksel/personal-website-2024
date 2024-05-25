import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Reviews = () => {
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
    <div
      style={{
        marginTop: "10em",
        backgroundColor: "red",
        width: "100%",
        height: "auto",
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
        <div
          style={{
            width: "100%",
            height: "100px",
          }}
        >
          {" "}
          <img
            style={{
              width: "100%",
            }}
            src="https://www.usnews.com/dims4/USNEWS/fb6e5fb/2147483647/crop/2000x1334+0+2/resize/970x647/quality/85/?url=https%3A%2F%2Fwww.usnews.com%2Fcmsmedia%2F65%2F62%2Fc9cb60d24ac89d56462b1228574a%2F201009-codingcomputer-stock.jpg"
          />{" "}
          1
        </div>
        <div
          style={{
            width: "100%",
            height: "100px",
          }}
        >
          {" "}
          <img
            style={{
              width: "100%",
            }}
            src="https://www.usnews.com/dims4/USNEWS/fb6e5fb/2147483647/crop/2000x1334+0+2/resize/970x647/quality/85/?url=https%3A%2F%2Fwww.usnews.com%2Fcmsmedia%2F65%2F62%2Fc9cb60d24ac89d56462b1228574a%2F201009-codingcomputer-stock.jpg"
          />{" "}
          1
        </div>
      </Carousel>
    </div>
  );
};

export default Reviews;
