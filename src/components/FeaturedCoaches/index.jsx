import React from "react";
import {
  Container,
  Box,
  Card,
  Typography,
  Avatar,
  IconButton,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Facebook, LinkedIn, Instagram } from "@mui/icons-material";
import image1 from '../../assets/featuredcoaches/image1.jpg';
import image2 from '../../assets/featuredcoaches/image2.jpg';
import image3 from '../../assets/featuredcoaches/image3.jpg';
import image4 from '../../assets/featuredcoaches/image4.jpg';
const coaches = [
  {
    name: "Polina Kerston",
    role: "English coach",
    image: image1,
  },
  {
    name: "Faadi Al Rahman",
    role: "Instructor",
    image: image2,
  },
  {
    name: "Chikelu Obasea",
    role: "Art coach",
    image: image3,
  },
  {
    name: "Katayama Fumiki",
    role: "Coach",
    image: image4,
  },
  {
    name: "Polina Kerston2",
    role: "English coach",
    image: image1,
  },
  {
    name: "Faadi Al Rahman2",
    role: "Instructor",
    image: image2,
  },
  {
    name: "Chikelu Obasea2",
    role: "Art coach",
    image: image3,
  },
  {
    name: "Katayama Fumiki2",
    role: "Coach",
    image: image4,
  },
];


const FeaturedCoaches = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ py: { xs: 8, md: 5 } }}>
        {/* Header */}
        <Box textAlign="center" mb={6}>
          <Typography variant="h4" fontWeight={700}>
            Featured{" "}
            <Box component="span" color="primary.light">
              Coaches
            </Box>
          </Typography>
          <Typography variant="body1" mt={1} color="text.secondary">
            Nunc consectetur ex nunc, id porttitor leo semper eget. Vivamus
            interdum, mauris quis cursus sodales, urn
          </Typography>
        </Box>

        {/* Coaches Swiper */}
        <Swiper
          spaceBetween={20}
          autoplay={{ delay: 3000, disableOnInteraction: false }} // ✅ Autoplay config
          modules={[Autoplay]} // ✅ Register autoplay module
          breakpoints={{
            0: { slidesPerView: 1.2 },
            600: { slidesPerView: 2 },
            960: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {coaches.map((coach, idx) => (
            <SwiperSlide key={idx}>
              <Box sx={{ px: 1 }}>
                <Card
                  sx={{
                    height: 350, // or "100%", "minHeight", etc.
                    borderRadius: 3,
                    overflow: "hidden",
                    position: "relative",
                    cursor: "pointer",
                  }}
                >
                  <Box sx={{ position: "relative", height: "100%" }}>
                    <Avatar
                      src={coach.image}
                      alt={coach.name}
                      variant="square"
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        bgcolor: "rgba(0,0,0,0.4)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 2,
                        opacity: 0,
                        transition: "opacity 0.3s ease",
                        "&:hover": {
                          opacity: 1,
                        },
                      }}
                    >
                      <IconButton sx={{ color: "neutral.white" }}>
                        <Instagram />
                      </IconButton>
                      <IconButton sx={{ color: "neutral.white" }}>
                        <LinkedIn />
                      </IconButton>
                      <IconButton sx={{ color: "neutral.white" }}>
                        <Facebook />
                      </IconButton>
                    </Box>
                  </Box>
                </Card>
                <Box sx={{ mt: 2, textAlign: "center" }}>
                  <Typography variant="h6" fontWeight={600}>
                    {coach.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "primary.main" }}>
                    {coach.role}
                  </Typography>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Container>
  );
};

export default FeaturedCoaches;
