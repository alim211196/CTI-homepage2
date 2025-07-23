import React from "react";
import {
  Container,
  Box,
  Card,
  Typography,
  Avatar,
  Chip,
  Rating,
  Button,
  Stack,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import heroImg1 from "../../assets/herosection/img1.jpg";
import heroImg2 from "../../assets/herosection/img2.jpg";
import heroImg3 from "../../assets/herosection/img3.jpg";
import heroImg4 from "../../assets/herosection/img4.jpg";

const coaches = [
  {
    name: "Dr. Sarah Al-Mansouri",
    role: "Executive Leadership Coach",
    rating: 4.9,
    badge: "CPCC ELITE PLUS",
    badgeColor: "warning",
    summary:
      "Former Fortune 500 executive with 15+ years of transforming organizational culture.",
    sessions: 1200,
    tags: ["Executive Leadership", "Strategic Planning", "+1 more"],
    meta: ["Harvard MBA", "ICF Master Certified Coach"],
    image: heroImg1,
  },
  {
    name: "Ahmed Hassan",
    role: "Career Transition Specialist",
    rating: 4.8,
    badge: "CPCC ELITE",
    badgeColor: "secondary",
    summary:
      "Helping professionals navigate career pivots and achieve breakthrough success.",
    sessions: 850,
    tags: ["Career Transition", "Professional Development"],
    meta: ["Certified Career Coach", "9+ years experience"],
    image: heroImg2,
  },
  {
    name: "Elena Petrov",
    role: "Wellness & Performance Coach",
    rating: 4.9,
    badge: "CPC POWER",
    badgeColor: "info",
    summary:
      "Integrating holistic wellness approaches with high-performance strategies.",
    sessions: 950,
    tags: ["Wellness Coaching", "Performance Optimization"],
    meta: ["Wellness Psychology PhD", "Olympic Team Consultant"],
    image: heroImg3,
  },
  {
    name: "Dr. Sarah Al-Mansouri",
    role: "Executive Leadership Coach",
    rating: 4.9,
    badge: "CPCC ELITE PLUS",
    badgeColor: "warning",
    summary:
      "Former Fortune 500 executive with 15+ years of transforming organizational culture.",
    sessions: 1200,
    tags: ["Executive Leadership", "Strategic Planning", "+1 more"],
    meta: ["Harvard MBA", "ICF Master Certified Coach"],
    image: heroImg4,
  },
  {
    name: "Ahmed Hassan",
    role: "Career Transition Specialist",
    rating: 4.8,
    badge: "CPCC ELITE",
    badgeColor: "secondary",
    summary:
      "Helping professionals navigate career pivots and achieve breakthrough success.",
    sessions: 850,
    tags: ["Career Transition", "Professional Development"],
    meta: ["Certified Career Coach", "9+ years experience"],
    image: heroImg3,
  },
  {
    name: "Elena Petrov",
    role: "Wellness & Performance Coach",
    rating: 4.9,
    badge: "CPC POWER",
    badgeColor: "info",
    summary:
      "Integrating holistic wellness approaches with high-performance strategies.",
    sessions: 950,
    tags: ["Wellness Coaching", "Performance Optimization"],
    meta: ["Wellness Psychology PhD", "Olympic Team Consultant"],
    image: heroImg2,
  },
];

const badgeColors = {
  warning: "linear-gradient(90deg, #FF914D 0%, #FF6A5B 100%)",
  secondary: "linear-gradient(90deg, #FF914D 0%, #FF6A5B 100%)",
  info: "linear-gradient(90deg, #FF914D 0%, #FF6A5B 100%)",
};

const FeaturedCoaches = () => (
  <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
    <Typography variant="h4" align="center" fontWeight={700} mb={2}>
      <span style={{ color: "#FF6459" }}>Coaches</span> Training Institute
    </Typography>
    <Typography align="center" color="text.secondary" mb={5}>
      Organizations across the UAE and beyond.
    </Typography>

    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 6000, disableOnInteraction: false }}
      spaceBetween={30}
      breakpoints={{
        0: { slidesPerView: 1.1 },
        600: { slidesPerView: 2 },
        900: { slidesPerView: 2.5 },
        1200: { slidesPerView: 3 },
      }}
      style={{ paddingBottom: 20 }}
    >
      {coaches.map((coach, idx) => (
        <SwiperSlide key={idx}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Box
              sx={{
                height: "100%",
                transition: "box-shadow 0.3s ease",
                "&:hover": {
                  boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                  borderRadius: 10,
                },
              }}
            >
              <Card
                elevation={0}
                sx={{
                  pb: 2,
                  px: 2,
                  maxWidth: 350,
                  borderRadius: 10,
                  height: 520,
                  display: "flex",
                  cursor: 'pointer',
                  flexDirection: "column",
                  alignItems: "center",
                  transition: "box-shadow 0.3s ease",
                  bgcolor: "#fffefa",
                  position: "relative",
                }}
              >
                {/* Badge */}
                <Chip
                  size="small"
                  label={coach.badge}
                  sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    background: badgeColors[coach.badgeColor] || "grey.200",
                    color: "#fff",
                    fontWeight: 600,
                    fontSize: 13,
                    paddingLeft: '0.75rem',
                    paddingRight: '0.75rem',
                    zIndex: 2,
                    borderRadius: 0,
                    borderBottomLeftRadius: 10
                  }}
                />

                {/* Avatar + Rating */}
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    height: 420,
                    margin: "auto",
                    p: 3,
                  }}
                >
                  <Box
                    sx={{
                      mt: 2,
                      mb: 1.5,
                      position: "relative",
                      "&:hover .avatar-image": {
                        transform: "scale(1.2)",
                      },
                    }}
                  >
                    <Avatar
                      className="avatar-image"
                      sx={{
                        width: 72,
                        height: 72,
                        fontSize: 38,
                        bgcolor: "#fff",
                        border: "3px solid #eee",
                        objectFit: "cover",
                        transition: "transform 0.4s ease",
                      }}
                      src={coach.image}
                      alt={coach.name}
                    />
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.3,
                        position: "absolute",
                        left: "50%",
                        bottom: -24,
                        transform: "translateX(-50%)",
                        bgcolor: "#fff",
                        px: 1,
                        borderRadius: 2,
                        mt: 1,
                      }}
                    >
                      <Rating
                        name="read-only"
                        value={coach.rating}
                        precision={0.1}
                        size="small"
                        readOnly
                      />
                      <Typography fontSize={15} fontWeight={700}>
                        {coach.rating}
                      </Typography>
                    </Box>
                  </Box>

                  <Typography
                    variant="h6"
                    align="center"
                    fontWeight={600}
                    mt={3}
                    gutterBottom
                  >
                    {coach.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    align="center"
                    color="primary"
                    sx={{ fontWeight: 600 }}
                  >
                    {coach.role}
                  </Typography>

                  <Typography
                    align="center"
                    fontSize={15}
                    mt={1}
                    color="text.secondary"
                  >
                    {coach.summary}
                  </Typography>

                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    spacing={1.5}
                    mt={2}
                  >
                    <Typography fontWeight={700} fontSize={15}>
                      {coach.sessions} sessions
                    </Typography>
                  </Stack>

                  <Box
                    sx={{
                      mt: 2,
                      mb: 0.5,
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 1.2,
                      justifyContent: "center",
                    }}
                  >
                    {coach.tags.map((tag) => (
                      <Chip
                        key={tag}
                        size="small"
                        label={tag}
                        sx={{
                          bgcolor: "#ffeaea",
                          color: "#ff6459",
                          fontWeight: 600,
                          fontSize: 12,
                        }}
                      />
                    ))}
                  </Box>

                  <Box sx={{ my: 1 }}>
                    {coach.meta.map((line) => (
                      <Typography
                        key={line}
                        fontSize={14}
                        color="text.secondary"
                      >
                        {line}
                      </Typography>
                    ))}
                  </Box>
                </Box>

                {/* View Profile */}
                <Box sx={{ width: "100%" }}>
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      color: "#FF6A5B",
                      background: 'white',
                      border:
                        "1px solid #FF6A5B",
                      borderRadius: "999px",
                      px: 4,
                      py: 1.2,
                      fontWeight: 600,
                      fontSize: {
                        xs: "0.95rem",
                        sm: "1rem",
                      },
                      textTransform: "none",
                      boxShadow: "0 4px 14px rgba(255, 105, 80, 0.4)",
                      transition: "all 0.4s ease",
                      ".MuiCard-root:hover &": {
                        color: 'white',
                        background:
                          "linear-gradient(90deg, #FF914D 0%, #FF6A5B 100%)",
                        boxShadow: "0 6px 20px rgba(255, 105, 80, 0.5)",

                      },
                    }}
                  >
                    View Profile
                  </Button>
                </Box>
              </Card>
            </Box></motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  </Container>
);

export default FeaturedCoaches;
