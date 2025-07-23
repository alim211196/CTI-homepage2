import { Box, Container, Typography, Stack } from "@mui/material";
import { motion } from "framer-motion";

import mapDot from "../../assets/testimonials/map-dot.png";
import earthBg from "../../assets/aboutus/earth-bg.svg";
import image1 from "../../assets/aboutus/center.png";
import image2 from "../../assets/aboutus/left.png";
import image3 from "../../assets/aboutus/right.png";

const MotionBox = motion(Box);

const AboutUs = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          overflow: "hidden",
          backgroundImage: `url(${mapDot})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: {
            xs: "cover",
            sm: "contain",
            md: "contain",
          },
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={6}
          alignItems="center"
          justifyContent="space-between"
        >
          {/* Left Image Section with Animation */}
          <MotionBox
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            sx={{
              flex: 1,
              width: "100%",
              position: "relative",
              minHeight: { xs: 380, sm: 480, md: 520 },
              mb: { xs: 4, md: 0 },
            }}
          >
            {/* Rotating Earth */}
            <MotionBox
              component="img"
              src={earthBg}
              alt="Earth Background"
              sx={{
                position: "absolute",
                width: { xs: "100%", sm: "80%", md: "100%" },
                left: "0%",
                top: "5%",
                transform: "translateX(-50%)",
                zIndex: 1,
              }}
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 20,
                ease: "linear",
              }}
            />

            {/* Main Circle Image */}
            <Box
              component="img"
              src={image1}
              alt="Main"
              sx={{
                position: "absolute",
                width: { xs: 287, sm: 378, md: 500 },
                height: { xs: 287, sm: 378, md: 565 },
                borderRadius: "50%",
                objectFit: "contain",
                left: { xs: "190px", sm: "290px", md: "49%" },
                top: { xs: "28px", sm: "75px", md: "0%" },
                transform: {
                  xs: "translateX(-50%)",
                  sm: "translateX(-50%)",
                  md: "translateX(-49%)",
                },
                zIndex: 2,
              }}
            />

            {/* Top Left Small Image */}
            <Box
              component="img"
              src={image2}
              alt="Small Left"
              sx={{
                position: "absolute",
                width: { xs: 100, sm: 120, md: 240 },
                height: { xs: 100, sm: 120, md: 240 },
                borderRadius: "50%",
                objectFit: "cover",
                left: { xs: "17%", sm: "150px", md: "0%" },
                top: { xs: "55%", sm: "340px", md: "50%" },
                zIndex: 3,
              }}
            />

            {/* Bottom Right Small Image */}
            <Box
              component="img"
              src={image3}
              alt="Small Right"
              sx={{
                position: "absolute",
                width: { xs: 100, sm: 120, md: 240 },
                height: { xs: 100, sm: 120, md: 240 },
                borderRadius: "50%",
                objectFit: "cover",
                left: { xs: "60%", sm: "60%", md: "60%" },
                top: { xs: "65%", sm: "65%", md: "65%" },
                zIndex: 3,
              }}
            />
          </MotionBox>

          {/* Right Text Content with Animation */}
          <MotionBox
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            sx={{ flex: 1, width: "100%" }}
          >
            <Stack spacing={2}>
              <Stack direction="row" alignItems="center">
                <Typography
                  variant="body2"
                  sx={{
                    color: "primary.light",
                    fontWeight: 600,
                    textDecoration: "underline",
                    fontSize: {
                      xs: "0.9rem",
                      sm: "1rem",
                      md: "1.05rem",
                      lg: "1.125rem",
                    },
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    display: "inline-block",
                    "&:hover": {
                      color: "primary.main",
                      textShadow: "0 1px 3px rgba(0,0,0,0.2)",
                      transform: "scale(1.05)",
                      textDecoration: "none",
                    },
                  }}
                >
                  About Us
                </Typography>
              </Stack>

              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  color: "neutral.black",
                  lineHeight: 1.4,
                  fontSize: { xs: "1.75rem", md: "2.25rem" },
                }}
              >
                The act or experience of one that learns a computer program that
                makes learning fun
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: "text.secondary", mt: 2 }}
              >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat.
              </Typography>

              <Typography variant="body1" sx={{ color: "text.secondary" }}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat. Lorem ipsum dolor sit amet, consetetur sadipscing
                elitr.
              </Typography>
            </Stack>
          </MotionBox>
        </Stack>
      </Box>
    </Container>
  );
};

export default AboutUs;
