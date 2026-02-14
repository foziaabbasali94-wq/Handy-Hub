import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Acer2 from "../../assets/ChilledWater1-sub.png";

function Subservicesbackimg() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${Acer2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-start",
        p: { xs: 3, md: 8 },
      }}
    >
      {/* Content Bottom Left */}
      <Box sx={{ maxWidth: "500px", color: "#fff" }}>
        
        {/* Title */}
        <Typography
          variant="h3"
          sx={{ fontWeight: 700, mb: 2 }}
        >
          A/C Service
        </Typography>

        {/* Description */}
        <Typography sx={{ mb: 3, lineHeight: 1.6 }}>
          Your Trusted Partner for Quality Maintenance Services in Dubai and
          Abu Dhabi
        </Typography>

        {/* Button */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#C9861B",
            px: 4,
            py: 1.5,
            fontWeight: 600,
            "&:hover": {
              backgroundColor: "#a56d15",
            },
          }}
        >
          ENQUIRE NOW
        </Button>

      </Box>
    </Box>
  );
}

export default Subservicesbackimg;
