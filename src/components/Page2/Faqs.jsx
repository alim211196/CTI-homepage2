import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Stack,
  Grid,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion } from "framer-motion";
import bgDots from "../../assets/testimonials/map-dot.png";
import image1 from "../../assets/Faqs/image1.jpg";
import image2 from "../../assets/Faqs/image2.jpg";
import video1 from "../../assets/Faqs/video1.mp4";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { PlayArrow } from "@mui/icons-material";

const MotionTypography = motion(Typography);

const faqs_content = [
  {
    question: "How can I get in touch if I have a question or issue?",
    answer:
      "You can contact us anytime by filling out our support form or reaching out to our customer care team via email or phone. We're here to help and aim to respond as quickly as possible.",
  },
  {
    question: "What are your most recommended or popular courses?",
    answer:
      "Our most popular courses are designed to help individuals grow both personally and professionally. We recommend starting with foundational programs like our Leadership or Coaching certification tracks, which are highly impactful and widely recognized.",
  },
  {
    question: "What is the cost of your courses and programs?",
    answer:
      "Course costs vary based on the program and level. We offer flexible pricing options and payment plans to make it accessible. For detailed pricing, visit the course page or contact our enrollment team.",
  },
];

const leftVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.8, // increased duration for slower effect
      ease: [0.25, 0.1, 0.25, 1], // smoother easing (easeInOut)
    },
  },
};

const Faqs = () => {
  return (
    <Container maxWidth="xxl">
      <style>
        {`
          @keyframes floatBubble {
            0% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-20px) scale(1.1); }
            100% { transform: translateY(0) scale(1); }
          }
        `}
      </style>
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          px: 2,
          overflow: "hidden",
          backgroundImage: `url(${bgDots})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: {
            xs: "cover",
            sm: "contain",
            md: "contain",
          },
        }}
      >
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          {/* Left Image Section with animation */}
          <Grid item size={{ xs: 12, md: 6 }}>
            <motion.div
              variants={leftVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: { xs: 300, sm: 350, md: 400 },
                  height: { xs: 300, sm: 350, md: 400 },
                  mx: "auto",
                }}
              >
                {[
                  {
                    src: image1,
                    style: { top: "-22%", left: "15%" },
                    type: "image",
                  },
                  {
                    src: video1,
                    style: { top: "35%", right: "25%" },
                    type: "video",
                  },
                  {
                    src: image2,
                    style: { top: "4%", left: "60%" },
                    type: "image",
                  },
                ].map((item, index) => {
                  const sizes = [200, 300, 280];
                  const zIndexVal = [0, 4, 2];
                  return (
                    <Box
                      key={index}
                      sx={{
                        position: "absolute",
                        width: sizes[index],
                        height: sizes[index],
                        borderRadius: "50%",
                        overflow: "hidden",
                        animation: "floatBubble 12s ease-in-out infinite",
                        animationDelay: `${index * 0.5}s`,
                        zIndex: zIndexVal[index],
                        ...item.style,
                      }}
                    >
                      {item.type === "image" ? (
                        <img
                          src={item.src}
                          alt={`bubble-${index}`}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      ) : (
                        <video
                          src={item.src}
                          autoPlay
                          loop
                          muted
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      )}
                    </Box>
                  );
                })}

                <Box
                  sx={{
                    position: "absolute",
                    top: 91,
                    left: 10,
                    backgroundColor: "#fff",
                    p: 1,
                    borderRadius: 15,
                    display: "flex",
                    alignItems: "center",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    zIndex: 6,
                    animation: "floatBubble 12s ease-in-out infinite",
                  }}
                >
                  <Box
                    sx={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      backgroundColor: "#ff4a3934",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mr: 1,
                    }}
                  >
                    <ChatBubbleOutlineIcon
                      sx={{ fontSize: 20, color: "#FF4939" }}
                    />
                  </Box>

                  <Typography variant="body2">
                    <strong>"CTI</strong> is the most rewarding thing
                    <strong>."</strong>
                  </Typography>
                </Box>

                <Box
                  sx={{
                    position: "absolute",
                    bottom: 35,
                    right: -50,
                    backgroundColor: "#FCC380",
                    p: 1,
                    borderRadius: 15,
                    display: "flex",
                    alignItems: "center",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    zIndex: 6,
                    animation: "floatBubble 12s ease-in-out infinite",
                  }}
                >
                  <Box
                    sx={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      backgroundColor: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mr: 1,
                    }}
                  >
                    <PlayArrow sx={{ fontSize: 20, color: "#FCC380" }} />
                  </Box>

                  <Typography variant="body2">
                    <strong>"Train</strong> to become a Coach."
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* Right Text Content with animation */}
          <Grid item size={{ xs: 12, md: 6 }}>
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
                      cursor: "pointer",
                    }}
                  >
                    Frequently Ask Questions
                  </MotionTypography>
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    Have Questions? We’re Here to Help
                  </Typography>

                  <Typography variant="body1" color="black" mb={4}>
                    Whether you're exploring our programs or already enrolled,
                    we’re here to support you. Browse through the FAQs below or
                    reach out to our team for personalized assistance.
                  </Typography>
                  {faqs_content.map((faq, idx) => (
                    <Accordion
                      key={idx}
                      elevation={0}
                      disableGutters
                      defaultExpanded={idx === 0}
                      sx={{
                        mb: 2,
                        borderRadius: 2,
                        overflow: "hidden",
                        transition: "box-shadow 0.3s ease",
                        boxShadow: "0 6px 20px rgba(250, 204, 194, 0.5)",
                        "&:hover": {
                          boxShadow: "0 8px 24px rgba(250, 204, 194, 0.6)",
                        },
                        "&.Mui-expanded": {
                          boxShadow: "0 10px 30px rgba(250, 204, 194, 0.7)",
                        },
                        "&:before": {
                          display: "none", // ✅ This removes the black line
                        },
                      }}
                    >
                      <AccordionSummary
                        expandIcon={
                          <ExpandMoreIcon
                            sx={{
                              transition: "transform 0.3s ease",
                              "&.Mui-expanded": {
                                transform: "rotate(180deg)",
                              },
                            }}
                          />
                        }
                        sx={{
                          "&:focus": {
                            outline: "none",
                          },
                          "&:focus-visible": {
                            outline: "none",
                          },
                          "&.Mui-focused": {
                            outline: "none",
                          },
                          "&::before": {
                            display: "none", // ✅ Also remove from summary if it’s there
                          },
                        }}
                      >
                        <Typography sx={{ fontWeight: "bold" }}>
                          {faq.question}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography color="text.primary">
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
                        background:
                          "linear-gradient(90deg, #FF6A5B 0%, #FF914D 100%)",
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
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Faqs;
