import React, { useState, useRef } from "react";
import Slider from "react-slick";
import {
  Container,
  Typography,
  Box,
  Avatar,
  Stack,
  IconButton,
  keyframes,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { motion, useInView } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from "../../assets/herosection/image1.png";
import image2 from "../../assets/herosection/image2.png";
import image3 from "../../assets/herosection/image3.png";
import image4 from "../../assets/herosection/image4.png";
import image5 from "../../assets/herosection/image1.png";
import image6 from "../../assets/herosection/image2.png";
import image7 from "../../assets/herosection/image3.png";
import quoteIcon from "../../assets/testimonials/quote-icon.svg";
import bgDots from "../../assets/testimonials/map-dot.png";
import SectionHeading from "../Common/SectionHeading";

// Testimonials Data
const testimonials = [
  {
    name: "Ahmed Al-Rashid",
    role: "CEO, Emirates Solutions",
    image: image1,
    text: "Coaches coaching transformed our leadership culture. The results speak for themselves - 40% improvement in team engagement.",
  },
  {
    name: "Fatima Al-Zahra",
    role: "VP Marketing, Gulf Industries",
    image: image2,
    text: "The coach matching process was incredibly precise. We found the perfect fit for our team development needs.",
  },
  {
    name: "Omar Hassan",
    role: "Entrepreneur",
    image: image3,
    text: "The organizational needs assessment helped us identify blind spots we never knew existed. Game-changing insights.",
  },
  {
    name: "Ahmed Al-Rashid",
    role: "CEO, Emirates Solutions",
    image: image4,
    text: "Coaches coaching transformed our leadership culture. The results speak for themselves - 40% improvement in team engagement.",
  },
  {
    name: "Fatima Al-Zahra",
    role: "VP Marketing, Gulf Industries",
    image: image5,
    text: "The organizational needs assessment helped us identify blind spots we never knew existed. Game-changing insights.",
  },
  {
    name: "Stella Doe",
    role: "SEO Specialist",
    image: image6,
    text: "The organizational needs assessment helped us identify blind spots we never knew existed. Game-changing insights.",
  },
  {
    name: "Omar Hassan",
    role: "Entrepreneur",
    image: image7,
    text: "The organizational needs assessment helped us identify blind spots we never knew existed. Game-changing insights.",
  },
];

// Bubble animation keyframes
const bubbleAnim = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.08); }
  100% { transform: scale(1); }
`;

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
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (oldIndex, newIndex) => setActiveSlide(newIndex),
  };

  const handleAvatarClick = (index) => {
    setActiveSlide(index);
    sliderRef.current.slickGoTo(index);
  };

  // Scroll Animation Refs
  const headingRef = useRef(null);
  const sliderRefBox = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: true, margin: "-100px" });
  const isSliderInView = useInView(sliderRefBox, { once: true, margin: "-100px" });

  return (
    <Container maxWidth="xxl">
      <Box
        sx={{
          py: { xs: 8, md: 10 },
          overflow: "hidden",
          backgroundImage: `url(${bgDots})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: {
            xs: "cover",
            sm: "contain",
            md: "contain",
          },
        }}
      >
        {/* Heading */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Box textAlign="center" >
            <SectionHeading title={"Our"} subtitle={"Testimonials"} />

          </Box>
        </motion.div>

        {/* Slider Section */}
        <motion.div
          ref={sliderRefBox}
          initial={{ opacity: 0, y: 50 }}
          animate={isSliderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Box
            sx={{
              p: { xs: 8, md: 5 },
              maxWidth: "100%",
              mx: "auto",
              position: "relative",
            }}
          >
            <Slider {...settings} ref={sliderRef}>
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
                      <Typography variant="body2" color="black">
                        {item.role}
                      </Typography>
                    </Stack>
                  </Box>
                </Box>
              ))}
            </Slider>
          </Box>
        </motion.div>

        {/* Avatar List */}
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
                key={item.name + idx}
                onClick={() => handleAvatarClick(idx)}
                sx={{
                  cursor: "pointer",
                  animation: isActive ? `${bubbleAnim} 2s infinite` : "none",
                }}
              >
                <Avatar
                  src={item.image}
                  alt={item.name}
                  sx={{
                    width: {
                      xs: isActive ? 90 : 70,
                      sm: isActive ? 110 : 85,
                      md: isActive ? 130 : 100,
                    },
                    height: {
                      xs: isActive ? 90 : 70,
                      sm: isActive ? 110 : 85,
                      md: isActive ? 130 : 100,
                    },
                    border: "2px solid",
                    borderColor: isActive ? "primary.light" : "grey.300",
                    boxShadow: isActive
                      ? "0 0 0 8px rgba(203,28,27,0.2)"
                      : "none",
                    transition: "transform 0.3s ease-in-out",
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
                    "&:hover": {
                      transform: "scale(1.1)",
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
