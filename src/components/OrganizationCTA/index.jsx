import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

const OrganizationCTA = () => {
    return (
        <Box
            sx={{
                background: "linear-gradient(90deg, #fcdcd9a9 0%, #f8edc8a9 100%)",
                py: { xs: 7, md: 10 },
                px: 2,
                textAlign: "center",
                color: "#fff",
            }}
        >
            <Container maxWidth="md">
                <Box
                    component={motion.div}
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 700,
                            color: "neutral.black",
                            lineHeight: 1.4,

                        }}
                    >
                        Ready to Transform Your Organization?
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{ mb: 4, color: "black" }}
                    >
                        Take our organizational needs assessment or find the perfect coach for your team.
                    </Typography>

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
                            Assess Your Needs
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
                                    backgroundColor: "rgba(255, 106, 91, 0.1)",
                                    borderColor: "#FF6A5B", transform: "scale(1.05)",
                                },
                            }}
                        >
                            Take Coach Match Quiz
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default OrganizationCTA;
