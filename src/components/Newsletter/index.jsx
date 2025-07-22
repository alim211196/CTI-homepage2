import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import newsBg from "../../assets/news-bg.png";
const Newsletter = () => {
  return (
    <Container maxWidth="xl" sx={{ mb: -20 }}>
      <Box
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
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={3}>
              <Typography variant="h4" fontWeight={600}>
                Join us
                <br />
                and stay tuned!
              </Typography>
            </Stack>
          </Grid>

          {/* Right Side Form */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                alignItems: "start", // centers the child items
              }}
            >
              {/* Email Field with custom width */}
              <Box sx={{ width: { xs: "100%", sm: "400px" } }}>
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  InputProps={{
                    sx: {
                      backgroundColor: "#FCC380",
                      borderRadius: "30px",
                    },
                  }}
                  InputLabelProps={{
                    sx: {
                      color: "#000",
                    },
                  }}
                />
              </Box>

              {/* Button remains auto-sized */}
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
                Join Us&nbsp;
                <i className="fas fa-long-arrow-alt-right"></i>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Newsletter;
