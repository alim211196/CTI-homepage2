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
    title: "Awesome Teachers",
    desc: "Vivamus interdum, mauris interdum quis curdum sodales",
  },
  {
    icon: icon2,
    title: "Global Certificate",
    desc: "Pellen eget tespharet que fringilla egugue id eget pharetra",
  },
  {
    icon: icon3,
    title: "Best Programm",
    desc: "Etiam risus neque, volutpat vel laoreet a, finibus volutpat non",
  },
  {
    icon: icon4,
    title: "Student Support Service",
    desc: "Mauris nec mi feugiat, cursus tortor nec, pharetra tellus",
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
  small: { width: 100, height: 160 },   // Previously: 120
  medium: { width: 160, height: 240 },  // Previously: 160
  large: { width: 200, height: 300 },   // Previously: 180
};
const HoverImage = ({ src, alt, size = "medium" }) => {
  const { width, height } = sizeStyleMap[size] || sizeStyleMap["medium"];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, scale: 0.95, y: 20 },
        visible: {
          opacity: 1,
          scale: 1,
          y: 0,
          transition: { duration: 0.6 },
        },
      }}
    >
      <motion.img
        src={src}
        alt={alt}
        whileHover={{
          scale: 1.08,
          boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.2)",
        }}
        transition={{
          duration: 0.4,
          ease: [0.25, 0.8, 0.25, 1],
        }}
        style={{
          width,
          height,
          borderRadius: 16,
          objectFit: "cover",
          cursor: "pointer",
          transition: "transform 0.6s ease, box-shadow 0.6s ease",
        }}
      />
    </motion.div>

  );
};

const Features = () => {
  return (
    <Container maxWidth="lg">
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
                  boxShadow: '0 0 10px rgba(21, 87, 153, 0.08)',
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
                  color="text.secondary"
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
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 1,
                ease: [0.25, 0.8, 0.25, 1],
                staggerChildren: 0.2,
              },
            },
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
                // size={{xs:6,sm:4,md:2}}
                item
                xs={6}
                sm={4}
                md={2}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 3,
                  mt: { xs: 0, sm: col.mt },
                }}
              >
                {col.images.map((imgIndex, i) => (
                  <motion.div
                    key={imgIndex}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.8,
                      ease: [0.25, 0.8, 0.25, 1],
                      delay: i * 0.2,
                    }}
                  >
                    <HoverImage
                      src={imageGrid[imgIndex]}
                      alt={`img-${imgIndex}`}
                      size={sizeMap[imgIndex]}
                    /></motion.div>
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
