import React, { useRef } from "react";
import { Box, Typography, Button, Container, Grid } from "@mui/material";
import { styled } from "@mui/system";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Autoplay } from "swiper/modules";
// import pic1 from "../../assets/herosection/hero5.webp";
// import pic2 from "../../assets/herosection/hero3.webp";
// import pic3 from "../../assets/herosection/hero1.webp";
// import pic4 from "../../assets/herosection/hero2.webp";
// import pic5 from "../../assets/herosection/hero4.webp";
// import pic6 from "../../assets/herosection/hero6.jpg";
// import image8 from "../../assets/herosection/image8.jpg";
// import image9 from "../../assets/herosection/image9.jpeg";

import pic1 from "../../assets/herosection/1.jpeg";
import pic2 from "../../assets/herosection/2.jpeg";
import pic3 from "../../assets/herosection/3.jpeg";
import pic4 from "../../assets/herosection/4.jpeg";
import pic5 from "../../assets/herosection/5.jpeg";
import pic6 from "../../assets/herosection/6.jpeg";
import pic7 from "../../assets/herosection/7.jpeg";
import pic8 from "../../assets/herosection/8.jpeg";
import pic9 from "../../assets/herosection/9.jpeg";
import pic10 from "../../assets/herosection/10.jpeg";
import pic11 from "../../assets/herosection/11.jpeg";
import bannerBg from "../../assets/banner-bg.png";

const images = [
  {
    id: 1,
    src: pic1,
    tag: "CPCC ELITE PLUS",
    name: "John Doe",
    role: "Executive Leadership Coach",
  },
  {
    id: 2,
    src: pic2,
    tag: "CPCC ELITE",
    name: "Kai Petrov",
    role: "Career Transition Specialist",
  },
  {
    id: 3,
    src: pic3,
    tag: "CPCC ELITE PLUS",
    name: "John Desuza",
    role: "Wellness & Performance Coach",
  },
  {
    id: 4,
    src: pic4,
    tag: "CPCC ELITE PLUS",
    name: "Alex John",
    role: "Executive Leadership Coach",
  },
  {
    id: 5,
    src: pic5,
    tag: "CPCC ELITE",
    name: "Steve Doe",
    role: "Executive Leadership Coach",
  },
  {
    id: 6,
    src: pic6,
    tag: "CPCC ELITE PLUS",
    name: "Lim Petrov",
    role: "Career Transition Specialist",
  },
  {
    id: 7,
    src: pic7,
    tag: "CPCC ELITE",
    name: "Mark Desuza",
    role: "Wellness & Performance Coach",
  },
  {
    id: 8,
    src: pic8,
    tag: "CPCC ELITE PLUS",
    name: "Sam John",
    role: "Executive Leadership Coach",
  },
  {
    id: 9,
    src: pic9,
    tag: "CPCC",
    name: "Jim John",
    role: "Wellness & Performance Coach",
  },
  {
    id: 10,
    src: pic10,
    tag: "CPCC POWER",
    name: "Josh John",
    role: "Executive Leadership Coach",
  },
  {
    id: 11,
    src: pic11,
    tag: "CPCC ELITE",
    name: "Josh John",
    role: "Wellness & Performance Coach",
  },
];

const tagGradients = {
  CPCC: {
    background: "linear-gradient(to right, #45d1fcff, #1dfd28ff)",
    color: "#fff",
  },
  "CPCC ELITE PLUS": {
    background: "linear-gradient(to right, #fcb045, #fd1d1d)",
    color: "#fff",
  },
  "CPCC ELITE": {
    background: "linear-gradient(to right, #b24592, #f15f79)",
    color: "#fff",
  },
  "CPCC POWER": {
    background: "linear-gradient(to right, #36D1DC, #5B86E5)",
    color: "#fff",
  },
};

// MUI styled component for hero section
const HeroContainer = styled(Box)(({ theme }) => ({
  textAlign: "center",
  padding: theme.spacing(8, 2, 6),
}));

export default function Herosection() {
  const swiperRef = useRef(null);

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
        <Typography variant="h3" fontWeight={600} gutterBottom sx={{ mt: 10 }}>
          Your Gateway to <br /> Coaching Excellence
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          maxWidth="sm"
          mx="auto"
          gutterBottom
        >
          Transform Your Organization Through Coaching Excellence.
          <br /> Connect with world-class certified coaches and unlock your
          team's potential.
        </Typography>
        <Box
          mt={4}
          display="flex"
          justifyContent="center" // ✅ Center horizontally
          alignItems="center" // ✅ Center vertically (optional)
          gap={5} // ✅ Gap between buttons
          flexWrap="wrap" // ✅ Optional: wrap buttons on small screens
        >
          <Button
            sx={{
              width: 270,
              cursor: "pointer",
              borderRadius: "999px",
              px: 2.5,
              py: 0.8,
              fontWeight: 600,
              fontSize: {
                xs: "0.8rem",
                sm: "0.9rem",
              },
              transition: "all 0.4s ease",
              transform: "scale(1)",
              background: "linear-gradient(90deg, #FF6A5B 0%, #FF914D 100%)",
              color: "white",
              border: "1px solid transparent",
              textAlign: "center",
              boxShadow: "0 3px 10px rgba(255, 105, 80, 0.3)",
              "&:hover": {
                transform: "scale(1.05)",
                background: "linear-gradient(90deg, #FF914D 0%, #FF6A5B 100%)",
                boxShadow: "0 5px 16px rgba(255, 105, 80, 0.4)",
              },
            }}
          >
            Get Started Today
          </Button>

          <Button
            sx={{
              width: 270,
              cursor: "pointer",
              borderRadius: "999px",
              px: 2.5,
              py: 0.8,
              fontWeight: 600,
              fontSize: {
                xs: "0.8rem",
                sm: "0.9rem",
              },
              transition: "all 0.4s ease",
              transform: "scale(1)",
              background: "transparent",
              color: "#FF6A5B",
              border: "1px solid #FF6A5B",
              textAlign: "center",
              boxShadow: "none",
              "&:hover": {
                transform: "scale(1.05)",
                background: "rgba(255, 106, 91, 0.1)",
                boxShadow: "0 2px 4px rgba(255, 105, 80, 0.2)",
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
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          initialSlide={4}
          coverflowEffect={{
            rotate: 30,
            stretch: -30,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Autoplay]}
          onSwiper={(swiper) => (swiperRef.current = swiper)} // Capture the swiper instance
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
              onMouseEnter={() => swiperRef.current?.autoplay?.stop()} // Stop on hover
              onMouseLeave={() => swiperRef.current?.autoplay?.start()} // Resume on leave
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
                <Box
                  sx={{
                    mt: 0.8,
                    borderRadius: "999px",
                    px: 1.4,
                    py: 0.3,
                    fontSize: "0.75rem",
                    display: "inline-block",
                    fontWeight: 600,
                    ...(tagGradients[img.tag] || {
                      backgroundColor: "#e0e0e0",
                      color: "#333",
                    }),
                    position: "absolute",
                    top: 8,
                    left: 8,
                  }}
                >
                  {img.tag}
                </Box>
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
                    alignItems: "flex-start",
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
