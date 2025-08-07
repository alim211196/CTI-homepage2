import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Stack,
  Button,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ForumIcon from "@mui/icons-material/Forum";
import PersonIcon from "@mui/icons-material/Person";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import bg1 from "../../assets/valueproposition/bg1.webp";
import image5 from "../../assets/featuredcoaches/new/image5.jpg";
import image3 from "../../assets/featuredcoaches/new/image3.jpg";
import image6 from "../../assets/featuredcoaches/new/image6.jpg";

const services = [
  {
    title: "Looking for an Individual Coach?",
    desc: [
      "Lorem ipsum dolor sit amet. Consectetur adipiscing elit.",
      "Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      "Sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet",
    ],
    icon: <ForumIcon />,
    buttonText: "HIRE AN INDIVIDUAL COACH",
    variant: "outlined",
    color: "#FCC380",
    image: image5,
  },
  {
    title: "Looking to Bring Coaching to your organization?",
    desc: [
      "Lorem ipsum dolor sit amet. Consectetur adipiscing elit.",
      "Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      "Sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet",
    ],
    icon: <PersonIcon />,
    buttonText: "HIRE A COACH",
    variant: "contained",
    color: "#FF4939",
    image: image3,
  },
  {
    title: "Looking to be trained as a Coach?",
    desc: [
      "Lorem ipsum dolor sit amet. Consectetur adipiscing elit.",
      "Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      "Sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet",
    ],
    icon: <PeopleAltIcon />,
    buttonText: "TRAIN AS COACH",
    variant: "outlined",
    color: "#FCC380",
    image: image6,
  },
];

export default function ValueProposition() {
  return (
    <Box
      sx={{
        py: 8,
        // backgroundImage: `url(${bg1})`,
        // backgroundSize: {
        //   xs: "cover", // cover full area on small screens
        //   sm: "contain", // keep aspect ratio on medium+
        //   md: "contain",
        // },
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={3}
        >
          <Typography variant="h4" fontWeight={700}>
            Value Proposition
          </Typography>
          <Button
            endIcon={<ArrowForwardIcon />}
            sx={{
              color: "#CB1C1B",
              textTransform: "none",
              fontWeight: 600,
            }}
          >
            How it works
          </Button>
        </Box>

        {/* Service Cards */}
        <Grid container spacing={3}>
          {services.map((svc, idx) => (
            <Grid item size={{ xs: 12, md: 4 }} key={idx}>
              <Box
                sx={{
                  position: "relative",
                  pt: idx === 1 ? "80px" : "100px",
                  height: idx === 1 ? "100%" : "100%",
                }}
              >
                {/* Image positioned absolutely and behind card */}
                {/* <Box
                  component="img"
                  src={svc.image}
                  alt="badge"
                  sx={{
                    position: "absolute",
                    top: idx === 1 ? "50px" : "85px",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 0,
                    height: "auto",
                    width: "50%",
                  }}
                /> */}

                <Card
                  sx={{
                    position: "relative",
                    zIndex: 1,
                    height: idx === 1 ? "110%" : "100%",
                    display: "flex",
                    flexDirection: "column",
                    p: 2,
                    textAlign: "center",
                    alignItems: "center",
                    border:
                      idx === 1 ? "4px solid #FF4939" : "3px dashed #dfe1e6",
                    borderRadius: 3,
                    transform: idx === 1 ? "translateY(-20px)" : "none",
                  }}
                >
                  <Box
                    sx={{
                      width: 100,
                      height: 100,
                      borderRadius: "50%",
                      overflow: "hidden", // ensures circular crop
                      mb: 2,
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // optional styling
                    }}
                  >
                    <Box
                      component="img"
                      src={svc.image}
                      alt={svc.title}
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover", // ensures it covers the circle
                        display: "block",
                      }}
                    />
                  </Box>

                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    {svc.title}
                  </Typography>

                  <CardContent sx={{ flexGrow: 1 }}>
                    {svc.desc.map((p, i) => (
                      <Typography key={i} variant="body2" paragraph>
                        {p}
                      </Typography>
                    ))}
                  </CardContent>

                  <Button
                    sx={{
                      width: 270,
                      cursor: "pointer",
                      borderRadius: "999px",
                      px: 2.5, // reduced from 3.5
                      py: 0.8, // reduced from 1.2
                      fontWeight: 600,
                      fontSize: {
                        xs: "0.8rem", // reduced from 0.95rem
                        sm: "0.9rem", // reduced from 1rem
                      },
                      transition: "all 0.4s ease",
                      transform: "scale(1)",
                      background:
                        svc.variant === "contained"
                          ? "linear-gradient(90deg, #FF6A5B 0%, #FF914D 100%)"
                          : "transparent",
                      color: svc.variant === "contained" ? "white" : "#FF6A5B",
                      border: `1px solid ${
                        svc.variant === "contained" ? "transparent" : "#FF6A5B"
                      }`,
                      textAlign: "center",
                      boxShadow:
                        svc.variant === "contained"
                          ? "0 3px 10px rgba(255, 105, 80, 0.3)" // slightly smaller shadow
                          : "none",
                      "&:hover": {
                        transform: "scale(1.05)",
                        background:
                          svc.variant === "contained"
                            ? "linear-gradient(90deg, #FF914D 0%, #FF6A5B 100%)"
                            : "rgba(255, 106, 91, 0.1)",
                        boxShadow:
                          svc.variant === "contained"
                            ? "0 5px 16px rgba(255, 105, 80, 0.4)"
                            : "0 2px 4px rgba(255, 105, 80, 0.2)",
                      },
                    }}
                  >
                    {svc.buttonText}
                  </Button>

                  {/* <Button
                    variant={svc.variant}
                    size="medium"
                    sx={{
                      px: 3,
                      py: 1,
                      fontWeight: 600,
                      borderRadius: 1,
                      m: 2,
                      ...(svc.variant === "outlined" && {
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
                      }),
                      ...(svc.variant === "contained" && {
                        backgroundColor: "#CB1C1B",
                        transition: "transform 0.3s ease, opacity 0.3s ease",
                        color: "#fff",
                        "&:hover": {
                          transform: "scale(1.05)",
                          backgroundColor: "#85151C",
                          color: "#fff",
                        },
                      }),
                    }}
                  >
                    {svc.buttonText}
                  </Button> */}
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
