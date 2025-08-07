import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import newsBg from "../../assets/news-bg.png";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Newsletter = () => {
  return (
    <Container maxWidth="xxl" sx={{ mb: -20 }}>
      <Box
        component={motion.div}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        sx={{
          m: 5,
          py: { xs: 5, md: 10 },
          px: 3,
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(90deg, #FCE297, #CB1C1B)",
          borderRadius: 15,
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: 100,
            height: 100,
            backgroundImage: `url(${newsBg})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            zIndex: 1,
          },
        }}
      >
        <Grid
          container
          spacing={15}
          alignItems="center"
          justifyContent="center"
        >
          {/* Left Side Text */}
          <Grid item size={{ xs: 12, md: 6 }}>
            <motion.div
              variants={fadeUp}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <Stack spacing={3} sx={{ justifyContent: "center", alignItems: "center"}}>
                <Typography variant="h4" fontWeight={600}>
                  Join us and stay tuned!
                </Typography>
              </Stack>
            </motion.div>
          </Grid>

          {/* Right Side Form */}
          <Grid item size={{ xs: 12, md: 6 }}>
            <motion.div
              variants={fadeUp}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <Box
                component="form"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  alignItems: "start",
                }}
              >
                <Box sx={{ width: { xs: "100%", sm: "400px" } }}>
                  {/* FLEX ROW CONTAINER */}
                  <Box
                    sx={{
                      display: "flex",
                      gap: 1.5, // spacing between TextField and Button
                      alignItems: "center",
                    }}
                  >
                    <TextField
                      fullWidth
                      placeholder="Enter your email"
                      variant="outlined"
                      InputProps={{
                        sx: {
                          background: "white",
                          boxShadow: "0 6px 20px rgba(255, 105, 80, 0.5)",
                          borderRadius: "30px",
                          height: 50,
                          px: 1.5,
                          border: "1px solid #FF6A5B",
                          "& .MuiOutlinedInput-notchedOutline": {
                            border: "none",
                          },
                          "&:hover .MuiOutlinedInput-notchedOutline": {
                            border: "none",
                          },
                          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            border: "none",
                          },
                          fontWeight: 500,
                          fontSize: "1rem",
                          color: "black",
                        },
                      }}
                      InputLabelProps={{ shrink: false }}
                      sx={{
                        "& .MuiInputBase-input::placeholder": {
                          color: "#a4a4a4",
                          opacity: 0.7,
                          fontSize: 18,
                        },
                      }}
                    />

                    <Button
                      variant="outlined"
                      sx={{
                        whiteSpace: "nowrap",
                        color: "black",
                        background: "#FCE297",
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
                          backgroundColor: "rgba(255, 106, 91, 0.1)",
                          borderColor: "#FCE297",
                          transform: "scale(1.05)",
                          color: "white",
                        },
                      }}
                    >
                      Join Us&nbsp;
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </Button>
                  </Box>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Newsletter;
