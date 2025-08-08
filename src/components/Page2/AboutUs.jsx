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
import video1 from "../../assets/aboutus/slide1.gif";
import image2 from "../../assets/aboutus/image3.jpg";
import video3 from "../../assets/aboutus/slide3.gif";
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
    src: video3,
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
                    We represents a commitment to excellence in coaching.
                  </Typography>

                  <Typography variant="body1" color="black" mb={4}>
                    We are dedicated to fostering transformational growth through the power of Co-Active coaching principles across the Dubai and GCC region.
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
                <SwiperSlide
                  key={idx}
                  style={{ overflow: "visible !important" }}
                >
                  <Box sx={{ overflow: "visible", pt: "60px" }}>
                    {" "}
                    {/* <-- new wrapper for SwiperSlide content */}
                    <Box
                      sx={{
                        position: "relative",
                        width: { xs: "100%", sm: "80%", md: "500px" },
                        height: { xs: "300px", sm: "400px", md: "360px" },
                        margin: "auto",
                        borderRadius: "20px",
                        overflow: "visible",
                        pt: "60px",
                        boxShadow: "0 10px 30px rgba(250, 204, 194, 0.7)",
                      }}
                    >
                      {/* Background Image Layer with Blur */}
                      <Box
                        component="img"
                        src={image2}
                        alt="Background"
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          // filter: "blur(10px)",
                          borderRadius: "20px",
                          zIndex: 0,
                        }}
                      />

                      {/* Glass Layer with Gradient */}
                      <Box
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          background: "rgba(255, 253, 253, 0.6)",
                          backdropFilter: "blur(20px)",
                          WebkitBackdropFilter: "blur(20px)",
                          borderRadius: "20px",
                          zIndex: 1,
                        }}
                      />

                      {/* Foreground GIF or Image */}
                      <Box
                        component="img"
                        src={item.src}
                        alt="Video GIF"
                        sx={{
                          position: "relative",
                          top: "-120px",
                          width: "100%",
                          height: "500px",
                          objectFit: "cover",
                          zIndex: 2,
                          borderRadius: "20px",
                        }}
                      />
                    </Box>
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
