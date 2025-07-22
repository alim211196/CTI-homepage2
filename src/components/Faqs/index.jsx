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
import { keyframes } from "@emotion/react";
import shape1 from '../../assets/faqs/shape1.svg';
import image1 from '../../assets/faqs/image1.png';
const pulseShape = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`;

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
      <Box
        sx={{
          py: { xs: 6, md: 8 },
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={6}
          alignItems="center"
          justifyContent="space-between"
        >
          {/* Left Image Section */}
          <Box
            sx={{
              flex: 1,
              width: "100%",
              position: "relative",
              minHeight: { xs: 380, sm: 480, md: 520 },
              mb: { xs: 4, md: 0 },
            }}
          >
            {/* Background shape */}
            <Box
              component="img"
              src={shape1}
              alt="Shape"
              sx={{
                position: "absolute",
                width: { xs: "500px", sm: "650px", md: "800px" },
                height: "auto",
                animation: `${pulseShape} 3s infinite ease-in-out`,
                zIndex: 0,
                borderRadius: "5%",
                left: { xs: "-45px", sm: 0, md: "15%" },
                top: { xs: 0, sm: 0, md: "-25%" },
              }}
            />

            {/* Foreground image */}
            <Box
              component="img"
              src={image1}
              alt="Foreground"
              sx={{
                position: "absolute",
                width: { xs: "130%", sm: "103%", md: "130%" },
                height: "auto",
                animation: `${pulseShape} 3s infinite ease-in-out`,
                zIndex: 1,
                borderRadius: "5%",
                left: { xs: 0, sm: 0, md: "31%" },
                top: { xs: "33px", sm: 0, md: "-12%" },
              }}
            />
          </Box>

          {/* Right Text Content */}
          <Box sx={{ flex: 1, zIndex: 2, width: "100%" }}>
            <Stack spacing={2}>
              <Box sx={{ pl: { md: 6 }, mb: 4 }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: "primary.light",
                  }}
                  gutterBottom
                >
                  Frequently Ask Questions
                </Typography>
                <Typography variant="h4" fontWeight={600} gutterBottom>
                  Do you have questions?
                </Typography>
                <Typography variant="body1" color="text.secondary" mb={4}>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour.
                </Typography>

                {faqs_content.map((faq, idx) => (
                  <Accordion
                    key={idx}
                    sx={{ mb: 2 }}
                    defaultExpanded={idx === 0}
                  >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography>{faq.question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography color="text.secondary">
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
                      backgroundColor: "primary.light",
                      borderRadius: 999,
                      px: 4,
                      py: 1.2,
                      fontWeight: 600,
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: "primary.main",
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
