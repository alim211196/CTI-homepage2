// components/HowItWorks.tsx
import {
  Box,
  Typography,
  Paper,
  Stack,
  Button,
  Container,
} from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import image1 from "../../assets/valueproposition/image1.png";
import image2 from "../../assets/valueproposition/image2.png";
import image3 from "../../assets/valueproposition/image3.png";
import image4 from "../../assets/valueproposition/image4.png";
import shape1 from "../../assets/valueproposition/shape1.png";


const steps = [
  {
    icon: image1,
    title: "Search for Tutors",
    desc: "Post Tuition by creating Account or without Account.",
    bg: "#f8edc8a9",
    dark_bg: "neutral.main",
  },
  {
    icon: image2,
    title: "Get Free Session",
    desc: "Get free one day demo session with the tutor...",
    bg: "#fcdcd9a9",
    dark_bg: "secondary.main",
  },
  {
    icon: image3,
    title: "Hire your tutor",
    desc: "If you like the demo session, confirm the teacher.",
    bg: "#fcdcd9a9",
    dark_bg: "secondary.main",
  },
  {
    icon: image4,
    title: "Get results",
    desc: "Gain knowledge, boost confidence and improve...",
    bg: "#f8edc8a9",
    dark_bg: "neutral.main",
  },
];


const ValueProposition = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: { xs: 8, md: 12 }, px: 2, position: "relative" }}>
        <Stack
          direction={{ xs: "column-reverse", md: "row" }}
          spacing={6}
          alignItems="center"
          justifyContent="center"
          flexWrap="wrap"
        >
          {/* Left: Cards */}
          <Box sx={{ flex: 1 }}>
            <Stack
              direction="row"
              spacing={3}
              useFlexGap
              flexWrap="wrap"
              justifyContent="center"

            >
              {/* Left Column: 0 & 2 */}
              <Stack
                spacing={3}
                sx={{ width: { xs: "100%", sm: "45%", md: "45%" } }}
              >
                {[0, 2].map((idx) => {
                  const item = steps[idx];
                  return (
                    <Box
                      key={idx}
                      component={motion.div}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15, delay: idx * 0.2 }}
                      viewport={{ once: true }}
                      sx={{ position: "relative", zIndex: 1 }}
                    >
                      <Paper
                        elevation={0}
                        sx={{
                          p: 4,
                          borderRadius: 3,
                          backgroundColor: item.bg,
                          textAlign: "left",
                          height: "100%",

                          "&:hover": {
                            transition: "transform 0.3s ease-in-out, background-color 0.3s",
                            backgroundColor: item.dark_bg, // Hover dark
                            color: "#fff",
                          },
                          cursor: "pointer",
                        }}
                      >
                        <Box
                          sx={{
                            width: 80,
                            height: 80,
                            mb: 3,
                            borderRadius: 2,
                            backgroundColor: "#fff",
                            boxShadow: "0 4px 14px rgba(255, 105, 80, 0.4)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <img
                            src={item.icon}
                            alt={item.title}
                            loading="lazy"
                            style={{ width: "50px", height: "50px" }}
                          />
                        </Box>
                        <Typography variant="h6" mb={1} sx={{ fontWeight: 'bold' }} textAlign={'left'}>
                          {item.title}
                        </Typography>
                        <Typography variant="body2" textAlign={'left'} sx={{
                          fontSize: {
                            xs: "0.8rem",   // ~14.4px on extra small screens
                            sm: "0.9rem",     // ~16px on small screens
                            md: "0.95rem",  // ~16.8px
                            lg: "1rem", // 18px on large screens
                          },
                        }}>
                          {item.desc}
                        </Typography>
                      </Paper>
                    </Box>
                  );
                })}
              </Stack>

              {/* Right Column: 1 & 3 with top margin */}
              <Stack
                spacing={3}
                sx={{ width: { xs: "100%", sm: "45%", md: "45%" }, mt: 8 }}
              >
                {[1, 3].map((idx) => {
                  const item = steps[idx];
                  return (
                    <Box
                      key={idx}
                      component={motion.div}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15, delay: idx * 0.2 }}
                      viewport={{ once: true }}
                    >
                      <Paper
                        elevation={0}
                        sx={{
                          p: 4,
                          borderRadius: 3,
                          backgroundColor: item.bg,
                          textAlign: "center",
                          height: "100%",

                          "&:hover": {
                            transition: "transform 0.3s ease-in-out, background-color 0.3s",
                            backgroundColor: item.dark_bg, // Hover dark
                            color: "#fff",
                          },
                          cursor: "pointer",
                        }}
                      >
                        <Box
                          sx={{
                            width: 80,
                            height: 80,
                            mb: 3,
                            borderRadius: 2,
                            backgroundColor: "#fff",
                            boxShadow: "0 4px 14px rgba(255, 105, 80, 0.4)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <img
                            src={item.icon}
                            alt={item.title}
                            loading="lazy"
                            style={{ width: "50px", height: "50px" }}
                          />
                        </Box>
                        <Typography variant="h6" mb={1} textAlign={'left'} sx={{ fontWeight: 'bold' }}>
                          {item.title}
                        </Typography>
                        <Typography variant="body2" textAlign={'left'} sx={{
                          fontSize: {
                            xs: "0.8rem",   // ~14.4px on extra small screens
                            sm: "0.9rem",     // ~16px on small screens
                            md: "0.95rem",  // ~16.8px
                            lg: "1rem", // 18px on large screens
                          },
                        }}>
                          {item.desc}
                        </Typography>
                      </Paper>
                    </Box>
                  );
                })}
              </Stack>
            </Stack>
            {/* Shape animation at the end */}
            <Box
              component="img"
              src={shape1}
              alt="Shape"
              loading="lazy"
              sx={{
                position: "absolute",
                bottom: "-5px",
                left: 0,
                width: 100,
                height: 100,
                animation: "pulseShape 3s infinite ease-in-out",
                zIndex: 0,
                opacity: 0.9,
              }}
            />
          </Box>

          {/* Right: Text */}
          <Box sx={{ flex: 1, pl: { md: 5 } }}>
            <motion.div
              ref={ref}
              initial={{ x: 100, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Box mb={2}>
                <Stack direction="row" spacing={1} alignItems="center" mb={1}>
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
                    For Organizations
                  </Typography>
                </Stack>

                <Typography variant="h4" fontWeight={600} mb={2}>
                  Value Proposition
                </Typography>

                <Typography variant="body1" color="text.secondary">
                  We strive to make the tutoring process simple, effective, and
                  stress-free for both students and parents. We carefully match
                  the student with a tutor who specializes in the relevant subject
                  area.
                </Typography>

                <Box mt={4} pt={4} borderTop="1px dashed #ddd">
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
                        background: "linear-gradient(90deg, #FF914D 0%, #FF6A5B 100%)",
                        boxShadow: "0 6px 20px rgba(255, 105, 80, 0.5)",
                        transform: "scale(1.05)",
                      },
                    }}
                  >
                    Register Now
                  </Button>
                </Box>
              </Box>
            </motion.div>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
};

export default ValueProposition;
