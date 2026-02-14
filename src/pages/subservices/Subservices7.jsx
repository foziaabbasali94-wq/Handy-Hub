import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Services7 from "../../assets/service7.jpg";

function Subservices7() {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: "40vh", sm: "50vh", md: "60vh" }, // decreased height
        backgroundImage: `url(${Services7})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-start",
      }}
    >
      {/* CONTENT BOX */}
      <Box
        sx={{
          p: { xs: 2, sm: 4, md: 6 },
          maxWidth: { xs: "95%", sm: "600px", md: "700px" }, // increased width
          color: "#fff",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "22px", sm: "28px", md: "36px" },
            fontWeight: "bold",
            mb: { xs: 1.5, sm: 2, md: 2 },
          }}
        >
          Home Appliances Repairing
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "12px", sm: "14px", md: "16px" },
            mb: { xs: 2, sm: 3, md: 3 },
            lineHeight: 1.6,
          }}
        >
          Your Trusted Partner for Quality Maintenance Services in Dubai and Abu Dhabi
        </Typography>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#C9861B",
            color: "#fff",
            px: { xs: 3, sm: 4, md: 6 },
            py: { xs: 1.5, sm: 1.8, md: 2 },
            fontWeight: "bold",
            fontSize: { xs: "12px", sm: "14px", md: "16px" },
            "&:hover": { backgroundColor: "#C9861B" },
          }}
        >
          ENQUIRE NOW
        </Button>
      </Box>
    </Box>
  );
}

export default Subservices7;
