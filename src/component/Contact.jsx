import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Contact from "../assets/contact_img_ulonag.svg";

function ContactSection() {
  return (
    <Box
      sx={{
        position: "relative",

        // Decreased height
        height: {
          xs: "50vh",
          sm: "55vh",
          md: "60vh",
          lg: "95vh",
        },

        width: "100%",

        backgroundImage: `url(${Contact})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",

        display: "flex",
        alignItems: "center",
      }}
    >
      {/* CONTENT */}
      <Box
        sx={{
          p: { xs: 3, sm: 5, md: 8 },

          // Increased width
          maxWidth: {
            xs: "100%",
            sm: "600px",
            md: "750px",
            lg: "900px",
          },
        }}
      >
        {/* TITLE */}
        <Typography
          sx={{
            color: "#fff",
            fontWeight: "bold",

            fontSize: {
              xs: "32px",
              sm: "42px",
              md: "52px",
            },

            mb: 1,
          }}
        >
          Contact
        </Typography>

        {/* DESCRIPTION */}
        <Typography
          sx={{
            color: "#fff",

            fontSize: {
              xs: "15px",
              sm: "17px",
              md: "19px",
            },

            mb: 4,
            lineHeight: 1.6,
          }}
        >
          Your Trusted Partner for Quality Maintenance Services in Dubai and Abu
          Dhabi
        </Typography>

        {/* BUTTON */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#C9861B",
            color: "#fff",

            padding: {
              xs: "10px 24px",
              sm: "11px 28px",
              md: "12px 34px",
            },

            fontSize: {
              xs: "14px",
              sm: "15px",
              md: "16px",
            },

            "&:hover": {
              backgroundColor: "#C9861B",
            },
          }}
        >
          ENQUIRE NOW
        </Button>
      </Box>
    </Box>
  );
}

export default ContactSection;
