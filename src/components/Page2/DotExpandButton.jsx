import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

const DotExpandButton = ({ text, hoveredVal }) => {
  const [hovered, setHovered] = useState(hoveredVal || false);
  const [pressed, setPressed] = useState(false);

  const arrowTransform = () => {
    if (pressed) return "translateX(0) rotate(-45deg)";
    if (hovered) return "translateX(0)";
    return "translateX(-200%)";
  };

  const arrowFontSize = hovered ? "18px" : "0px";
  const arrowColor = hovered ? "#CB1C1B" : "transparent";
  const buttonBg = pressed ? "#404040" : hovered ? "#CB1C1B" : "#e5e5e5";
  const buttonColor = hovered ? "#fff" : "#CB1C1B";
  const buttonPaddingLeft = hovered ? "8px" : "12px";
  const iconBg = hovered ? "#fff" : "#CB1C1B";

  // Small size for initial dot, expands on hover
  const iconSize = hovered ? 24 : 12;

  return (
    <Button
      disableRipple
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        if (!hoveredVal) {
          setHovered(false);
          setPressed(false);
        }
      }}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      sx={{
        alignItems: "center",
        gap: 2,
        borderRadius: "20px",
        backgroundColor: buttonBg,
        color: buttonColor,
        paddingLeft: buttonPaddingLeft,
        paddingRight: "12px",
        height: "35px",
        fontSize: "14px",
        textTransform: "none",
        fontFamily: "inherit",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          backgroundColor: "#CB1C1B",
        },
      }}
    >
      <Box
        className="icon-container"
        sx={{
          borderRadius: "50%",
          backgroundColor: iconBg,
          padding: hovered ? "4px" : "2px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: iconSize,
          height: iconSize,
          transition: "all 0.3s ease-in-out",
        }}
      >
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            transform: arrowTransform(),
            fontSize: arrowFontSize,
            color: arrowColor,
            transition: "all 0.3s ease-in-out",
            display: "inline-block",
          }}
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12,5 19,12 12,19"></polyline>
        </svg>
      </Box>
      <Typography component="span">{text}</Typography>
    </Button>
  );
};

export default DotExpandButton;
