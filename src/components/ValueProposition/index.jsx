// components/HowItWorks.tsx
import {
  Box,
  Typography,
  Paper,
  Stack,
  Button,
  Container,
} from "@mui/material";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import image1 from "../../assets/valueproposition/image1.png";
import image2 from "../../assets/valueproposition/image2.png";
import image3 from "../../assets/valueproposition/image3.png";
import image4 from "../../assets/valueproposition/image4.png";
import bgDots from "../../assets/testimonials/map-dot.png";
import SectionHeading from "../Common/SectionHeading";
import { useState } from "react";


const forOrg = [
  {
    icon: image1,
    title: "Targeted Solutions",
    desc: "Customized coaching programs aligned with your organizational goals and challenges.",
    bg: "#f8edc8a9",
    dark_bg: "neutral.main",
  },
  {
    icon: image2,
    title: "Measurable Results",
    desc: "Track progress with comprehensive analytics and ROI measurement tools.",
    bg: "#fcdcd9a9",
    dark_bg: "secondary.main",
  },
  {
    icon: image3,
    title: "Quality Assurance",
    desc: "All coaches are vetted, certified professionals with proven track records. these are three points i need forth one.",
    bg: "#fcdcd9a9",
    dark_bg: "secondary.main",
  },
  {
    icon: image4,
    title: "Scalable Engagement",
    desc: "Easily expand coaching access across teams, departments, or global offices with flexible deployment options.",
    bg: "#f8edc8a9",
    dark_bg: "neutral.main",
  },
];

const forCoach = [
  {
    icon: image1,
    title: "Enterprise Clients",
    desc: "Access to premium corporate clients and high-value coaching opportunities.",
    bg: "#f8edc8a9",
    dark_bg: "neutral.main",
  },
  {
    icon: image2,
    title: "Professional Network",
    desc: "Connect with a community of elite coaches and industry leaders.",
    bg: "#fcdcd9a9",
    dark_bg: "secondary.main",
  },
  {
    icon: image3,
    title: "Career Growth",
    desc: "Continuous development opportunities and tier advancement programs.",
    bg: "#fcdcd9a9",
    dark_bg: "secondary.main",
  },
  {
    icon: image4,
    title: "Dedicated Support",
    desc: "Benefit from personalized onboarding, responsive assistance, and tools that help you focus on impactful coaching.",
    bg: "#f8edc8a9",
    dark_bg: "neutral.main",
  },
];



