import { Box, Container, Grid, Typography, Paper, Stack } from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { motion } from "framer-motion";

// Animation Variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, // Slightly more noticeable
      delayChildren: 0.1, // Initial delay before first card
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const platform_features = [
  {
    icon: <SchoolIcon sx={{ fontSize: 32, color: "#FF912C" }} />,
    title: "Awesome Teachers",
    desc: "Vivamus interdum, mauris interdum quis curdum sodales",
  },
  {
    icon: <WorkspacePremiumIcon sx={{ fontSize: 32, color: "#1E90FF" }} />,
    title: "Global Certificate",
    desc: "Pellen eget tespharet que fringilla egugue id eget pharetra",
  },
  {
    icon: <EmojiObjectsIcon sx={{ fontSize: 32, color: "#FFA500" }} />,
    title: "Best Programm",
    desc: "Etiam risus neque, volutpat vel laoreet a, finibus volutpat non",
  },
  {
    icon: <SupportAgentIcon sx={{ fontSize: 32, color: "#0056B3" }} />,
    title: "Student Support Service",
    desc: "Mauris nec mi feugiat, cursus tortor nec, pharetra tellus",
  },
];

const imageGrid = [
  "src/assets/features/image1.jpg",
  "src/assets/features/image2.jpg",
  "src/assets/features/image3.jpg",
  "src/assets/features/image4.jpg",
  "src/assets/features/image5.jpg",
  "src/assets/features/image6.jpg",
  "src/assets/features/image7.jpg",
  "src/assets/features/image8.jpg",
  "src/assets/features/image9.jpg",
  "src/assets/features/image10.jpg",
];

const imgStyle = {
  width: "100%",
  maxWidth: 200,
  borderRadius: 16,
  objectFit: "cover",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  cursor: "pointer",
};

const sizeMap = {
  0: "medium",
  1: "large",
  2: "small",
  3: "medium",
  4: "large",
  5: "medium",
  6: "large",
  7: "small",
  8: "medium",
  9: "small",
};

const sizeStyleMap = {
  small: 100,
  medium: 160,
  large: 200,
};

const HoverImage = ({ src, alt, size = "medium" }) => (
  <motion.img
    src={src}
    alt={alt}
    style={{
      width: "100%",
      maxWidth: sizeStyleMap[size],
      borderRadius: 16,
      objectFit: "cover",
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      cursor: "pointer",
    }}
    whileHover={{
      scale: 1.08,
      boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
    }}
    transition={{ duration: 0.3 }}
  />
);

const Features = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ py: { xs: 8, md: 5 } }}>
        {/* Header */}
        <Box textAlign="center" mb={6}>
          <Typography variant="h4" fontWeight={700}>
            Platform{" "}
            <Box component="span" color="primary.light">
              Features
            </Box>
          </Typography>
          <Typography variant="body1" mt={1} color="text.secondary">
            Nunc consectetur ex nunc, id porttitor leo semper eget. Vivamus
            interdum, mauris quis cursus sodales, urn
          </Typography>
        </Box>

        {/* Feature Grid */}
        <Stack
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          direction="row"
          spacing={6}
          useFlexGap
          flexWrap="wrap"
          justifyContent="center"
          mb={8}
        >
          {platform_features.map((item, idx) => (
            <Box
              key={idx}
              component={motion.div}
              variants={cardVariants}
              sx={{
                width: 200, // fixed square size
                height: 200,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Paper
                elevation={0}
                sx={{
                  width: "100%",
                  height: "100%",
                  p: 2,
                  textAlign: "center",
                  borderRadius: 2,
                  overflow: "hidden", // Ensures clean cut of overflow
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  transition: "box-shadow 0.3s ease, transform 0.3s ease",
                  "&:hover": {
                    boxShadow: 3,
                    transform: "translateY(-4px)",
                  },
                  cursor: "pointer",
                }}
              >
                {item.icon}
                <Typography
                  variant="subtitle2"
                  fontWeight={600}
                  mt={1}
                  sx={{
                    fontSize: "0.8rem",
                    wordWrap: "break-word",
                    overflow: "hidden",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  mt={0.5}
                  sx={{
                    fontSize: "0.7rem",
                    wordWrap: "break-word",
                    overflow: "hidden",
                  }}
                >
                  {item.desc}
                </Typography>
              </Paper>
            </Box>
          ))}
        </Stack>

        {/* Mosaic Image Layout */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Grid container spacing={3} justifyContent="center" px={2}>
            {[
              { images: [0], mt: 14 },
              { images: [1, 2], mt: 6 },
              { images: [3, 4], mt: -2 },
              { images: [5, 6], mt: 8 },
              { images: [7, 8], mt: 0 },
              { images: [9], mt: 4 },
            ].map((col, index) => (
              <Grid
                size={{ xs: 6, sm: 4, md: 2.4 }}
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 3,
                  mt: { xs: 0, sm: col.mt },
                }}
              >
                {col.images.map((imgIndex) => (
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
