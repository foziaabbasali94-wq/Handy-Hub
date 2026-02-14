import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import Footerbackim from "../assets/footerbackimg.jpeg";

function QueryForm() {
  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "70vh", sm: "85vh", md: "100vh" }, // fixed height
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(${Footerbackim})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: { xs: "top center", sm: "center" },
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.35)", // optional dark overlay
        },
      }}
    >
      {/* FORM CARD */}
      <Box
        sx={{
          position: "relative", // inside flex, no need absolute
          zIndex: 1,
          width: { xs: "80%", sm: "70%", md: "40%" },
          bgcolor: "#fff",
          borderRadius: 3,
          boxShadow: "0 12px 35px rgba(0,0,0,0.35)",
          p: { xs: 1, sm: 4, md: 5 },
        }}
      >
        <Typography
          sx={{
            fontWeight: 900,
            fontSize: { xs: 18, sm: 26, md: 32 },
            mb: 1,
            textAlign: "center",
          }}
        >
          Any Queries
        </Typography>

        <Typography
          sx={{
            mb: 3,
            color: "#666",
            fontSize: { xs: 12, sm: 16 },
            textAlign: "center",
          }}
        >
          Feel free to contact us
        </Typography>

        <TextField fullWidth label="First Name" sx={{ mb: 2 }} />
        <TextField fullWidth label="Email" sx={{ mb: 2 }} />

        <Button
          fullWidth
          variant="contained"
          sx={{
            py: 1.6,
            backgroundColor: "#C9861B",
            fontSize: { xs: 14, sm: 16 },
            "&:hover": { backgroundColor: "#b87d16" },
          }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
}

export default QueryForm;
