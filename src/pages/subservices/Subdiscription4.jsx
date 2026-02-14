import React from "react";
import { Box, Typography } from "@mui/material";

function Subdiscription4() {
  return (
    <Box
      sx={{
        px: { xs: 3, md: 10 },
        py: { xs: 5, md: 8 },
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {/* Main Title */}
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
        Handyman Services
      </Typography>

      {/* DESCRIPTION */}
      <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
        DESCRIPTION
      </Typography>

      <Typography sx={{ mb: 3, lineHeight: 1.7 }}>
        When it comes to handyman jobs around the house, Kmatechnical Services
        has you covered. Whether you need minor repairs or more complex
        projects, our professional team is here to assist you. Here’s why you
        should choose us for your handyman needs:
      </Typography>

      {/* Key Points */}
      <Box sx={{ mb: 3, pl: { xs: 2, sm: 3 } }}>
        <Typography sx={{ mb: 1 }}>
          <strong>Comprehensive Services:</strong> From hanging pictures to
          assembling flat-pack furniture, we handle a wide range of tasks. No job
          is too small or too big for us.
        </Typography>
        <Typography sx={{ mb: 1 }}>
          <strong>Quality and Reliability:</strong> With over four decades of
          experience, we’ve earned a solid reputation for quality, reliability,
          and value for money. We’re the largest independent home maintenance
          company in the UAE.
        </Typography>
        <Typography sx={{ mb: 1 }}>
          <strong>Tailored Solutions:</strong> Our handyman team works around
          your schedule, personal preferences, and budget. We ensure that every
          job is completed to the highest standard.
        </Typography>
        <Typography sx={{ mb: 1 }}>
          <strong>Peace of Mind:</strong> Whether it’s minor maintenance tasks
          or major installations, rest assured that we do it all. Each job
          receives the same attention to detail as the first.
        </Typography>
      </Box>

      {/* List of Services */}
      <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
        Handyman Services We Offer:
      </Typography>
      <ul style={{ marginBottom: "16px", paddingLeft: "20px", lineHeight: 1.6 }}>
        <li>Appliance Installation</li>
        <li>Hanging Paintings and Clocks</li>
        <li>Flat-Pack Furniture Assembly</li>
        <li>Shelving and Cabinet Installation</li>
        <li>TV Mounting</li>
        <li>Door Handle and Lock Installation</li>
        <li>Light Bulb Replacement</li>
        <li>Minor Carpentry Work</li>
        <li>Window Coverings</li>
        <li>Civil Tasks</li>
        <li>Door Hardware Installation</li>
        <li>Interior Paint and Stain</li>
        <li>Drywalls Maintenance and Repair</li>
        <li>Professional Curtains Installation</li>
        <li>Carpentry Services</li>
        <li>Repair Services</li>
      </ul>

      <Typography sx={{ mt: 3, fontWeight: 600 }}>
        If you’ve been searching for a reliable “handyman near me,” look no
        further than Kmatechnical Services. Let us take care of your home
        maintenance needs with excellence and dedication!
      </Typography>
    </Box>
  );
}

export default Subdiscription4;
