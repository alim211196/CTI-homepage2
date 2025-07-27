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
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import StarIcon from "@mui/icons-material/Star";
import GroupIcon from "@mui/icons-material/Group";
import logo from '../../assets/logo.png';
import { AccessTimeOutlined, CallOutlined, LocationOnOutlined } from "@mui/icons-material";
const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const navItems = [
    { label: "Home", icon: <HomeIcon />, href: "#" },
    { label: "For Coaches", icon: <InfoIcon />, href: "#for-coaches" },
    { label: "Coach Levels", icon: <StarIcon />, href: "#coach-levels" },
    { label: "Find Coaches", icon: <GroupIcon />, href: "#find-coaches" },
    { label: "Coach Match Quiz", icon: <GroupIcon />, href: "#coach-match-quiz" },
    { label: "Organizational Needs", icon: <GroupIcon />, href: "#organizational-needs" },
  ];

  return (
    <>
      <Container maxWidth="xxl">
        {/* Top Info Bar */}
        <Box sx={{ py: 3, px: 1, borderBottom: "1px solid #eee" }}>
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
                width={240}
              />
            </Box>

            {/* Contact Info */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 2, sm: 4 }}
              sx={{ width: "100%", color: '#000' }}
              justifyContent={{ sm: "space-between", md: "flex-end" }}
              alignItems={{ xs: "flex-start", sm: "center" }}
              flexWrap="wrap"
            >
              {[
                {
                  icon: (
                    <CallOutlined
                      sx={{ color: "secondary.main" }}
                      fontSize="small"
                    />
                  ),
                  title: "Call",
                  desc: "+2 342 5446 67",
                },
                {
                  icon: (
                    <AccessTimeOutlined
                      sx={{ color: "secondary.main" }}
                      fontSize="small"
                    />
                  ),
                  title: "Work Time",
                  desc: "Mon - Fri 8 AM - 5 PM",
                },
                {
                  icon: (
                    <LocationOnOutlined
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
                    <Typography variant="body2" color="black">
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
            boxShadow: "none", px: 1,
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
                      fontWeight: 500,
                      fontSize: "1.15rem",
                      color: "neutral.black",
                      position: "relative",
                      cursor: 'pointer',
                      transition: "transform 0.3s ease",

                      "&:hover": {
                        color: "primary.light", transform: "scale(1.05)",
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
