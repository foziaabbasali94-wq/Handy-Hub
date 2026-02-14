import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import Basic4 from "../../assets/painting2.jpg";

function Subservices5img4() {
  const navigate = useNavigate();

  const handleEnquire = () => {
    navigate("/subservices/5/subdetailservice/4"); // update route if needed
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: { xs: "70vh", md: "97vh" }, // container height
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* BACKGROUND IMAGE */}
      <Box
        component="img"
        src={Basic4}
        alt="Painting Service"
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%", // fill container height
          objectFit: "cover", // cover container without distortion
          zIndex: 0,
        }}
      />

      {/* TEXT + BUTTON — BOTTOM LEFT */}
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: 24, md: 48 },
          left: { xs: 16, md: 48 },
          zIndex: 1,
          color: "#fff",
          maxWidth: { xs: "95%", md: "45%" },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            mb: 2,
            textShadow: "2px 2px 6px rgba(0,0,0,0.6)",
          }}
        >
          Painting Service
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 3,
            textShadow: "1px 1px 4px rgba(0,0,0,0.6)",
          }}
        >
          Your Trusted Partner for Quality Maintenance Services in Dubai and Abu Dhabi
        </Typography>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#C9861B",
            width: "220px",
            height: "60px",
            fontWeight: "bold",
            "&:hover": { backgroundColor: "#b77417" },
          }}
          onClick={handleEnquire}
        >
          ENQUIRE NOW
        </Button>
      </Box>
    </Box>
  );
}

export default Subservices5img4;
