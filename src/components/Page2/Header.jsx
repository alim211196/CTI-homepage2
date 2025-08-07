import React, { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Link,
  useTheme,
  useMediaQuery,
  Button,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import logo from "../../assets/logo.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Grow from "@mui/material/Grow";
import DotExpandButton from "./DotExpandButton";

const navItems1 = [
  { label: "Find A Coach", href: "#" },
  { label: "How it works", href: "#" },
];

const navItems2 = [
  { label: "About Us", href: "#" },
  { label: "FAQ", href: "#" },
];

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AppBar
        position="sticky"
        elevation={isSticky ? 2 : 0}
        enableColorOnDark
        color="transparent"
        sx={{
          backgroundColor: isSticky ? "#ffffff" : "transparent",
          color: isSticky ? "#121212" : "#121212",
          boxShadow: isSticky ? "0px 2px 8px rgba(0,0,0,0.05)" : "none",
          transition: "all 0.3s ease-in-out",
          zIndex: 1100,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              justifyContent: "center", // Centering content
              alignItems: "center",
              py: 0.5,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              {/* Coaching dropdown */}
              <Box
                onMouseEnter={(e) => setAnchorEl(e.currentTarget)}
                onMouseLeave={() => setAnchorEl(null)}
                onClick={(e) => setAnchorEl(e.currentTarget)} // Also supports click
                sx={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <Typography
                  sx={{
                    cursor: "pointer",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    color: isSticky ? "neutral.black" : "primary.light",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    "&:hover": {
                      color: "primary.light",
                    },
                  }}
                >
                  Coaching
                  <KeyboardArrowDownIcon fontSize="small" />
                </Typography>

                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onMouseLeave={() => setAnchorEl(null)}
                  TransitionComponent={Grow} // <-- animation here
                  MenuListProps={{
                    onMouseEnter: () => setAnchorEl(anchorEl),
                    onMouseLeave: () => setAnchorEl(null),
                  }}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  sx={{ top: "30px" }}
                >
                  <MenuItem onClick={() => setAnchorEl(null)}>
                    Individual Coaching
                  </MenuItem>
                  <MenuItem onClick={() => setAnchorEl(null)}>
                    Coaching For Organization
                  </MenuItem>
                  <MenuItem onClick={() => setAnchorEl(null)}>
                    Train To Become A Coach
                  </MenuItem>
                </Menu>
              </Box>

              {navItems1.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  underline="none"
                  sx={{
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    color: isSticky ? "neutral.black" : "primary.light",
                    "&:hover": {
                      color: "primary.dark",
                    },
                  }}
                >
                  {item.label}
                </Link>
              ))}

              {/* Logo */}
              <Box
                component="a"
                href="/"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Box
                  component="img"
                  src={logo}
                  alt="Logo"
                  sx={{ width: "270px", height: "auto" }}
                />
              </Box>

              {navItems2.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  underline="none"
                  sx={{
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    color: isSticky ? "neutral.black" : "primary.light",
                    "&:hover": {
                      color: "primary.dark",
                    },
                  }}
                >
                  {item.label}
                </Link>
              ))}

              <Box sx={{ display: "flex", gap: 2, width: "250px" }}>
                <DotExpandButton text={"Login"} />
                <DotExpandButton text={"Sign Up"} />
              </Box>

              {/* <Button
                variant="outlined"
                size="medium"
                sx={{
                  fontWeight: 600,
                  borderRadius: 2,
                  color: "primary.light",
                  border: "1px solid",
                  borderColor: "primary.light",
                  backgroundColor: "transparent",
                  transition: "transform 0.3s ease, opacity 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    backgroundColor: "#CB1C1B",
                    color: "#fff",
                    borderColor: "#CB1C1B",
                  },
                }}
              >
                Login / Sign Up CTA
              </Button> */}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
