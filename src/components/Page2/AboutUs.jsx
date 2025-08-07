import React from "react";
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Grid,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const itemsData = [
  {
    src: "https://widehue.nyc3.cdn.digitaloceanspaces.com/25_Digital_Homepage_AI-Innovation_Animated-Body-Image_Desktop.mp4",
  },
  {
    src: "https://widehue.nyc3.cdn.digitaloceanspaces.com/25_Digital_Homepage_AI-Innovation_Animated-Body-Image_Desktop.mp4",
  },
];

export default function AboutUs() {
  return (
    <Box
      sx={{
        backgroundColor: "#f4f6fd",
        mt: -2,
        py: 10,
      }}
    >
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item size={{ xs: 12, md: 6 }}>
            <Typography
              variant="h4"
              component="h4"
              fontWeight={600}
              gutterBottom
            >
              Lorem ipsum <br />
              dolor sit amet consectetur
            </Typography>

            <Box>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Individual Coaching</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Coaching for Organization</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>Train to become a coach</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>

            <Button
              variant="outlined"
              size="medium"
              sx={{
                px: 3,
                py: 1,
                fontWeight: 600,
                borderRadius: 2,
                mt: 4,
                color: "#FF4939",
                border: "1px solid",
                borderColor: "#FF4939",
                backgroundColor: "transparent",
                transition: "transform 0.3s ease, opacity 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  backgroundColor: "#CB1C1B",
                  color: "#fff",
                  borderColor: "#CB1C1B",
                },
              }}
            >
              Meet Coach
            </Button>
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
                  <Box>
                    <video
                      src={item.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      style={{ width: "100%", objectFit: "cover" }}
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
