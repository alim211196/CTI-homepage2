import { Container, Box, Card, Typography, Stack } from "@mui/material";
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
import { useState } from "react";

const forIndividualCoaching = [
  {
    name: "John Doe",
    role: "Executive Leadership Coach",
    summary:
      "Former Fortune 500 executive with 15+ years of transforming organizational culture.",
    tag: "CPCC",
    image: heroImg1,
  },
  {
    name: "Elena Petrov",
    role: "Career Transition Specialist",
    summary:
      "Helping professionals navigate career pivots and achieve breakthrough success.",
    tag: "CPCC",
    image: heroImg2,
  },
  {
    name: "John Desuza",
    role: "Wellness & Performance Coach",
    summary:
      "Integrating holistic wellness approaches with high-performance strategies.",
    tag: "CPCC POWER",
    image: heroImg3,
  },
  {
    name: "Alexa John",
    role: "Executive Leadership Coach",
    summary:
      "Former Fortune 500 executive with 15+ years of transforming organizational culture.",
    tag: "CPCC",
    image: heroImg4,
  },
  {
    name: "John Doe",
    role: "Executive Leadership Coach",
    summary:
      "Former Fortune 500 executive with 15+ years of transforming organizational culture.",
    tag: "CPCC POWER",
    image: heroImg1,
  },
  {
    name: "Elena Petrov",
    role: "Career Transition Specialist",
    summary:
      "Helping professionals navigate career pivots and achieve breakthrough success.",
    tag: "CPCC",
    image: heroImg2,
  },
  {
    name: "John Desuza",
    role: "Wellness & Performance Coach",
    summary:
      "Integrating holistic wellness approaches with high-performance strategies.",
    tag: "CPCC POWER",
    image: heroImg3,
  },
  {
    name: "Alexa John",
    role: "Executive Leadership Coach",
    summary:
      "Former Fortune 500 executive with 15+ years of transforming organizational culture.",
    tag: "CPCC",
    image: heroImg4,
  },
];

const forCoachingOrganization = [
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
    tag: "CPCC ELITE PLUS",
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
  {
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
    tag: "CPCC ELITE PLUS",
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
  "CPCC": {
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

const CoachesTraining = () => {
  const [activeTab, setActiveTab] = useState("individual");

  return (
    <Container
      maxWidth="xxl"
      sx={{ padding: "0px!important", py: { xs: 6, md: 8 } }}
    >
      <Box
        sx={{
          px: 1,
          py: { xs: 8, md: 5 },
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
        <SectionHeading title={"Coaches"} subtitle={"Training Institute"} />

        <Typography align="center" color="black" mb={5}>
          Meet some of our elite coaches who are transforming careers and
          organizations across the UAE and beyond.
        </Typography>

        <Stack
          direction="row"
          spacing={1.5}
          alignItems="center"
          mb={2}
          justifyContent="center"
          flexWrap="wrap"
        >
          {[
            { label: "Individual Coaching", value: "individual" },
            { label: "Coaching For Organization", value: "organization" },
          ].map((tab) => (
            <Box
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              sx={{
                width: 270,
                cursor: "pointer",
                borderRadius: "999px",
                px: 2.5, // reduced from 3.5
                py: 0.8, // reduced from 1.2
                fontWeight: 600,
                fontSize: {
                  xs: "0.8rem", // reduced from 0.95rem
                  sm: "0.9rem", // reduced from 1rem
                },
                transition: "all 0.4s ease",
                transform: "scale(1)",
                background:
                  activeTab === tab.value
                    ? "linear-gradient(90deg, #FF6A5B 0%, #FF914D 100%)"
                    : "transparent",
                color: activeTab === tab.value ? "white" : "#FF6A5B",
                border: `1px solid ${
                  activeTab === tab.value ? "transparent" : "#FF6A5B"
                }`,
                textAlign: "center",
                boxShadow:
                  activeTab === tab.value
                    ? "0 3px 10px rgba(255, 105, 80, 0.3)" // slightly smaller shadow
                    : "none",
                "&:hover": {
                  transform: "scale(1.05)",
                  background:
                    activeTab === tab.value
                      ? "linear-gradient(90deg, #FF914D 0%, #FF6A5B 100%)"
                      : "rgba(255, 106, 91, 0.1)",
                  boxShadow:
                    activeTab === tab.value
                      ? "0 5px 16px rgba(255, 105, 80, 0.4)"
                      : "0 2px 4px rgba(255, 105, 80, 0.2)",
                },
              }}
            >
              {tab.label}
            </Box>
          ))}
        </Stack>

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
          {(activeTab === "individual"
            ? forIndividualCoaching
            : forCoachingOrganization
          ).map((coach, idx) => (
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
                    background: "transparent",
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
                      height: "auto",
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
                        ...(tagGradients[coach.tag] || {
                          backgroundColor: "#e0e0e0",
                          color: "#333",
                        }),
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
        </Swiper>
      </Box>
    </Container>
  );
};

export default CoachesTraining;
