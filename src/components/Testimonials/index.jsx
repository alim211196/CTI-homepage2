import React, { useState } from "react";
import Slider from "react-slick";
import {
  Container,
  Typography,
  Box,
  Avatar,
  Stack,
  IconButton,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../assets/Testimonials/image1.jpg";
import image2 from "../../assets/Testimonials/image2.jpg";
import image3 from "../../assets/Testimonials/image3.jpg";
import image4 from "../../assets/Testimonials/image4.jpg";
import image5 from "../../assets/Testimonials/image5.jpg";
import image6 from "../../assets/Testimonials/image6.jpg";
import quoteIcon from "../../assets/Testimonials/quote-icon.svg";
import bgDots from "../../assets/Testimonials/map-dot.png";
const testimonials = [
  {
    name: "Sara William",
    role: "Content Writing",
    image: image1,
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di nonumy eirmod tempor invidunt ut labore et dolor magn aliq erat.",
  },
  {
    name: "Elena Swift",
    role: "SEO Specialist",
    image: image2,
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di nonumy eirmod tempor labore et dolore magna.",
  },
  {
    name: "John Doe",
    role: "SEO Specialist",
    image: image3,
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di nonumy eirmod tempor labore et dolore magna.",
  },
  {
    name: "Lisa William",
    role: "Content Writing",
    image: image4,
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di nonumy eirmod tempor invidunt ut labore et dolor magn aliq erat.",
  },
  {
    name: "Josh Swift",
    role: "SEO Specialist",
    image: image5,
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di nonumy eirmod tempor labore et dolore magna.",
  },
  {
    name: "Stella Doe",
    role: "SEO Specialist",
    image: image6,
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed di nonumy eirmod tempor labore et dolore magna.",
  },
];


const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "45%",
        right: 0,
        transform: "translateY(-50%)",
        zIndex: 1,
        bgcolor: "neutral.white",
        color: "primary.light",
        boxShadow: 3,
        "&:hover": {
          bgcolor: "primary.light",
          color: "neutral.white",
        },
      }}
    >
      <ArrowForwardIos fontSize="small" />
    </IconButton>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "45%",
        left: 0,
        transform: "translateY(-50%)",
        zIndex: 1,
        bgcolor: "neutral.white",
        color: "primary.light",
        boxShadow: 3,
        "&:hover": {
          bgcolor: "primary.light",
          color: "neutral.white",
        },
      }}
    >
      <ArrowBackIos fontSize="small" />
    </IconButton>
  );
};

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (oldIndex, newIndex) => setActiveSlide(newIndex),
  };

  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          py: { xs: 8, md: 10 },
          overflow: "hidden",
          backgroundImage: `url(${bgDots})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: {
            xs: "cover", // cover full area on small screens
            sm: "contain", // keep aspect ratio on medium+
            md: "contain",
          },
        }}
      >
        {/* Header */}
        <Box textAlign="center" mb={10}>
          <Typography variant="h4" fontWeight={700}>
            Our{" "}
            <Box component="span" color="primary.light">
              Testimonials
            </Box>
          </Typography>
        </Box>

        {/* Testimonials Slider */}
        <Box
          sx={{
            p: { xs: 8, md: 5 },
            maxWidth: "100%",
            mx: "auto",
            position: "relative",
          }}
          mt={4}
        >
          <Slider {...settings}>
            {testimonials.map((item, index) => (
              <Box key={index} px={2}>
                <Box textAlign="center" sx={{ maxWidth: 800, mx: "auto" }}>
                  <img
                    src={quoteIcon}
                    alt="Quote"
                    style={{ width: 40, margin: "auto" }}
                  />
                  <Typography variant="h6" mt={3} mb={6} fontWeight={400}>
                    {item.text}
                  </Typography>
                  <Stack alignItems="center">
                    <Typography variant="h6">{item.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.role}
                    </Typography>
                  </Stack>
                </Box>
              </Box>
            ))}
          </Slider>
        </Box>

        {/* Avatar Highlights */}
        <Box
          mt={6}
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          gap={{ xs: 4, sm: 6, md: 8 }}
        >
          {testimonials.map((item, idx) => {
            const isActive = idx === activeSlide;

            return (
              <Box
                key={item.name}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Avatar
                  src={item.image}
                  alt={item.name}
                  sx={{
                    width: {
                      xs: isActive ? 70 : 50,
                      sm: isActive ? 90 : 60,
                      md: isActive ? 110 : 70,
                    },
                    height: {
                      xs: isActive ? 70 : 50,
                      sm: isActive ? 90 : 60,
                      md: isActive ? 110 : 70,
                    },
                    border: "2px solid",
                    borderColor: "primary.light",
                    boxShadow: isActive
                      ? "0 0 0 8px rgba(203,28,27,0.2)"
                      : "none",
                    transition: "all 0.3s ease",
                    transform: {
                      xs:
                        idx % 2 === 0
                          ? "translateY(-20px)"
                          : "translateY(20px)",
                      sm:
                        idx % 2 === 0
                          ? "translateY(-30px)"
                          : "translateY(30px)",
                      md:
                        idx % 2 === 0
                          ? "translateY(-35px)"
                          : "translateY(35px)",
                      lg:
                        idx % 2 === 0
                          ? "translateY(-40px)"
                          : "translateY(40px)",
                    },
                  }}
                />
              </Box>
            );
          })}
        </Box>
      </Box>
    </Container>
  );
};

export default Testimonials;
