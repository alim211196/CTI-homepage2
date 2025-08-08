import React, { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  Container,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Collapse,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/logo.png";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Grow from "@mui/material/Grow";
import DotExpandButton from "./DotExpandButton";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [coachingOpen, setCoachingOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const toggleCoaching = () => {
    setCoachingOpen((prev) => !prev);
  };

  const menuItems = [
    {
      label: "Coaching",
      subItems: [
        "Individual Coaching",
        "Coaching For Organization",
        "Train To Become A Coach",
      ],
    },
    { label: "Find A Coach", href: "#" },
    { label: "How it works", href: "#" },
    { label: "About Us", href: "#" },
    { label: "FAQ", href: "#" },
  ];

  return (
    <>
      <AppBar
        position="sticky"
        elevation={isSticky ? 2 : 0}
        enableColorOnDark
        color="transparent"
        sx={{
          backgroundColor: isSticky ? "#ffffff" : "transparent",
          color: "#121212",
          boxShadow: isSticky ? "0px 2px 8px rgba(0,0,0,0.05)" : "none",
          transition: "all 0.3s ease-in-out",
          zIndex: 1100,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              position: "relative",
              justifyContent: "space-between",
              alignItems: "center",
              py: 4,
            }}
          >
            {/* Hamburger (Left) */}
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>

            {/* Centered Logo (Absolute Center) */}
            <Box
              component="a"
              href="/"
              sx={{
                // mt: 3,
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                src={logo}
                alt="Logo"
                sx={{ width: "250px", height: "auto" }}
              />
            </Box>

            {/* Right Side: Search + Auth Buttons */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <IconButton aria-label="search" size="small">
                <SearchIcon fontSize="medium" />
              </IconButton>
              <Box sx={{ display: "flex", gap: 2, width: "250px" }}>
                <DotExpandButton text={"Login"} hoveredVal={false} />
                <DotExpandButton text={"Sign Up"} hoveredVal={true} />
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Drawer Menu */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 280 }}
          role="presentation"
          // onClick={toggleDrawer(false)}
          // onKeyDown={toggleDrawer(false)}
        >
          <List>
            {/* Coaching dropdown */}
            <ListItem button onClick={toggleCoaching}>
              <ListItemText primary="Coaching" />
              {coachingOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={coachingOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button sx={{ pl: 4 }}>
                  <ListItemText primary="Individual Coaching" />
                </ListItem>
                <ListItem button sx={{ pl: 4 }}>
                  <ListItemText primary="Coaching For Organization" />
                </ListItem>
                <ListItem button sx={{ pl: 4 }}>
                  <ListItemText primary="Train To Become A Coach" />
                </ListItem>
              </List>
            </Collapse>

            {/* Other menu items */}
            {menuItems.slice(1).map((item, index) => (
              <ListItem
                button
                key={index}
                component="a"
                href={item.href}
                onClick={toggleDrawer(false)}
              >
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
