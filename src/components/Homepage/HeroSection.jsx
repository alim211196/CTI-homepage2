import { Box, Typography, Stack, Container } from "@mui/material";
import { motion } from "framer-motion";
import shape1 from "../../assets/valueproposition/shape1.png";

import heroImg1 from "../../assets/herosection/image1.jpg";
import heroImg2 from "../../assets/herosection/image2.jpg";
import heroImg3 from "../../assets/herosection/image3.jpg";
import heroImg4 from "../../assets/herosection/image4.jpg";
export const heroLeftVariants = {
  hidden: { x: -80, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.43, 0.13, 0.23, 0.96], // custom ease like cubic-bezier
    },
  },
};

export const heroRightVariants = {
  hidden: { x: 100, y: 100, opacity: 0, scale: 0.95 },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.43, 0.13, 0.23, 0.96], // custom ease like cubic-bezier
    },
  },
};

const HeroSection = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ px: 3, py: { xs: 8, md: 8 } }} mb={5}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={6}
            alignItems="center"
            justifyContent="space-between"
          >
            {/* --- Left Content --- */}
            <motion.div
              layout
              variants={heroLeftVariants}
              initial={false}
              animate="visible"
              viewport={{ once: true, amount: 0.4 }}
            >
              <Box
                sx={{
                  position: "relative", // enable relative positioning for inner absolute elements
                  maxWidth: { xs: "100%", md: 550 },
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                {/* SHAPE: zIndex 0 */}
                <Box
                  component="img"
                  src={shape1}
                  alt="Shape"
                  sx={{
                    position: "absolute",
                    bottom: "155px",
                    left: -20,
                    width: 100,
                    height: 100,
                    animation: "pulseShape 3s infinite ease-in-out",
                    zIndex: 0,
                    opacity: 0.9,
                  }}
                />

                {/* TEXT: zIndex 1 */}
                <Box sx={{ position: "relative", zIndex: 1 }}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 600,
                      lineHeight: 1.2,
                      fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                    }}
                  >
                    The Smarter Way to Learn{" "}
                    <Box
                      component="span"
                      sx={{
                        color: "secondary.main",
                        textDecoration: "underline",
                      }}
                    >
                      Anything
                    </Box>
                  </Typography>

                  <Typography
                    sx={{
                      mt: 3,
                      color: "text.secondary",
                      lineHeight: 1.8,
                      fontSize: { xs: "0.95rem", md: "1rem" },
                    }}
                  >
                    Mauris malesuada enim eget blandit gravida. Duis hendrerit
                    cursus turpis, id mollis est rutrum nec. Sed interdum nisi
                    id libero tincidunt, sit amet vestibulum tortor porttitor.
                  </Typography>
                </Box>
              </Box>
            </motion.div>

            {/* --- Right Content --- */}
            <motion.div
              layout
              variants={heroRightVariants}
              initial={false}
              animate="visible"
              viewport={{ once: true, amount: 0.4 }}
            >
              <Box
                sx={{
                  position: "relative",
                  minHeight: { xs: 320, md: 400 },
                  width: { xs: 280, sm: 320, md: 380 },
                  height: { xs: 280, sm: 320, md: 380 },
                  borderRadius: "50%",
                  mx: "auto",
                }}
              >
                {/* Circle Images */}
                {[
                  {
                    src: heroImg1,
                    top: { xs: "-10%", md: "-10%" },
                    left: { xs: "-15%", md: "-15%" },
                    width: { xs: 160, sm: 200, md: 250 },
                    height: { xs: 160, sm: 200, md: 250 },
                  },
                  {
                    src: heroImg2,
                    top: "25%",
                    right: { xs: "-10%", md: "-9%" },
                    width: { xs: 130, sm: 170, md: 200 },
                    height: { xs: 130, sm: 170, md: 200 },
                  },
                  {
                    src: heroImg3,
                    bottom: "-10%",
                    left: { xs: "-10%", md: "-10%" },
                    width: { xs: 100, sm: 120, md: 150 },
                    height: { xs: 100, sm: 120, md: 150 },
                  },
                  {
                    src: heroImg4,
                    bottom: "-25%",
                    right: { xs: "5%", md: "15%" },
                    width: { xs: 80, sm: 90, md: 100 },
                    height: { xs: 80, sm: 90, md: 100 },
                  },
                ].map((item, index) => (
                  <Box
                    key={index}
                    component="img"
                    src={item.src}
                    alt={`Hero ${index}`}
                    sx={{
                      position: "absolute",
                      borderRadius: "50%",
                      objectFit: "cover",
                      ...item,
                    }}
                  />
                ))}

                {/* Floating Dots */}
                {[
                  ...[
                    {
                      top: "-15%",
                      right: "10%",
                      bgcolor: "primary.light",
                      width: { xs: 50, md: 80 },
                      height: { xs: 50, md: 80 },
                      animationDelay: "0s",
                    },
                    {
                      top: "30%",
                      right: "35%",
                      bgcolor: "primary.main",
                      width: 40,
                      height: 40,
                      animationDelay: "1s",
                    },
                    {
                      top: "30%",
                      left: "-40%",
                      bgcolor: "primary.light",
                      width: 40,
                      height: 40,
                      animationDelay: "2s",
                    },
                    {
                      top: "-10%",
                      left: "-70%",
                      bgcolor: "secondary.main",
                      width: 50,
                      height: 50,
                      animationDelay: "0.5s",
                    },
                    {
                      bottom: "-25%",
                      left: "35%",
                      bgcolor: "secondary.main",
                      width: 50,
                      height: 50,
                      animationDelay: "1.5s",
                    },
                  ],
                  ...[
                    {
                      bottom: "-10%",
                      left: "-70%",
                      bgcolor: "neutral.main",
                      width: 60,
                      height: 60,
                      animationDelay: "1s",
                    },
                    {
                      bottom: "20%",
                      left: "40%",
                      bgcolor: "neutral.light",
                      width: 45,
                      height: 45,
                      animationDelay: "0.5s",
                    },
                  ],
                ].map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      ...item,
                      position: "absolute",
                      borderRadius: "50%",
                      animation: "pulseShape 5s ease-in-out infinite alternate",
                      opacity: 0.8,
                      animationDelay: item.animationDelay,
                      willChange: "transform",
                    }}
                  />
                ))}
              </Box>
            </motion.div>
          </Stack>
        </motion.div>
      </Box>
    </Container>
  );
};

export default HeroSection;
