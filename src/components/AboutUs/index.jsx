import { Box, Container, Typography, Stack } from "@mui/material";
import { motion } from "framer-motion";

import mapDot from "../../assets/testimonials/map-dot.png";
import earthBg from "../../assets/aboutus/earth-bg.svg";
import image1 from "../../assets/aboutus/center.png";
import image2 from "../../assets/aboutus/left.png";
import image3 from "../../assets/aboutus/right.png";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);
const AboutUs = () => {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          px: { xs: 6, md: 8 },
          my: 10,

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
                width: { xs: 287, sm: 378, md: 500, xl: 700 },
                height: { xs: 287, sm: 378, md: 565, xl: 700 },
                borderRadius: "50%",
                objectFit: "contain",
                left: { xs: "190px", sm: "290px", md: "49%" },
                top: { xs: "28px", sm: "75px", md: "1%", xl: "-8%" },
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
                left: { xs: "17%", sm: "150px", md: "-10%" },
                top: { xs: "55%", sm: "340px", md: "40%" },
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
                left: { xs: "60%", sm: "60%", md: "55%", xl: "65%", },
                top: { xs: "65%", sm: "65%", md: "55%", xl: "65%", },
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

                <MotionTypography
                  component="h4"
                  whileHover={{
                    scale: 1.05,
                    color: "	rgba(133, 21, 28, 0.9)", // gold-like hover color
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  sx={{
                    fontFamily: '"July It", sans-serif',
                    fontSize: { xs: "2.5rem", md: "3rem" },
                    color: "rgba(255, 73, 57, 0.9)",
                    fontWeight: 600,
                    display: "inline-block",
                    cursor: 'pointer'
                  }}
                >
                  About Us
                </MotionTypography>
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
                sx={{ color: "black", mt: 2 }}
              >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat.
              </Typography>

              <Typography variant="body1" sx={{ color: "black" }}>
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
