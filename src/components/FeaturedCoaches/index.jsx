import {
  Container,
  Box,
  Card,
  Typography,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import heroImg1 from "../../assets/featuredcoaches/image1.png";
import heroImg2 from "../../assets/featuredcoaches/image2.png";
import heroImg3 from "../../assets/featuredcoaches/image3.png";
import heroImg4 from "../../assets/featuredcoaches/image4.png";
import SectionHeading from "../Common/SectionHeading";
import bg1 from "../../assets/bg1.svg";
const coaches = [
  {
    name: "John Doe",
    role: "Executive Leadership Coach",
    summary:
      "Former Fortune 500 executive with 15+ years of transforming organizational culture.",
    tag: "CPCC ELITE PLUS",
    image: heroImg1,
  },
  {
    name: "Elena Petrov",
    role: "Career Transition Specialist",
    summary:
      "Helping professionals navigate career pivots and achieve breakthrough success.",
    tag: "CPCC ELITE",
    image: heroImg2,
  },
  {
    name: "John Desuza",
    role: "Wellness & Performance Coach",
    summary:
      "Integrating holistic wellness approaches with high-performance strategies.",
    tag: "CPC POWER",
    image: heroImg3,
  },
  {
    name: "Alexa John",
    role: "Executive Leadership Coach",
    summary:
      "Former Fortune 500 executive with 15+ years of transforming organizational culture.",
    tag: "CPCC ELITE PLUS",
    image: heroImg4,
  }, {
    name: "John Doe",
    role: "Executive Leadership Coach",
    summary:
      "Former Fortune 500 executive with 15+ years of transforming organizational culture.",
    tag: "CPCC ELITE",
    image: heroImg1,
  },
  {
    name: "Elena Petrov",
    role: "Career Transition Specialist",
    summary:
      "Helping professionals navigate career pivots and achieve breakthrough success.",
    tag: "CPC POWER",
    image: heroImg2,
  },
  {
    name: "John Desuza",
    role: "Wellness & Performance Coach",
    summary:
      "Integrating holistic wellness approaches with high-performance strategies.",
    tag: "CPCC ELITE",
    image: heroImg3,
  },
  {
    name: "Alexa John",
    role: "Executive Leadership Coach",
    summary:
      "Former Fortune 500 executive with 15+ years of transforming organizational culture.",
    tag: "CPCC ELITE PLUS",
    image: heroImg4,
  },
];

const tagGradients = {
  "CPCC ELITE PLUS": {
    background: "linear-gradient(to right, #fcb045, #fd1d1d)",
    color: "#fff",
  },
  "CPCC ELITE": {
    background: "linear-gradient(to right, #b24592, #f15f79)",
    color: "#fff",
  },
  "CPC POWER": {
    background: "linear-gradient(to right, #36D1DC, #5B86E5)",
    color: "#fff",
  },
};

const FeaturedCoaches = () => (
  <Container maxWidth="xxl" sx={{ padding: '0px!important', py: { xs: 6, md: 8 } }}>
    <Box sx={{
      px: 1,
      py: { xs: 8, md: 5 }, overflow: "hidden",
      backgroundImage: `url(${bg1})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: {
        xs: "cover",
        sm: "contain",
        md: "contain",
      },
    }}>
      <SectionHeading title={"Coaches"} subtitle={"Training Institute"} />

      <Typography align="center" color="black" mb={5}>
        Meet some of our elite coaches who are transforming careers and organizations across the UAE and beyond.
      </Typography>

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        spaceBetween={30}
        breakpoints={{
          0: { slidesPerView: 1.1 },
          600: { slidesPerView: 2 },
          900: { slidesPerView: 4 },
          1200: { slidesPerView: 4 }, // 4 cards on large screens
        }}
      // style={{ paddingBottom: 20 }}
      >
        {coaches.map((coach, idx) => (
          <SwiperSlide key={idx}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Card
                elevation={0}
                sx={{

                  background: 'transparent',
                  borderRadius: 3,
                  overflow: "hidden",
                  position: "relative", // required for overlay
                  cursor: "pointer",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.02)",
                  },
                }}
              >
                {/* Image */}
                <Box
                  component="img"
                  src={coach.image}
                  alt={coach.name}
                  sx={{
                    width: "100%",
                    height: 'auto',
                    objectFit: "contain",
                    display: "block",
                  }}
                />

                {/* Overlay content */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 50,
                    left: 20,
                    color: "#222",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      fontSize: { xs: "1rem", sm: "1.1rem" },
                      color: "#222",
                    }}
                  >
                    {coach.name}
                  </Typography>

                  <Box
                    sx={{
                      mt: 0.8,
                      borderRadius: "999px",
                      px: 1.4,
                      py: 0.3,
                      fontSize: "0.75rem",
                      display: "inline-block",
                      fontWeight: 600,
                      ...tagGradients[coach.tag] || {
                        backgroundColor: "#e0e0e0",
                        color: "#333",
                      },
                    }}
                  >
                    {coach.tag}
                  </Box>

                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    height: 120,
                    margin: "auto",
                    p: 3,
                  }}
                >
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
                    color="black"
                  >
                    {coach.summary}
                  </Typography>
                </Box>
              </Card>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper></Box>
  </Container>
);

export default FeaturedCoaches;
