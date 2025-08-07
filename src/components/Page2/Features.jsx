import { Box, Container, Typography, Card, IconButton } from "@mui/material";
import image1 from "../../assets/featuredcoaches/i1.jpg";
import image2 from "../../assets/featuredcoaches/i2.jpg";
import image3 from "../../assets/featuredcoaches/i3.png";
import image4 from "../../assets/featuredcoaches/i4.jpg";
import image5 from "../../assets/featuredcoaches/i5.png";
import image6 from "../../assets/featuredcoaches/i6.avif";
import SectionHeading from "../Common/SectionHeading";
import bg1 from "../../assets/bg1.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules"; // ✅ Import Pagination
import "swiper/css";
import "swiper/css/pagination"; // ✅ Add pagination styles
import { Add } from "@mui/icons-material";

const itemsData = [
  {
    title: "AI matching with the world’s top coaches",
    imgSrc: image1,
  },
  {
    title: "Coaching sessions anytime, anywhere",
    imgSrc: image5,
  },
  {
    title: "Personalize content for continuous growth",
    imgSrc: image6,
  },
  {
    title: "Measure what matters",
    imgSrc: image4,
  },
  {
    title: "Discover and Match",
    imgSrc: image2,
  },
  {
    title: "Track Progress",
    imgSrc: image3,
  },
];

const Features = () => {
  return (
    <Container maxWidth="xxl" sx={{ padding: '0px!important' }}>
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
          1280: { slidesPerView: 4 },
        }}
      >
        {itemsData.map((item, idx) => (
          <SwiperSlide key={idx}>
            <Box sx={{ px: 1 }}>
              <Card
                sx={{
                  height: 400,
                  borderRadius: 5,
                  overflow: "hidden",
                  position: "relative",
                  cursor: "pointer",
                }}
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
                        height: "100%",
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
                        px: 2,
                        py: 1.5,
                        background:
                          "linear-gradient(to bottom, rgba(34, 33, 33, 0.73), rgba(187, 182, 182, 0))",
                        zIndex: 2,
                      }}
                    >
                      <Typography
                        variant="subtitle1"
                        sx={{
                          color: "#fff",
                          fontWeight: 500,
                        }}
                        fontSize={20}
                      >
                        {item.title}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Icon at Bottom */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 16,
                      right: 16,
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
