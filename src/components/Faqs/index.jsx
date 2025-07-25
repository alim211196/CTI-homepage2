import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Stack,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import shape1 from "../../assets/Faqs/shape.svg";
import image1 from "../../assets/Faqs/2.png";
import { motion } from "framer-motion";
import bgDots from "../../assets/testimonials/map-dot.png";
const MotionTypography = motion(Typography);
const faqs_content = [
  {
    question: "If I face any issue then how can I contact with you?",
    answer:
      "An attack of the ague sent him home, and on recovery, having resolved to attend a high school and fit himself to become a teacher, he passed the next four years in a hard struggle with poverty.",
  },
  {
    question: "I need to know your best proffered Courses?",
    answer:
      "An attack of the ague sent him home, and on recovery, having resolved to attend a high school and fit himself to become a teacher, he passed the next four years in a hard struggle with poverty.",
  },
  {
    question: "How much money we need to give you?",
    answer:
      "An attack of the ague sent him home, and on recovery, having resolved to attend a high school and fit himself to become a teacher, he passed the next four years in a hard struggle with poverty.",
  },
];

const Faqs = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{
        py: { xs: 6, md: 8 }, overflow: "hidden",
        backgroundImage: `url(${bgDots})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: {
          xs: "cover",
          sm: "contain",
          md: "contain",
        },
      }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={6}
          alignItems="center"
          justifyContent="space-between"
        >
          {/* Left Image Section with animation */}
          <Box
            component={motion.div}
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            sx={{
              flex: 1,
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              minHeight: { xs: 380, sm: 480, md: 520 },
              mb: { xs: 4, md: 0 },
            }}
          >
            <Box
              component={motion.div}
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              sx={{ position: "relative", width: "100%" }}
            >
              <Box
                component="img"
                src={shape1}
                alt="Shape"
                sx={{
                  width: "100%",
                  height: "auto",
                  zIndex: 0,
                  borderRadius: "5%",
                  position: "absolute",
                  top: { md: 200, xl: 232 },
                  left: 0,
                }}
              />
              <Box
                component="img"
                src={image1}
                alt="Foreground"
                sx={{
                  width: "100%",
                  height: "auto",
                  zIndex: 1,
                  position: "relative",
                  borderRadius: "5%",
                }}
              />
            </Box>
          </Box>

          {/* Right Text Content with animation */}
          <Box
            component={motion.div}
            initial={{ x: 80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            sx={{ flex: 1, zIndex: 2, width: "100%" }}
          >
            <Stack spacing={2}>
              <Box sx={{ pl: { md: 6 }, mb: 4 }}>
                <MotionTypography
                  component="h4"
                  whileHover={{
                    scale: 1.05,
                    color: "	rgba(133, 21, 28, 0.9)", // gold-like hover color
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  sx={{
                    fontFamily: '"July It", sans-serif',
                    fontSize: { xs: "2rem", md: "2.5rem" },
                    color: "rgba(255, 73, 57, 0.9)",
                    fontWeight: 600,
                    display: "inline-block",
                    cursor: 'pointer'
                  }}
                >
                  Frequently Ask Questions
                </MotionTypography>

                <Typography variant="h6" fontWeight={600} gutterBottom>
                  Do you have questions?
                </Typography>

                <Typography variant="body1" color="black" mb={4}>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour.
                </Typography>

                {faqs_content.map((faq, idx) => (
                  <Accordion
                    key={idx}
                    elevation={0}
                    sx={{
                      mb: 2,
                      boxShadow: "0 4px 14px rgba(250, 204, 194, 0.4)",
                      border: "none",
                    }}
                    defaultExpanded={idx === 0}
                  >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography sx={{ fontWeight: 'bold' }}>{faq.question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography color="black">
                        {faq.answer}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}

                <Box mt={5}>
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
                    Ask Question
                  </Button>
                </Box>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
};

export default Faqs;
