import { Box, Container, Typography, Stack } from "@mui/material";
import { motion } from "framer-motion";

import mapDot from '../../assets/testimonials/map-dot.png';
import earthBg from '../../assets/aboutus/earth-bg.svg';
import image1 from '../../assets/aboutus/image1.png';
import image2 from '../../assets/aboutus/image2.jpg';
import image3 from '../../assets/aboutus/image3.jpg';

const AboutUs = () => {
  const MotionBox = motion(Box);

  return (
    <Container maxWidth="xl">
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
          {/* Left Image Section */}
          <Box
            sx={{
              flex: 1,
              width: "100%",
              position: "relative",
              minHeight: { xs: 380, sm: 480, md: 520 },
              mb: { xs: 4, md: 0 },
              overflow: "hidden",
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
                width: { xs: 287, sm: 378, md: 380 },
                height: { xs: 287, sm: 378, md: 380 },
                borderRadius: "50%",
                objectFit: "cover",
                left: { xs: "190px", sm: "290px", md: "49%" },
                top: { xs: "28px", sm: "75px", md: "22%" },
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
                width: { xs: 100, sm: 120, md: 140 },
                height: { xs: 100, sm: 120, md: 140 },
                borderRadius: "50%",
                objectFit: "cover",
                left: { xs: "17%", sm: "150px", md: "25%" },
                top: { xs: "55%", sm: "340px", md: "68%" },
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
                width: { xs: 100, sm: 120, md: 140 },
                height: { xs: 100, sm: 120, md: 140 },
                borderRadius: "50%",
                objectFit: "cover",
                left: { xs: "54%", sm: "50%", md: "60%" },
                top: { xs: "70%", sm: "75%", md: "73%" },
                zIndex: 3,
              }}
            />
          </Box>

          {/* Right Text Content */}
          <Box sx={{ flex: 1, width: "100%" }}>
            <Stack spacing={2}>
              <Typography
                variant="body2"
                sx={{
                  color: "primary.light",
                  fontWeight: 600,
                  textDecoration: "underline",
                }}
              >
                About Us
              </Typography>

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
          </Box>
        </Stack>
      </Box>
    </Container>
  );
};

export default AboutUs;
