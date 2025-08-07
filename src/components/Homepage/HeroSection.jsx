import { Box, Typography, Grid, Stack, Container, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import heroImg1 from "../../assets/herosection/image1.png";
import heroImg2 from "../../assets/herosection/image2.png";
import heroImg3 from "../../assets/herosection/image3.png";
import heroImg4 from "../../assets/herosection/image4.png";
import bg1 from "../../assets/bg1.svg";
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
// Slide-in for left content
const heroLeftVariants = {
  hidden: {
    opacity: 0,
    x: -100, // start slightly off-screen to the left
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween", // smoother than spring for UI text
      duration: 1.5, // increase duration for slower animation
      ease: "easeInOut", // ease-in-out for smoother motion
    },
  },
};

// Zoom-in for right content
const heroRightVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.8, // increased duration for slower effect
      ease: [0.25, 0.1, 0.25, 1], // smoother easing (easeInOut)
    },
  },
};

const stats = [
  {
    icon: <GroupOutlinedIcon fontSize="large" color="secondary" />,
    value: "500+",
    label: "Certified Coaches",
  },
  {
    icon: <StarBorderOutlinedIcon fontSize="large" color="secondary" />,
    value: "4.9",
    label: "Average Rating",
  },
  {
    icon: <EmojiEventsOutlinedIcon fontSize="large" color="secondary" />,
    value: "10K+",
    label: "Success Stories",
  },
];
const HeroSection = () => {

  const words = ["Life", "Career", "Executive", "Wellness"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let timeout;
    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
      }, 200 / 2);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(currentWord.slice(0, displayText.length + 1));
      }, 200);
    }
    if (!isDeleting && displayText === currentWord) {
      // Pause before deleting
      timeout = setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && displayText === "") {
      // Move to next word
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting]);


  return (
    <Container maxWidth="xxl" sx={{ padding: '0px!important' }}>
      <style>
        {`
          @keyframes floatBubble {
            0% { transform: translateY(0) scale(1); opacity: 0.4; }
            50% { transform: translateY(-20px) scale(1.1); opacity: 0.6; }
            100% { transform: translateY(0) scale(1); opacity: 0.4; }
          }

          @keyframes pulseShape {
            0% { transform: scale(1); opacity: 0.9; }
            50% { transform: scale(1.05); opacity: 0.6; }
            100% { transform: scale(1); opacity: 0.9; }
          }
        `}
      </style>

      <Box
        sx={{
          px: 3, pr: 10, py: { xs: 8, md: 10 },
          overflow: "visible",
          backgroundImage: `url(${bg1})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: {
            xs: "cover",
            sm: "contain",
            md: "contain",
          },
        }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={6}
          alignItems="center"
          justifyContent="space-between"
        >
          {/* Left Content */}
          <motion.div
            variants={heroLeftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <Box
              sx={{
                position: "relative",
                maxWidth: { xs: "100%", md: 570 },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Box sx={{ position: "relative", zIndex: 1 }}>
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 600,
                    lineHeight: 1.2,
                    fontSize: {
                      xs: "2rem",
                      sm: "2.5rem",
                      md: "3rem",
                    },
                  }}
                >
                  Transform Your Organization
                  Through our {" "}
                  <Box
                    component="span"
                    sx={{
                      color: "secondary.main",
                      textDecoration: "underline",
                      fontWeight: "bold",
                      fontSize: {
                        xs: "2rem",
                        sm: "2.5rem",
                        md: "3rem",
                      },
                      display: "inline-block",
                      minHeight: "2rem", // keeps space consistent
                    }}
                  >
                    <motion.span
                      key={displayText}
                      initial={{ opacity: 0.4 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {displayText}
                      <motion.span
                        animate={{
                          opacity: [0, 1],
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 1,
                          ease: "easeInOut",
                        }}
                        style={{ color: 'black', fontWeight: 'normal' }}
                      >
                        |
                      </motion.span>
                    </motion.span>

                  </Box>
                  Coaches.
                </Typography>

                <Typography
                  sx={{
                    mt: 3,
                    color: "black",
                    lineHeight: 1.8,
                    fontSize: { xs: "0.95rem", md: "1rem" },
                  }}
                >
                  Connect with world-class certified coaches and unlock your team's potential.
                  From executive leadership to team development,
                  we bridge the gap between vision and results.
                </Typography>
                <Box sx={{ py: 5 }}>
                  <Grid container spacing={4} justifyContent="center">
                    {stats.map((stat, index) => (
                      <Grid size={{ xs: 12, sm: 4 }} key={index}>
                        <Box
                          sx={{
                            cursor: 'pointer',
                            transition: "transform 0.3s ease",
                            "&:hover": {
                              transform: "scale(1.05)",
                            },
                          }}
                        >
                          <Stack alignItems="center" spacing={1}>
                            <Stack direction="row" alignItems="center" spacing={1}>
                              {stat.icon}
                              <Typography variant="h5" fontWeight="bold" color="secondary">
                                {stat.value}
                              </Typography>
                            </Stack>
                            <Typography variant="body1" color="black" textAlign="center">
                              {stat.label}
                            </Typography>
                          </Stack>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>

                </Box>
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      color: "white",
                      background: "linear-gradient(90deg, #FF6A5B 0%, #FF914D 100%)",
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
                    Find Your Coach
                  </Button>

                  <Button
                    variant="outlined"
                    sx={{
                      color: "#FF6A5B", // Matches the darker gradient color
                      borderColor: "#FF6A5B",
                      borderRadius: "999px",
                      px: 4,
                      py: 1.2,
                      fontWeight: 600,
                      fontSize: {
                        xs: "0.95rem",
                        sm: "1rem",
                      },
                      textTransform: "none",
                      transition: "all 0.4s ease",
                      transform: "scale(1)",
                      "&:hover": {
                        background:
                          "linear-gradient(90deg, #FF914D 0%, #FF6A5B 100%)",
                        boxShadow: "0 6px 20px rgba(255, 105, 80, 0.5)",
                        transform: "scale(1.05)",
                        color: 'white'
                      },
                    }}
                  >
                    Join as Coach
                  </Button>
                </Box>
              </Box>
            </Box>
          </motion.div>

          {/* Right Content */}
          <motion.div
            variants={heroRightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <Box
              sx={{
                position: "relative",
                width: { xs: 300, sm: 350, md: 400 },
                height: { xs: 300, sm: 350, md: 400 },
                mx: "auto",
              }}
            >
              {/* Floating Circular Images */}
              {[heroImg1, heroImg2, heroImg3, heroImg4].map((src, index) => {
                const positions = [
                  { top: "-10%", left: "-5%" },
                  { top: "42%", right: "-14%" },
                  { bottom: "5%", left: "-15%" },
                  { bottom: "-18%", right: "50%" },
                ];
                const sizes = [250, 200, 150, 100];
                return (
                  <motion.img
                    key={index}
                    src={src}
                    alt={`Hero ${index}`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      position: "absolute",
                      borderTopLeftRadius: "50%",
                      borderBottomLeftRadius: '50%',
                      borderBottomRightRadius: '50%',
                      objectFit: "cover",
                      width: sizes[index],
                      height: sizes[index],
                      zIndex: 1000,
                      ...positions[index],
                      // boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                      transition: "transform 0.5s ease-in-out",
                    }}
                  />
                );
              })}

              {/* Floating Bubbles */}
              {[...Array(6)].map((_, index) => {
                const bubbles = [
                  { top: "60%", left: "30%" },
                  { top: "25%", right: "25%" },
                  { bottom: "-10%", left: "60%" },
                  { bottom: "-5%", right: "10%" },
                  { bottom: "-20%", left: "-30%" },
                  { top: "-10%", right: "-10%" },
                ];
                const sizes = [75, 50, 35, 25, 50, 100];
                const colors = [
                  "primary.light",
                  "primary.main",
                  "secondary.main",
                  "black",
                  "info.main",
                  "warning.main",
                ];
                return (
                  <Box
                    key={index}
                    sx={{
                      position: "absolute",
                      borderRadius: "50%",
                      backgroundColor: colors[index],
                      width: sizes[index],
                      height: sizes[index],
                      opacity: 0.4,
                      zIndex: 0,
                      animation: "floatBubble 6s ease-in-out infinite",
                      animationDelay: `${index * 0.5}s`,
                      ...bubbles[index],
                    }}
                  />
                );
              })}
            </Box>
          </motion.div>
        </Stack>
      </Box>
    </Container>
  );
};

export default HeroSection;
