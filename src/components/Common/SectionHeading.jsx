import React from "react";
import { Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

const SectionHeading = ({ title, subtitle }) => {
    return (
        <MotionBox
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            sx={{
                textAlign: "center",
                py: 1,
                cursor: "default",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <MotionTypography
                component="h2"
                whileHover={{
                    scale: 1.05,
                    color: "rgba(133, 21, 28, 0.9)", // gold-like hover color
                }}
                transition={{ type: "spring", stiffness: 300 }}
                sx={{
                    fontFamily: '"July It", sans-serif',
                    fontSize: { xs: "2rem", md: "2.5rem" },
                    color: "rgba(255, 73, 57, 0.9)",
                    fontWeight: 600,
                    display: "inline-block",
                    cursor: "pointer",
                }}
            >
                {title}
            </MotionTypography>

            <MotionTypography
                component="h6"
                whileHover={{
                    letterSpacing: "0.35em", // spacing on hover
                    color: "rgba(255, 73, 57, 0.9)",
                }}
                transition={{ duration: 0.3 }}
                sx={{
                    fontFamily: '"IBM Plex Sans", sans-serif',
                    fontSize: { xs: "1rem", md: "1.25rem" },
                    textTransform: "uppercase",
                    letterSpacing: "0.25em", // reduced base spacing
                    color: "black",
                    display: "inline-block",
                    textAlign: "center",
                    overflow: "hidden",
                    whiteSpace: "nowrap", textOverflow: "ellipsis",
                    maxWidth: "100%", // ensure no overflow
                    wordBreak: "break-word", // break long words if needed
                }}
            >
                {subtitle}
            </MotionTypography>

        </MotionBox>
    );
};

export default SectionHeading;
