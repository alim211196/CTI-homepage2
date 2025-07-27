import { Box, Container, Grid, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";
import image1 from "../../assets/features/image1.jpg";
import image2 from "../../assets/features/image2.jpg";
import image3 from "../../assets/features/image3.jpg";
import image4 from "../../assets/features/image4.jpg";
import image5 from "../../assets/features/image5.jpg";
import image6 from "../../assets/features/image6.jpg";
import image7 from "../../assets/features/image7.jpg";
import image8 from "../../assets/features/image8.jpg";
import image9 from "../../assets/features/image9.jpg";
import image10 from "../../assets/features/image10.jpg";
import icon1 from "../../assets/features/icon5.png";
import icon2 from "../../assets/features/icon7.png";
import icon3 from "../../assets/features/icon8.png";
import icon4 from "../../assets/features/icon9.png";
import SectionHeading from "../Common/SectionHeading";
import bg1 from "../../assets/bg1.svg";
// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const platform_features = [
  {
    icon: icon1,
    title: "Discover & Match",
    desc: "Take our smart assessment to find coaches perfectly aligned with your needs and goals.",
  },
  {
    icon: icon2,
    title: "Connect & Engage",
    desc: "Schedule consultations with matched coaches and select the perfect fit for your journey.",
  },
  {
    icon: icon3,
    title: "Start Coaching",
    desc: "Begin your personalized coaching sessions with flexible scheduling and comprehensive support.",
  },
  {
    icon: icon4,
    title: "Track Progress",
    desc: "Monitor your growth with detailed analytics and celebrate your achievements along the way.",
  },
];

const imageGrid = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
];



const sizeMap = {
  0: "small",  // First column, top
  1: "large",   // Second column, top
  2: "medium",  // Second column, below 1
  3: "small",   // Third column, top
  4: "medium",  // Third column, below 3
  5: "medium",   // Fourth column, top
  6: "small",  // Fourth column, below 5
  7: "medium",   // Fifth column, top
  8: "large",  // Fifth column, below 7
  9: "small",   // Last image, small at bottom
};

const sizeStyleMap = {
  small: { width: 100, height: 160 },   // Previously: 120
  medium: { width: 160, height: 240 },  // Previously: 160
  large: { width: 200, height: 300 },   // Previously: 180
};
const HoverImage = ({ src, alt, size = "medium" }) => {
  const { width, height } = sizeStyleMap[size] || sizeStyleMap["medium"];

  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 40 }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.8, 0.25, 1],
      }}
    >
      <motion.div
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.3)",
        }}
        transition={{ duration: 0.3 }}
        style={{
          width,
          height,
          borderRadius: 16,
          overflow: "hidden",
          cursor: "pointer",
          position: "relative",
        }}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            transition: "transform 0.3s ease",
          }}
        />
        {/* Optional Color Overlay on Hover */}
        <motion.div
          whileHover={{ backgroundColor: "rgba(0,0,0,0.2)" }}
          transition={{ duration: 0.3 }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderRadius: 16,
          }}
        />
      </motion.div>
    </motion.div>
  );
};


const Features = () => {
  return (
    <Container maxWidth="xxl" sx={{ padding: '0px!important' }}>
      <Box sx={{
        px: 4,
        py: { xs: 8, md: 5 }, overflow: "hidden",
        backgroundImage: `url(${bg1})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: {
          xs: "cover",
          sm: "contain",
          md: "contain",
        },
      }}>
        {/* Header */}
        <Box textAlign="center" mb={6}>
          <SectionHeading title={"Platform"} subtitle={"Features"} />

          <Typography variant="body1" mt={1} color="black">
            Our streamlined process connects you with the right coach in minutes, not weeks. Simple, effective, and designed for results.
          </Typography>
        </Box>

        {/* Feature Grid */}
        <Grid
          component={motion.div}
          container
          spacing={3}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          justifyContent="center"
          mb={8}
        >
          {platform_features.map((item, idx) => (
            <Grid
              key={idx}
              size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
              component={motion.div}
              variants={cardVariants}
            >
              <Paper
                elevation={0}
                sx={{
                  backgroundColor: '#fff',
                  boxShadow: "0 4px 14px rgba(255, 105, 80, 0.4)",
                  padding: '25px 20px 19px',
                  borderRadius: '10px',
                  textAlign: 'center',
                  overflow: 'hidden',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  transition: 'all 0.4s ease-in-out',
                  '&:hover': {
                    boxShadow: '0 8px 20px rgba(21, 87, 153, 0.12)',
                    transform: 'translateY(-4px)',
                  },
                  cursor: 'pointer',
                }}
              >
                <motion.img
                  src={item.icon}
                  alt="icon"
                  style={{ width: 40, height: 'auto' }}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />

                <Typography
                  variant="subtitle2"
                  fontWeight={600}
                  mt={1}
                  sx={{
                    fontSize: {
                      xs: '0.75rem',  // mobile
                      sm: '0.8rem',   // tablets
                      md: '1.143125rem',   // desktop
                    },
                    wordWrap: 'break-word',
                    overflow: 'hidden',
                  }}
                >
                  {item.title}
                </Typography>


                <Typography
                  variant="caption"
                  color="black"
                  mt={0.5}
                  sx={{
                    fontSize: {
                      xs: '0.65rem',
                      sm: '0.7rem',
                      md: '0.84375rem',
                    },
                    wordWrap: 'break-word',
                    overflow: 'hidden',
                    textAlign: 'left',
                  }}
                >
                  {item.desc}
                </Typography>

              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Mosaic Image Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.6,
            delay: 0.15,
            ease: [0.25, 0.8, 0.25, 1],
          }}
        >
          <Grid container spacing={2} justifyContent="center" px={2}>
            {[
              { images: [0], mt: 14 },
              { images: [1, 2], mt: 6 },
              { images: [3, 4], mt: -2 },
              { images: [5, 6], mt: 8 },
              { images: [7, 8], mt: 0 },
              { images: [9], mt: 4 },
            ].map((col, index) => (
              <Grid
                key={index}
                size={{ xs: 6, sm: 4, md: 2 }}
                alignItems={'center'}
                // item
                // xs={6}
                // sm={4}
                // md={2}
                sx={{
                  display: "flex",
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: "column",
                  gap: 2,
                  mt: { xs: 0, sm: col.mt },
                }}
              >
                {col.images.map((imgIndex, i) => (
                  <HoverImage
                    key={imgIndex}
                    src={imageGrid[imgIndex]}
                    alt={`img-${imgIndex}`}
                    size={sizeMap[imgIndex]}
                  />
                ))}
              </Grid>
            ))}
          </Grid>
        </motion.div>


      </Box>
    </Container>
  );
};

export default Features;
