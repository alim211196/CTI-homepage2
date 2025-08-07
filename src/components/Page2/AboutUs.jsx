import React from "react";
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Stack,
  Grid,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import video1 from "../../assets/aboutus/v1.gif";
import video2 from "../../assets/aboutus/v2.gif";

const MotionTypography = motion(Typography);

const faqs_content = [
  {
    question: "Coaches Model",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    question: "ICF Accreditation",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    question: "Experiential Learning",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
];

const itemsData = [
  {
    src: video1,
  },
  {
    src: video2,
  },
];

export default function AboutUs() {
  return (
    <Box
      sx={{
        backgroundColor: "#f4f6fd",
        mt: -5,
        py: 10,
      }}
    >
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item size={{ xs: 12, md: 6 }}>
            <Box
              component={motion.div}
              initial={{ x: 80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              sx={{ flex: 1, zIndex: 2, width: "100%" }}
            >
              <Stack spacing={2}>
                <Box sx={{ pl: { md: 6 }, mb: 4 }}>
                  <MotionTypography
                    component="h4"
                    whileHover={{
                      scale: 1.05,
                      color: "	rgba(133, 21, 28, 0.9)", // gold-like hover color
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                    sx={{
                      fontFamily: '"July It", sans-serif',
                      fontSize: { xs: "2rem", md: "2.5rem" },
                      color: "rgba(255, 73, 57, 0.9)",
                      fontWeight: 600,
                      display: "inline-block",
                      cursor: "pointer",
                    }}
                  >
                    About Us
                  </MotionTypography>
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    Lorem ipsum dolor sit amet consectetur
                  </Typography>

                  <Typography variant="body1" color="black" mb={4}>
                    Consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore. Lorem ipsum dolor sit amet
                    consectetur. Lorem ipsum dolor sit amet consectetur
                  </Typography>
                  {faqs_content.map((faq, idx) => (
                    <Accordion
                      key={idx}
                      elevation={0}
                      disableGutters
                      defaultExpanded={idx === 0}
                      sx={{
                        mb: 2,
                        borderRadius: 2,
                        overflow: "hidden",
                        transition: "box-shadow 0.3s ease",
                        boxShadow: "0 6px 20px rgba(250, 204, 194, 0.5)",
                        "&:hover": {
                          boxShadow: "0 8px 24px rgba(250, 204, 194, 0.6)",
                        },
                        "&.Mui-expanded": {
                          boxShadow: "0 10px 30px rgba(250, 204, 194, 0.7)",
                        },
                        "&:before": {
                          display: "none", // ✅ This removes the black line
                        },
                      }}
                    >
                      <AccordionSummary
                        expandIcon={
                          <ExpandMoreIcon
                            sx={{
                              transition: "transform 0.3s ease",
                              "&.Mui-expanded": {
                                transform: "rotate(180deg)",
                              },
                            }}
                          />
                        }
                        sx={{
                          "&:focus": {
                            outline: "none",
                          },
                          "&:focus-visible": {
                            outline: "none",
                          },
                          "&.Mui-focused": {
                            outline: "none",
                          },
                          "&::before": {
                            display: "none", // ✅ Also remove from summary if it’s there
                          },
                        }}
                      >
                        <Typography sx={{ fontWeight: "bold" }}>
                          {faq.question}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography color="text.primary">
                          {faq.answer}
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  ))}

                  <Box mt={5}>
                    <Button
                      variant="contained"
                      sx={{
                        color: "white",
                        background:
                          "linear-gradient(90deg, #FF6A5B 0%, #FF914D 100%)",
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
                        transform: "scale(1)",
                        "&:hover": {
                          background:
                            "linear-gradient(90deg, #FF914D 0%, #FF6A5B 100%)",
                          boxShadow: "0 6px 20px rgba(255, 105, 80, 0.5)",
                          transform: "scale(1.05)",
                        },
                      }}
                    >
                      View More
                    </Button>
                  </Box>
                </Box>
              </Stack>
            </Box>
          </Grid>

          <Grid item size={{ xs: 12, md: 6 }}>
            <Swiper
              spaceBetween={20}
              slidesPerView={1} // Show one video at a time
              loop={true} // Loop back to the first video
              autoplay={{
                delay: 5000, // 5 seconds
                disableOnInteraction: false,
              }}
              speed={1000} // Smooth transition duration (1 second)
              modules={[Autoplay]}
            >
              {itemsData.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%", // optional: ensures vertical centering
                    }}
                  >
                    <img
                      src={item.src}
                      style={{ width: "50%", objectFit: "cover" }}
                      alt=""
                    />
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
