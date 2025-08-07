import React from "react";
import { Box, Button, Stack, Typography, Container } from "@mui/material";

const GetStartedCard = () => {
    return (
        <Container maxWidth="lg">
            <Box
                sx={{
                    bgcolor: "#fff8f6",
                    borderRadius: 3,
                    boxShadow: "0 4px 14px rgba(255, 105, 80, 0.4)",
                    px: { xs: 3, md: 6 },
                    py: { xs: 4, md: 5 },
                    textAlign: "center",
                    mt: 10,
                }}
            >
                <Stack
                    direction={{ xs: "column", md: "row" }}
                    spacing={3}
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Box textAlign={{ xs: "center", md: "left" }}>
                        <Typography
                            variant="h6"
                            sx={{
                                color: "secondary",
                                fontWeight: 700,
                                fontSize: "1.5rem",
                                mb: 1,
                            }}
                        >
                            Ready to Get Started?
                        </Typography>
                        <Typography variant="body1" color="black">
                            Join thousands of professionals who've transformed their careers with our coaching network.
                        </Typography>
                    </Box>
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
                        Start Your Journey
                    </Button>

                </Stack>
            </Box>
        </Container>
    );
};

export default GetStartedCard;
