import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Acer from "../../assets/acrepair_tqmii5 (1).svg";

function Subservicesbackimg3() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${Acer})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-start",
        p: { xs: 3, md: 8 },
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bgcolor: "rgba(0,0,0,0.4)",
          zIndex: 1,
        },
      }}
    >
      <Box
        sx={{
          maxWidth: "500px",
          width: { xs: "90%", md: "500px" },
          color: "#fff",
          position: "relative",
          zIndex: 2,
        }}
      >
        <Typography variant={{ xs: "h4", md: "h3" }} sx={{ fontWeight: 700, mb: 2 }}>
          A/C Service
        </Typography>
        <Typography sx={{ mb: 3, lineHeight: 1.6 }}>
          Your Trusted Partner for Quality Maintenance Services in Dubai and Abu Dhabi
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#C9861B",
            px: 4,
            py: 1.5,
            fontWeight: 600,
            "&:hover": { backgroundColor: "#a56d15" },
          }}
        >
          ENQUIRE NOW
        </Button>
      </Box>
    </Box>
  );
}

export default Subservicesbackimg3;
