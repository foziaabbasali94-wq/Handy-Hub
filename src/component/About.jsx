import React from "react";
import { Box, Typography, Button } from "@mui/material";
import About from "../assets/about_img_t2n93r.svg";

function AboutUs() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",

        // ✅ Responsive height: taller on large screens
        height: { xs: "35vh", sm: "45vh", md: "90vh" },

        backgroundImage: `url(${About})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.45)",
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: 15, sm: 20, md: 60 },
          left: { xs: 15, sm: 20, md: 80 },
          color: "#fff",
          maxWidth: { xs: "90%", sm: "500px", md: "650px" },
        }}
      >
        {/* Heading */}
        <Typography
          sx={{
            fontWeight: 700,
            mb: 0.5,
            fontSize: { xs: "20px", sm: "26px", md: "36px" },
          }}
        >
          About Us
        </Typography>

        {/* Text */}
        <Typography
          sx={{
            fontWeight: 500,
            mb: 2,
            lineHeight: 1.4,
            fontSize: { xs: "12px", sm: "14px", md: "18px" },
          }}
        >
          Your Trusted Partner for Quality Maintenance Services in Dubai and Abu Dhabi
        </Typography>

        {/* Button */}
        <Button
          sx={{
            backgroundColor: "#C9861B",
            color: "#fff",
            px: { xs: 3, sm: 4, md: 4 },
            py: { xs: 0.7, sm: 0.8, md: 0.8 },
            fontSize: { xs: "12px", sm: "13px", md: "14px" },
            fontWeight: 600,
            "&:hover": { backgroundColor: "#b67815" },
          }}
        >
          ENQUIRE NOW
        </Button>
      </Box>
    </Box>
  );
}

export default AboutUs;
