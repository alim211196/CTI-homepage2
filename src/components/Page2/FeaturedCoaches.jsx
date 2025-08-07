import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Stack,
  Button,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import heroImg1 from "../../assets/featuredcoaches/image1.png";
import heroImg2 from "../../assets/featuredcoaches/image2.png";
import heroImg3 from "../../assets/featuredcoaches/image3.png";
import heroImg4 from "../../assets/featuredcoaches/image4.png";
import avatar1 from "../../assets/featuredcoaches/crop1.png";
import avatar2 from "../../assets/featuredcoaches/crop2.png";
import avatar3 from "../../assets/featuredcoaches/crop3.png";
import avatar4 from "../../assets/featuredcoaches/crop4.png";
import map from "../../assets/featuredcoaches/world-map.webp";

const coaches = [
  {
    name: "John Doe",
    role: "Executive Leadership Coach",
    summary:
      "Former Fortune 500 executive with 15+ years of transforming organizational culture.",
    tag: "CPCC ELITE PLUS",
    image: heroImg1,
    avatar: avatar1,
  },
  {
    name: "Elena Petrov",
    role: "Career Transition Specialist",
    summary:
      "Helping professionals navigate career pivots and achieve breakthrough success.",
    tag: "CPCC ELITE",
    image: heroImg2,
    avatar: avatar2,
  },
  {
    name: "John Doe",
    role: "Executive Leadership Coach",
    summary:
      "Former Fortune 500 executive with 15+ years of transforming organizational culture.",
    tag: "CPCC ELITE",
    image: heroImg1,
    avatar: avatar1,
  },
  {
    name: "Elena Petrov",
    role: "Career Transition Specialist",
    summary:
      "Helping professionals navigate career pivots and achieve breakthrough success.",
    tag: "CPCC ELITE PLUS",
    image: heroImg2,
    avatar: avatar2,
  },
  {
    name: "John Desuza",
    role: "Wellness & Performance Coach",
    summary:
      "Integrating holistic wellness approaches with high-performance strategies.",
    tag: "CPCC ELITE",
    image: heroImg3,
    avatar: avatar3,
  },
  {
    name: "John Doe",
    role: "Executive Leadership Coach",
    summary:
      "Former Fortune 500 executive with 15+ years of transforming organizational culture.",
    tag: "CPCC",
    image: heroImg1,
    avatar: avatar1,
  },
  {
    name: "Elena Petrov",
    role: "Career Transition Specialist",
    summary:
      "Helping professionals navigate career pivots and achieve breakthrough success.",
    tag: "CPCC",
    image: heroImg2,
    avatar: avatar2,
  },
  {
    name: "John Desuza",
    role: "Wellness & Performance Coach",
    summary:
      "Integrating holistic wellness approaches with high-performance strategies.",
    tag: "CPCC POWER",
    image: heroImg3,
    avatar: avatar3,
  },
  {
    name: "Alexa John",
    role: "Executive Leadership Coach",
    summary:
      "Former Fortune 500 executive with 15+ years of transforming organizational culture.",
    tag: "CPCC",
    image: heroImg4,
    avatar: avatar4,
  },
  {
    name: "John Doe",
    role: "Executive Leadership Coach",
    summary:
      "Former Fortune 500 executive with 15+ years of transforming organizational culture.",
    tag: "CPCC POWER",
    image: heroImg1,
    avatar: avatar1,
  },
  {
    name: "Elena Petrov",
    role: "Career Transition Specialist",
    summary:
      "Helping professionals navigate career pivots and achieve breakthrough success.",
    tag: "CPCC",
    image: heroImg2,
    avatar: avatar2,
  },
  {
    name: "John Desuza",
    role: "Wellness & Performance Coach",
    summary:
      "Integrating holistic wellness approaches with high-performance strategies.",
    tag: "CPCC POWER",
    image: heroImg3,
    avatar: avatar3,
  },
  {
    name: "Alexa John",
    role: "Executive Leadership Coach",
    summary:
      "Former Fortune 500 executive with 15+ years of transforming organizational culture.",
    tag: "CPCC",
    image: heroImg4,
    avatar: avatar4,
  },
];

const avatarPositions = [
  { top: "10%", left: "10%", coachIndex: 0 },
  { top: "0%", left: "30%", coachIndex: 1 },
  { top: "24%", left: "40%", coachIndex: 2 },
  { top: "47%", left: "47%", coachIndex: 3 },
  { top: "70%", left: "30%", coachIndex: 4 },
  { top: "45%", left: "20%", coachIndex: 5 },
  { top: "75%", left: "52%", coachIndex: 6 },
  { top: "18%", left: "94%", coachIndex: 7 },
  { top: "73%", left: "85%", coachIndex: 8 },
  { top: "36%", left: "72%", coachIndex: 9 },
  { top: "53%", left: "64%", coachIndex: 10 },
  { top: "5%", left: "74%", coachIndex: 11 },
  { top: "22%", left: "59%", coachIndex: 12 },
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

const FeaturedCoaches = () => {
  const [selectedCoach, setSelectedCoach] = useState(0);

  return (
    <Box
      sx={{
        py: 8,
        // background: "linear-gradient(90deg, #fcdcd9a9 0%, #f8edc8a9 100%)",
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={8}
        >
          <Typography variant="h4" fontWeight={700}>
            Featured Coaches
          </Typography>
          <Button
            endIcon={<ArrowForwardIcon />}
            sx={{
              color: "#CB1C1B",
              textTransform: "none",
              fontWeight: 600,
            }}
          >
            See all
          </Button>
        </Box>

        <Grid container spacing={3}>
          <Grid item size={{ xs: 12, md: 8 }}>
            <Box sx={{ position: "relative", width: "100%" }}>
              <img
                src={map}
                alt="Map"
                style={{ width: "100%", height: "auto", opacity: 0.2 }}
              />

              {avatarPositions.map((avatar, index) => (
                <Box
                  key={index}
                  sx={{
                    position: "absolute",
                    top: avatar.top,
                    left: avatar.left,
                    transform: "translate(-50%, -50%)",
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    cursor: "pointer",
                    border:
                      selectedCoach === avatar.coachIndex
                        ? "3px solid #CB1C1B"
                        : "2px solid white",
                  }}
                  onClick={() => setSelectedCoach(avatar.coachIndex)}
                >
                  <img
                    src={coaches[avatar.coachIndex].avatar}
                    alt={`Coach ${index}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      background: "#F0EAE5",
                    }}
                  />
                </Box>
              ))}
            </Box>
          </Grid>
          <Grid item size={{ xs: 12, md: 4 }}>
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
                src={coaches[selectedCoach].image}
                alt={coaches[selectedCoach].name}
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
                  top: 45,
                  left: 25,
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
                  {coaches[selectedCoach].name}
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
                    ...(tagGradients[coaches[selectedCoach].tag] || {
                      backgroundColor: "#e0e0e0",
                      color: "#333",
                    }),
                  }}
                >
                  {coaches[selectedCoach].tag}
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
                  {coaches[selectedCoach].role}
                </Typography>

                <Typography align="center" fontSize={15} mt={1} color="black">
                  {coaches[selectedCoach].summary}
                </Typography>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturedCoaches;
