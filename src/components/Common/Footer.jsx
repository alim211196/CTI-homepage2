import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Stack,
  IconButton,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const navItems = [
  { label: "About Us", href: "#about-us" },
  { label: "Features", href: "#features" },
  {
    label: "Value Proposition",

    href: "#value-proposition",
  },
  { label: "Coaches", href: "#coaches" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Faq's", href: "#faqs" },
];

const Footer = () => {
  return (
    <Container maxWidth="xl" sx={{ backgroundColor: "#f2f7fd", py: 10 }}>
      <Box sx={{ mt: 10, pt: 8, pb: 4 }}>
        {/* Top Footer */}
        <Grid container spacing={8}>
          {/* About */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Box>
              <img src="src/assets/logo.png" alt="Logo" width={280} />
              <Typography variant="body2" sx={{ mt: 2 }}>
                Vivamus porta efficitur nibh nec convallis. Vestibulum egestas
                eleifend justo. Ut tellus ipsum, accumsan.
              </Typography>
            </Box>
          </Grid>

          {/* Contact */}
          <Grid size={{ xs: 12, sm: 6, md: 5 }}>
            <Stack spacing={2}>
              {/* Phone */}
              <Box display="flex" alignItems="flex-start">
                <PhoneIcon
                  sx={{ color: "secondary.main", mt: 0.5, mr: 1 }}
                  fontSize="small"
                />
                <Box>
                  <Typography variant="subtitle1" fontWeight={600}>
                    Call
                  </Typography>
                  <Typography variant="body2">+2 342 5446 67</Typography>
                </Box>
              </Box>

              {/* Work Time */}
              <Box display="flex" alignItems="flex-start">
                <AccessTimeIcon
                  sx={{ color: "secondary.main", mt: 0.5, mr: 1 }}
                  fontSize="small"
                />
                <Box>
                  <Typography variant="subtitle1" fontWeight={600}>
                    Work Time
                  </Typography>
                  <Typography variant="body2">Mon - Fri 8 AM - 5 PM</Typography>
                </Box>
              </Box>

              {/* Address */}
              <Box display="flex" alignItems="flex-start">
                <LocationOnIcon
                  sx={{ color: "secondary.main", mt: 0.5, mr: 1 }}
                  fontSize="small"
                />
                <Box>
                  <Typography variant="subtitle1" fontWeight={600}>
                    Address
                  </Typography>
                  <Typography variant="body2">
                    Franklin St, Greenpoint Ave
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Grid>

          {/* Quick Links */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }} >
            <Typography variant="h6" fontWeight={600} gutterBottom>
              Quick Links
            </Typography>

            <Stack spacing={1}>
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  underline="hover"
                  color="text.secondary"
                >
                  {item.label}
                </Link>
              ))}
            </Stack>
          </Grid>
        </Grid>

        {/* Bottom Footer */}
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          sx={{ mt: 6, borderTop: "1px solid #ddd", pt: 3 }}
        >
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="body2" color="text.secondary">
              © Copyrights {new Date().getFullYear()} CTI. All rights reserved
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            {/* Social Icons */}
            <Stack direction="row" spacing={1} justifyContent="flex-end">
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
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Footer;
