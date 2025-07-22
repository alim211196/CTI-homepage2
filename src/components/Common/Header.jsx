import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Container,
  Link,
  Stack,
  Tooltip,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import StarIcon from "@mui/icons-material/Star";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import GroupIcon from "@mui/icons-material/Group";
import ForumIcon from "@mui/icons-material/Forum";
import HelpIcon from "@mui/icons-material/Help";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import logo from '../../assets/logo.png';
const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const navItems = [
    { label: "Home", icon: <HomeIcon />, href: "#" },
    { label: "About Us", icon: <InfoIcon />, href: "#about-us" },
    { label: "Features", icon: <StarIcon />, href: "#features" },
    {
      label: "Value Proposition",
      icon: <EmojiObjectsIcon />,
      href: "#value-proposition",
    },
    { label: "Coaches", icon: <GroupIcon />, href: "#coaches" },
    { label: "Testimonials", icon: <ForumIcon />, href: "#testimonials" },
    { label: "Faq's", icon: <HelpIcon />, href: "#faqs" },
    { label: "Newsletter", icon: <MailOutlineIcon />, href: "#newsletter" },
  ];

  return (
    <>
      <Container maxWidth="xl">
        {/* Top Info Bar */}
        <Box sx={{ py: 3, borderBottom: "1px solid #eee" }}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", md: "center" }}
            spacing={3}
          >
            {/* Logo */}
            <Box display="flex" alignItems="center">
              <img
                src={logo}
                alt="logo"
                style={{ marginRight: 8 }}
                width={180}
              />
            </Box>

            {/* Contact Info */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 2, sm: 4 }}
              sx={{ width: "100%" }}
              justifyContent={{ sm: "space-between", md: "flex-end" }}
              alignItems={{ xs: "flex-start", sm: "center" }}
              flexWrap="wrap"
            >
              {[
                {
                  icon: (
                    <PhoneIcon
                      sx={{ color: "secondary.main" }}
                      fontSize="small"
                    />
                  ),
                  title: "Call",
                  desc: "+2 342 5446 67",
                },
                {
                  icon: (
                    <AccessTimeIcon
                      sx={{ color: "secondary.main" }}
                      fontSize="small"
                    />
                  ),
                  title: "Work Time",
                  desc: "Mon - Fri 8 AM - 5 PM",
                },
                {
                  icon: (
                    <LocationOnIcon
                      sx={{ color: "secondary.main" }}
                      fontSize="small"
                    />
                  ),
                  title: "Address",
                  desc: "Franklin St, Greenpoint Ave",
                },
              ].map((info, idx) => (
                <Stack
                  key={idx}
                  direction="row"
                  spacing={1}
                  alignItems="flex-start"
                >
                  {info.icon}
                  <Stack>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      {info.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {info.desc}
                    </Typography>
                  </Stack>
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Box>

        {/* Nav & Social Media */}
        <AppBar
          position="static"
          elevation={0}
          sx={{
            bgcolor: "transparent",
            boxShadow: "none",
            borderBottom: "1px solid #eee",
          }}
        >
          <Toolbar
            disableGutters
            sx={{
              justifyContent: "space-between",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              py: 2,
            }}
          >
            {/* Responsive Nav */}
            <Stack
              direction="row"
              spacing={isMobile ? 1.5 : 3}
              flexWrap="wrap"
              justifyContent="center"
              alignItems="center"
            >
              {navItems.map((item, index) =>
                isMobile ? (
                  <Tooltip title={item.label} key={index}>
                    <IconButton
                      href={item.href}
                      sx={{
                        color: "neutral.black",
                        "&:hover": { color: "primary.light" },
                      }}
                    >
                      {item.icon}
                    </IconButton>
                  </Tooltip>
                ) : (
                  <Link
                    key={index}
                    href={item.href}
                    underline="none"
                    sx={{
                      fontWeight: 600,
                      fontSize: "0.95rem",
                      color: "neutral.black",
                      position: "relative",
                      "&:hover": {
                        color: "primary.light",
                      },
                      ...(item.label === "Home" && {
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          bottom: -6,
                          left: 0,
                          width: "100%",
                          height: 2,
                          backgroundColor: "primary.light",
                        },
                      }),
                    }}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </Stack>

            {/* Social Icons */}
            <Stack
              direction="row"
              spacing={1}
              sx={{
                mt: { xs: 2, md: 0 },
              }}
            >
              {[FacebookIcon, LinkedInIcon, InstagramIcon].map((Icon, idx) => (
                <IconButton
                  key={idx}
                  size="small"
                  sx={{
                    bgcolor: "primary.light",
                    color: "neutral.white",
                    transition: "transform 0.2s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.1)",
                      bgcolor: "primary.main",
                    },
                  }}
                >
                  <Icon fontSize="small" />
                </IconButton>
              ))}
            </Stack>
          </Toolbar>
        </AppBar>
      </Container>
    </>
  );
};

export default Header;
