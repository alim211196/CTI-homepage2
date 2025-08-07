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
import c1 from "../../assets/valueproposition/c1.svg";
import c2 from "../../assets/valueproposition/c2.svg";

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
    image: c1,
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
    image: c2,
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
    image: c1,
  },
];

export default function ValueProposition() {
  return (
    <Box
      sx={{
        py: 8,
        backgroundImage: `url(${bg1})`,
        backgroundSize: {
          xs: "cover", // cover full area on small screens
          sm: "contain", // keep aspect ratio on medium+
          md: "contain",
        },
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={8}
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
                <Box
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
                />

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
                      backgroundColor: svc.color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2,
                    }}
                  >
                    <Box
                      sx={{
                        color: "#fff",
                        fontSize: 40,
                        lineHeight: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {React.isValidElement(svc.icon) &&
                        React.cloneElement(svc.icon, { fontSize: "inherit" })}
                    </Box>
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
                  </Button>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
