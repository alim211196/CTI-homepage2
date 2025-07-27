import React from "react";
import HeroSection from "./HeroSection";
import Footer from "../Common/Footer";
import { Box } from "@mui/material";
import Header from "../Common/Header";
import AboutUs from "../AboutUs";
import Features from "../Features";
import ValueProposition from "../ValueProposition";
import FeaturedCoaches from "../FeaturedCoaches";
import Testimonials from "../Testimonials";
import Faqs from "../Faqs";
import Newsletter from "../Newsletter";
import bannerBg from "../../assets/banner-bg.png";
import OrganizationCTA from "../OrganizationCTA";
import GetStartedCard from "../GetStartedCard";
const Homepage = () => {
  return (
    <>
      <Box
        sx={{
          // px: 10,
          position: "relative",
          overflow: "hidden",
          minHeight: { xs: "auto", md: "100vh" }, // optional full height on large
          "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundImage: `url(${bannerBg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: {
              xs: "cover", // cover full area on small screens
              sm: "contain", // keep aspect ratio on medium+
              md: "contain",
            },
            backgroundPosition: {
              xs: "top center", // better alignment on small screens
              md: "right center",
            },
            zIndex: 0,
            pointerEvents: "none",
          },
        }}
      >
        {/* Content goes above background */}
        <Box sx={{ position: "relative", zIndex: 1 }}>
          <Header />
          <HeroSection />
        </Box>
      </Box>

      <Box id="about-us" sx={{ scrollMarginTop: "100px" }}>
        <AboutUs />
      </Box>

      <Box id="features" sx={{ scrollMarginTop: "100px" }}>
        <GetStartedCard />
        <Features />
      </Box>
      <Box id="value-proposition" sx={{ scrollMarginTop: "100px" }}>
        <ValueProposition />
      </Box>
      <Box id="coaches" sx={{ scrollMarginTop: "100px" }}>
        <FeaturedCoaches />
        <OrganizationCTA />
      </Box>
      <Box id="testimonials" sx={{ scrollMarginTop: "100px" }}>
        <Testimonials />
      </Box>
      <Box id="faqs" sx={{ scrollMarginTop: "100px" }}>
        <Faqs />
      </Box>
      <Box id="newsletter" sx={{ scrollMarginTop: "100px" }}>
        <Newsletter />
      </Box>

      <Footer />
    </>
  );
};

export default Homepage;