const ValueProposition = () => {
  const [activeTab, setActiveTab] = useState('org');

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });



  const renderTextSection = (text, btnText) => (
    <motion.div
      ref={ref}
      initial={{ x: 100, opacity: 0 }}
      animate={isInView ? { x: 0, opacity: 1 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Box mb={2}>
        <Typography variant="body1" color="black" mb={2}>

          {text}
        </Typography>
        <Typography variant="body1" color="black" >
          CTI refers to the Coaches Training Institute,
          a global leader in coach and leadership training.
          It is known for its experiential and immersive learning approach,
          focusing on building relational capacity, enhancing communication,
          and fostering authentic leadership.
          CTI is the largest and oldest coach training and leadership development
          school and is the only program that teaches the Coaches Model.
          They have trained over 145,000 coaches, leaders, and professionals,
          including employees in a significant portion of Fortune 100 companies.
        </Typography>

        <Box mt={4} pt={4} borderTop="1px dashed #ddd">
          <Button
            variant="contained"
            sx={{
              color: "white",
              background: "linear-gradient(90deg, #FF6A5B 0%, #FF914D 100%)",
              borderRadius: "999px",
              px: 4,
              py: 1.2,
              fontWeight: 600,
              fontSize: { xs: "0.95rem", sm: "1rem" },
              textTransform: "none",
              boxShadow: "0 4px 14px rgba(255, 105, 80, 0.4)",
              transition: "all 0.4s ease",
              "&:hover": {
                background: "linear-gradient(90deg, #FF914D 0%, #FF6A5B 100%)",
                boxShadow: "0 6px 20px rgba(255, 105, 80, 0.5)",
                transform: "scale(1.05)",
              },
            }}
          >
            {btnText}
          </Button>
        </Box>
      </Box>
    </motion.div>
  );

  const renderCardsSection = () => (
    <Box sx={{ flex: 1 }}>
      <Stack
        direction="row"
        spacing={3}
        useFlexGap
        flexWrap="wrap"
        justifyContent="center"

      >
        {/* Left Column: 0 & 2 */}
        <Stack
          spacing={3}
          sx={{ width: { xs: "100%", sm: "45%", md: "45%" } }}
        >
          {[0, 2].map((idx) => {
            const steps = activeTab === 'org' ? forOrg : forCoach
            const item = steps[idx];
            return (
              <Box
                key={idx}
                component={motion.div}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: idx * 0.2 }}
                viewport={{ once: true }}
                sx={{ position: "relative", zIndex: 1 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    borderRadius: 3,
                    backgroundColor: item.bg,
                    textAlign: "left",
                    height: "100%",

                    "&:hover": {
                      transition: "transform 0.3s ease-in-out, background-color 0.3s",
                      backgroundColor: item.dark_bg, // Hover dark
                      color: "#fff",
                    },
                    cursor: "pointer",
                  }}
                >
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      mb: 3,
                      borderRadius: 2,
                      backgroundColor: "#fff",
                      boxShadow: "0 4px 14px rgba(255, 105, 80, 0.4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={item.icon}
                      alt={item.title}
                      loading="lazy"
                      style={{ width: "50px", height: "50px" }}
                    />
                  </Box>
                  <Typography variant="h6" mb={1} sx={{ fontWeight: 'bold' }} textAlign={'left'}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" textAlign={'left'} sx={{
                    fontSize: {
                      xs: "0.8rem",   // ~14.4px on extra small screens
                      sm: "0.9rem",     // ~16px on small screens
                      md: "0.95rem",  // ~16.8px
                      lg: "1rem", // 18px on large screens
                    },
                  }}>
                    {item.desc}
                  </Typography>
                </Paper>
              </Box>
            );
          })}
        </Stack>

        {/* Right Column: 1 & 3 with top margin */}
        <Stack
          spacing={3}
          sx={{ width: { xs: "100%", sm: "45%", md: "45%" }, mt: 8 }}
        >
          {[1, 3].map((idx) => {
            const steps = activeTab === 'org' ? forOrg : forCoach
            const item = steps[idx];
            return (
              <Box
                key={idx}
                component={motion.div}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    borderRadius: 3,
                    backgroundColor: item.bg,
                    textAlign: "center",
                    height: "100%",

                    "&:hover": {
                      transition: "transform 0.3s ease-in-out, background-color 0.3s",
                      backgroundColor: item.dark_bg, // Hover dark
                      color: "#fff",
                    },
                    cursor: "pointer",
                  }}
                >
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      mb: 3,
                      borderRadius: 2,
                      backgroundColor: "#fff",
                      boxShadow: "0 4px 14px rgba(255, 105, 80, 0.4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={item.icon}
                      alt={item.title}
                      loading="lazy"
                      style={{ width: "50px", height: "50px" }}
                    />
                  </Box>
                  <Typography variant="h6" mb={1} textAlign={'left'} sx={{ fontWeight: 'bold' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" textAlign={'left'} sx={{
                    fontSize: {
                      xs: "0.8rem",   // ~14.4px on extra small screens
                      sm: "0.9rem",     // ~16px on small screens
                      md: "0.95rem",  // ~16.8px
                      lg: "1rem", // 18px on large screens
                    },
                  }}>
                    {item.desc}
                  </Typography>
                </Paper>
              </Box>
            );
          })}
        </Stack>
      </Stack>

    </Box>
  );
  return (
    <Container maxWidth="xxl">
      <Box sx={{
        p: 2, position: "relative", overflow: "hidden",
        backgroundImage: `url(${bgDots})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: {
          xs: "cover",
          sm: "contain",
          md: "contain",
        },
      }}>
        <SectionHeading title={"Value"} subtitle={"Proposition"} />

        <Stack
          direction="row"
          spacing={1.5}
          alignItems="center"
          mb={2}
          justifyContent="center"
          flexWrap="wrap"
        >
          {[
            { label: "For Organizations", value: "org" },
            { label: "For Coaches", value: "coach" },
          ].map((tab) => (
            <Box
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              sx={{
                width: 170,
                cursor: "pointer",
                borderRadius: "999px",
                px: 2.5, // reduced from 3.5
                py: 0.8,  // reduced from 1.2
                fontWeight: 600,
                fontSize: {
                  xs: "0.8rem", // reduced from 0.95rem
                  sm: "0.9rem", // reduced from 1rem
                },
                transition: "all 0.4s ease",
                transform: "scale(1)",
                background: activeTab === tab.value
                  ? "linear-gradient(90deg, #FF6A5B 0%, #FF914D 100%)"
                  : "transparent",
                color: activeTab === tab.value ? "white" : "#FF6A5B",
                border: `1px solid ${activeTab === tab.value ? "transparent" : "#FF6A5B"}`,
                textAlign: "center",
                boxShadow: activeTab === tab.value
                  ? "0 3px 10px rgba(255, 105, 80, 0.3)" // slightly smaller shadow
                  : "none",
                "&:hover": {
                  transform: "scale(1.05)",
                  background:
                    activeTab === tab.value
                      ? "linear-gradient(90deg, #FF914D 0%, #FF6A5B 100%)"
                      : "rgba(255, 106, 91, 0.1)",
                  boxShadow:
                    activeTab === tab.value
                      ? "0 5px 16px rgba(255, 105, 80, 0.4)"
                      : "0 2px 4px rgba(255, 105, 80, 0.2)",
                },
              }}
            >
              {tab.label}
            </Box>
          ))}
        </Stack>

        <Stack
          direction={{ xs: "column-reverse", md: "row" }}
          spacing={6}
          alignItems="baseline"
          justifyContent="center"
          flexWrap="wrap"
        >
          {/* Conditionally swap children */}
          {activeTab === 'coach' ? (
            <>
              {/* Text on Left */}
              <Box sx={{ flex: 1, pr: { md: 5 } }} component={motion.div} layout>
                {renderTextSection("Join an elite network of professional coaches and accelerate your career with exclusive opportunities and resources.", "Join Our Coach Network")}
              </Box>

              {/* Cards on Right */}
              <Box sx={{ flex: 1 }} component={motion.div} layout>
                {renderCardsSection()}
              </Box>
            </>
          ) : (
            <>
              {/* Cards on Left */}
              <Box sx={{ flex: 1 }} component={motion.div} layout>
                {renderCardsSection()}
              </Box>

              {/* Text on Right */}
              <Box sx={{ flex: 1, pl: { md: 5 } }} component={motion.div} layout>
                {renderTextSection("Transform your workplace culture and achieve breakthrough performance with our comprehensive coaching ecosystem.", "Explore Organizational Solutions")}
              </Box>
            </>
          )}
        </Stack>

      </Box>
    </Container>
  );
};

export default ValueProposition;
