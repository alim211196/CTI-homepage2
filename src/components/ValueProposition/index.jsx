// components/HowItWorks.tsx
import {
  Box,
  Typography,
  Paper,
  Stack,
  Button,
  Container,
} from "@mui/material";
import { motion } from "framer-motion";
const steps = [
  {
    icon: "src/assets/valueproposition/image1.png",
    title: "Search for Tutors",
    desc: "Post Tuition by creating Account or without Account.",
    bg: "#fce2978a",
    dark_bg: "neutral.main",
  },
  {
    icon: "src/assets/valueproposition/image2.png",
    title: "Get Free Session",
    desc: "Get free one day demo session with the tutor...",
    bg: "#ff4a39a9",
    dark_bg: "secondary.main",
  },
  {
    icon: "src/assets/valueproposition/image3.png",
    title: "Hire your tutor",
    desc: "If you like the demo session, confirm the teacher.",
    bg: "#ff4a39a9",
    dark_bg: "secondary.main",
  },
  {
    icon: "src/assets/valueproposition/image4.png",
    title: "Get results",
    desc: "Gain knowledge, boost confidence and improve...",
    bg: "#fce2978a",
    dark_bg: "neutral.main",
  },
];

const ValueProposition = () => {
  return (
    <Container maxWidth="xl">
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
                      transition={{ duration: 0.6, delay: idx * 0.3 }}
                      viewport={{ once: true }}
                      sx={{ position: "relative", zIndex: 1 }}
                    >
                      <Paper
                        elevation={3}
                        sx={{
                          p: 4,
                          borderRadius: 3,
                          backgroundColor: item.bg,
                          textAlign: "center",
                          height: "100%",
                          transition: "background-color 0.3s",
                          "&:hover": {
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
                            mx: "auto",
                            mb: 3,
                            borderRadius: 2,
                            boxShadow: 2,
                            backgroundColor: "#fff",
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
                        <Typography variant="h6" mb={1}>
                          {item.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
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
                      transition={{ duration: 0.6, delay: idx * 0.3 }}
                      viewport={{ once: true }}
                    >
                      <Paper
                        elevation={3}
                        sx={{
                          p: 4,
                          borderRadius: 3,
                          backgroundColor: item.bg,
                          textAlign: "center",
                          height: "100%",
                          transition: "background-color 0.3s",
                          "&:hover": {
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
                            mx: "auto",
                            mb: 3,
                            borderRadius: 2,
                            boxShadow: 2,
                            backgroundColor: "#fff",
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
                        <Typography variant="h6" mb={1}>
                          {item.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
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
              src="src/assets/valueproposition/shape1.png"
              alt="Shape"
              loading="lazy"
              sx={{
                position: "absolute",
                bottom: "95px",
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
            <Box mb={2}>
              <Stack direction="row" spacing={1} alignItems="center" mb={1}>
                <Typography
                  variant="body2"
                  sx={{
                    color: "primary.light",
                    fontWeight: 600,
                    textDecoration: "underline",
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
                    backgroundColor: "primary.light",
                    borderRadius: 999,
                    px: 4,
                    py: 1.2,
                    fontWeight: 600,
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "primary.main",
                    },
                  }}
                >
                  Register Now
                </Button>
              </Box>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
};

export default ValueProposition;
