import React from "react";
import { Box, Typography, Button, Container, Grid } from "@mui/material";
import { styled } from "@mui/system";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import pic1 from "../../assets/herosection/hero5.webp";
import pic2 from "../../assets/herosection/hero3.webp";
import pic3 from "../../assets/herosection/hero1.webp";
import pic4 from "../../assets/herosection/hero2.webp";
import pic5 from "../../assets/herosection/hero4.webp";
import pic6 from "../../assets/herosection/hero6.jpg";
import image8 from "../../assets/herosection/image8.jpg";
import image9 from "../../assets/herosection/image9.jpeg";
import bannerBg from "../../assets/banner-bg.png";

const images = [
  {
    id: 1,
    src: pic1,
    tag: "coach",
    name: "John Doe",
    role: "Executive Leadership Coach",
  },
  {
    id: 2,
    src: pic2,
    tag: "coach",
    name: "Kai Petrov",
    role: "Career Transition Specialist",
  },
  {
    id: 3,
    src: pic3,
    tag: "coach",
    name: "John Desuza",
    role: "Wellness & Performance Coach",
  },
  {
    id: 4,
    src: pic4,
    tag: "coach",
    name: "Alex John",
    role: "Executive Leadership Coach",
  },
  {
    id: 5,
    src: pic5,
    tag: "coach",
    name: "Steve Doe",
    role: "Executive Leadership Coach",
  },
  {
    id: 6,
    src: pic6,
    tag: "coach",
    name: "Lim Petrov",
    role: "Career Transition Specialist",
  },
  {
    id: 7,
    src: image8,
    tag: "coach",
    name: "Mark Desuza",
    role: "Wellness & Performance Coach",
  },
  {
    id: 8,
    src: image9,
    tag: "coach",
    name: "Sam John",
    role: "Executive Leadership Coach",
  },
];

// MUI styled component for hero section
const HeroContainer = styled(Box)(({ theme }) => ({
  textAlign: "center",
  padding: theme.spacing(8, 2, 6),
}));

export default function Herosection() {
  return (
    <Box
      sx={{
        top: -110,
        position: "relative",
        backgroundImage: `url(${bannerBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: {
          xs: "cover", // cover full area on small screens
          sm: "contain", // keep aspect ratio on medium+
          md: "contain",
        },
        backgroundPosition: {
          xs: "top center", // better alignment on small screens
          md: "right center",
        },
      }}
    >
      {/* Hero Section */}
      <HeroContainer>
        <Typography variant="h3" fontWeight={600} gutterBottom sx={{ mt: 10}}>
          Your Gateway to <br /> Coaching Excellence
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          maxWidth="sm"
          mx="auto"
          gutterBottom
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore.
        </Typography>
        <Box mt={4}>
          <Button
            variant="contained"
            size="medium"
            sx={{
              px: 3,
              py: 1,
              fontWeight: 600,
              borderRadius: 1,
              m: 2,
              backgroundColor: "#CB1C1B",
              color: "#fff",
              transition: "transform 0.3s ease, opacity 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
                backgroundColor: "#85151C",
              },
            }}
          >
            Get Started Today
          </Button>
          <Button
            variant="outlined"
            size="medium"
            sx={{
              px: 3,
              py: 1,
              fontWeight: 600,
              borderRadius: 2,
              m: 1,
              color: "#FF4939",
              border: "1px solid",
              borderColor: "#FF4939",
              backgroundColor: "transparent",
              transition: "transform 0.3s ease, opacity 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
                backgroundColor: "#CB1C1B",
                color: "#fff",
                borderColor: "#CB1C1B",
              },
            }}
          >
            Learn More
          </Button>
        </Box>
        {/* Swiper Section */}
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          initialSlide={4} // Center slide 5
          coverflowEffect={{
            rotate: 30,
            stretch: -30,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[EffectCoverflow]}
          style={{
            width: "100%",
            paddingTop: "50px",
            paddingBottom: "50px",
          }}
        >
          {images.map((img) => (
            <SwiperSlide
              key={img.id}
              style={{
                backgroundPosition: "center",
                backgroundSize: "cover",
                width: "300px",
                height: "400px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
              >
                {/* Image */}
                <img
                  src={img.src}
                  alt={`slide-${img.id}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />

                {/* Top-left Tag */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 8,
                    left: 8,
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                    color: "#fff",
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    px: 1.5,
                    py: 0.5,
                    borderRadius: "4px",
                    textTransform: "uppercase",
                  }}
                >
                  {img.tag}
                </Box>

                {/* Bottom Overlay */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: "rgba(0, 0, 0, 0.3)",
                    color: "#fff",
                    px: 2,
                    py: 1.5,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start", // Align to the left
                    textAlign: "left",
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    sx={{ lineHeight: 1.2 }}
                  >
                    {img.name}
                  </Typography>
                  <Typography variant="caption" sx={{ opacity: 0.85 }}>
                    {img.role}
                  </Typography>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </HeroContainer>
    </Box>
  );
}
