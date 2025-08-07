import React from "react";
import Herosection from "./Herosection";
import Footer from "../Common/Footer";
import { Box } from "@mui/material";
import Header from "./Header";
import AboutUs from "./AboutUs";
import Features from "./Features";
import ValueProposition from "./ValueProposition";
import FeaturedCoaches from "./FeaturedCoaches";
import Testimonials from "../Testimonials";
import Faqs from "./Faqs";
import Newsletter from "./Newsletter";
import OrganizationCTA from "../OrganizationCTA";
import GetStartedCard from "../GetStartedCard";
import CoachesTraining from "./CoachesTraining";

const Homepage = () => {
  return (
    <>
      <Header />

      <Herosection />

      <AboutUs />
      <GetStartedCard />
      <Features />
      <ValueProposition />
      <CoachesTraining />
      <FeaturedCoaches />
      <OrganizationCTA />
      <Testimonials />
      <Faqs />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Homepage;
