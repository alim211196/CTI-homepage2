import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Stack,
  IconButton,
} from "@mui/material";
import { AccessTimeOutlined, CallOutlined, LocationOnOutlined } from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { motion } from "framer-motion";
import logo from "../../assets/logo.png";
import mapDot from "../../assets/testimonials/map-dot.png";
const navItems = [
  { label: "About Us", href: "#about-us" },
  { label: "Features", href: "#features" },
  { label: "Value Proposition", href: "#value-proposition" },
  { label: "Coaches", href: "#coaches" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Faq's", href: "#faqs" },
];

// Animation variant
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Footer = () => {
  return (
    <Container maxWidth="xxl" sx={{ backgroundColor: "#f2f7fd", py: 5 }}>
      <Box sx={{
        mt: 10, pt: 8, overflow: "visible",
        backgroundImage: `url(${mapDot})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: {
          xs: "cover",
          sm: "contain",
          md: "contain",
        },
      }}>
        <Grid container spacing={8}>
          {/* About */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
            >
              <Box>
                <img src={logo} alt="Logo" width={280} />
                <Typography variant="body2" sx={{ mt: 2 }}>
                  At Coaches Training Institute, we empower individuals to unlock their full
                  potential through world-class coaching programs.

                </Typography>
              </Box>
            </motion.div>
          </Grid>

          {/* Contact */}
          <Grid size={{ xs: 12, sm: 6, md: 5 }}>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
            >
              <Stack spacing={2}>
                <Box display="flex" alignItems="flex-start">
                  <CallOutlined
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

                <Box display="flex" alignItems="flex-start">
                  <AccessTimeOutlined
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

                <Box display="flex" alignItems="flex-start">
                  <LocationOnOutlined
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
            </motion.div>
          </Grid>

          {/* Quick Links */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
            >
              <Typography variant="h6" fontWeight={600} gutterBottom>
                Quick Links
              </Typography>

              <Stack spacing={1}>
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    underline="hover"
                    color="black"
                  >
                    {item.label}
                  </Link>
                ))}
              </Stack>
            </motion.div>
          </Grid>
        </Grid>

        {/* Bottom Footer */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={3}
        >
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            sx={{ mt: 6, borderTop: "1px solid #ddd", pt: 3 }}
          >
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="body2" color="black">
                © Copyrights {new Date().getFullYear()} CTI. All rights reserved
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
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
        </motion.div>
      </Box>
    </Container>
  );
};

export default Footer;
