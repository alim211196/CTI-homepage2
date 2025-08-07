import { Box, Container, Typography, Card, IconButton } from "@mui/material";
import image1 from "../../assets/featuredcoaches/f1.jpeg";
import image2 from "../../assets/featuredcoaches/f2.jpeg";
import image3 from "../../assets/featuredcoaches/f3.jpeg";
import image4 from "../../assets/featuredcoaches/f4.jpeg";
import image5 from "../../assets/featuredcoaches/f5.jpeg";
import image6 from "../../assets/featuredcoaches/f6.jpeg";
import SectionHeading from "../Common/SectionHeading";
import bg1 from "../../assets/bg1.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules"; // ✅ Import Pagination
import "swiper/css";
import "swiper/css/pagination"; // ✅ Add pagination styles
import { Add } from "@mui/icons-material";

const itemsData = [
  {
    title: "Find your perfect coach",
    imgSrc: image1,
  },
  {
    title: "Coach Details",
    imgSrc: image2,
  },
  {
    title: "Your coach matches",
    imgSrc: image3,
  },
  {
    title: "Online meetings",
    imgSrc: image4,
  },
  {
    title: "Find your ideal coach",
    imgSrc: image5,
  },
  {
    title: "Get Blood Pressure Insights",
    imgSrc: image6,
  },
];

const Features = () => {
  return (
    <Container maxWidth="xxl" sx={{ padding: "0px!important" }}>
      <Box
        sx={{
          px: 4,
          py: { xs: 8, md: 8 },
          overflow: "hidden",
          backgroundImage: `url(${bg1})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: {
            xs: "cover",
            sm: "contain",
            md: "contain",
          },
        }}
      >
        {/* Header */}
        <Box textAlign="center">
          <SectionHeading title={"Platform"} subtitle={"Features"} />
          <Typography variant="body1" mt={1} color="black">
            Our streamlined process connects you with the right coach in
            minutes, not weeks. Simple, effective, and designed for results.
          </Typography>
        </Box>
      </Box>

      <Swiper
        spaceBetween={20}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }} // ✅ Show dots
        modules={[Autoplay, Pagination]} // ✅ Register modules
        style={{ paddingBottom: "70px" }}
        breakpoints={{
          0: { slidesPerView: 1.2 },
          600: { slidesPerView: 2 },
          960: { slidesPerView: 3 },
          1280: { slidesPerView: 3 },
        }}
      >
        {itemsData.map((item, idx) => (
          <SwiperSlide key={idx}>
            <Box sx={{ px: 0 }}>
              <Card
                sx={{
                  // height: 400,
                  borderRadius: 5,
                  overflow: "hidden",
                  position: "relative",
                  cursor: "pointer",
                }}
                elevation={0}
              >
                <Box
                  sx={{
                    position: "relative",
                    height: "100%",
                  }}
                >
                  {/* Image with Title Overlay */}
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      position: "relative",
                    }}
                  >
                    {/* Image */}
                    <Box
                      component="img"
                      src={item.imgSrc}
                      alt={item.title}
                      sx={{
                        width: "100%",
                        height: "400px",
                        objectPosition: "top",
                        objectFit: "cover",
                        transition: "transform 0.4s ease",
                        ".MuiCard-root:hover &": {
                          transform: "scale(1.15)",
                        },
                      }}
                    />

                    {/* Gradient + Title */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        p: 2,
                        background:
                          "linear-gradient(180deg, hsla(0, 0%, 100%, .8) 65%, hsla(0, 0%, 100%, 0))",
                        zIndex: 2,
                      }}
                    >
                      <Typography
                        variant="subtitle1"
                        sx={{
                          color: "#000",
                          fontWeight: "bold",
                          width: "90%",
                        }}
                        fontSize={24}
                      >
                        {item.title}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Icon at Bottom */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 24,
                      right: 24,
                      zIndex: 3,
                    }}
                  >
                    <IconButton
                      sx={{
                        color: "neutral.black",
                        bgcolor: "neutral.white",
                        "&:hover": {
                          bgcolor: "neutral.white",
                        },
                      }}
                    >
                      <Add />
                    </IconButton>
                  </Box>
                </Box>
              </Card>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Features;
