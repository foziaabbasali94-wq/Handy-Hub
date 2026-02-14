import React from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Button,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import Card1 from "../../assets/Basic-card.jpg";
import Card2 from "../../assets/Basic-card2.jpg";
import Card3 from "../../assets/Basic-card3.webp";

function Cardsubservices() {
  const navigate = useNavigate();

  const handleEnquireClick = () => {
    navigate("/contact"); // Make sure your route for ContactLanding is "/contact"
  };

  const renderLine = (text, isHighlight = false) => (
    <Box sx={{ mb: 1.5 }}>
      <Typography
        variant="body2"
        sx={{
          color: isHighlight ? "#C9861B" : "text.primary",
          fontWeight: isHighlight ? 600 : 400,
        }}
      >
        {text}
      </Typography>
      <Divider />
    </Box>
  );

  return (
    <Box sx={{ px: { xs: 2, md: 8 }, py: 6 }}>
      {/* Page Heading */}
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
        Maintenance Packages
      </Typography>

      {/* Note */}
      <Typography align="center" color="text.secondary" sx={{ mb: 5 }}>
        <strong>Note:</strong> These are the standard rates but they may vary
        subjected to the infrastructure of the building.
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {/* BASIC CARD */}
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              borderRadius: 3,
              boxShadow: 4,
              display: "flex",
              flexDirection: "column",
              maxWidth: 360,
              mx: "auto",
            }}
          >
            <CardMedia component="img" height="200" image={Card1} />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography align="center" fontWeight="bold" variant="h6" sx={{ mb: 2 }}>
                Basic
              </Typography>

              {renderLine("Emergency and routine callouts", true)}
              {renderLine("24/7/365 Helpline", true)}
              {renderLine("Unlimited emergency callouts for AC, electrical and plumbing failure")}
              {renderLine("First six routine callouts for AC, electrical and plumbing issues are free")}
              {renderLine("60 Minutes emergency response time")}
              {renderLine("6 Hours non-emergency response time")}
              {renderLine("Starting from AED 1458 / year")}
            </CardContent>

            {/* Button */}
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#C9861B",
                py: 1.5,
                fontWeight: "bold",
                borderRadius: 0,
                width: "100%",
                "&:hover": { backgroundColor: "#b07516" },
              }}
              onClick={handleEnquireClick}
            >
              ENQUIRE NOW
            </Button>
          </Card>
        </Grid>

        {/* STANDARD CARD */}
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              borderRadius: 3,
              boxShadow: 4,
              display: "flex",
              flexDirection: "column",
              maxWidth: 360,
              mx: "auto",
            }}
          >
            <CardMedia component="img" height="200" image={Card2} />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography align="center" fontWeight="bold" variant="h6" sx={{ mb: 2 }}>
                Standard
              </Typography>

              {renderLine("Annual services program", true)}
              {renderLine("x2/year AC service and maintenance")}
              {renderLine("x1/year Electrical service and maintenance")}
              {renderLine("x1/year Plumbing service and maintenance")}
              {renderLine("Emergency and routine callouts", true)}
              {renderLine("24/7/365 Helpline", true)}
              {renderLine("Unlimited emergency callouts for AC, electrical and plumbing failure")}
              {renderLine("Unlimited routine callouts for AC, electrical and plumbing issues")}
              {renderLine("60 Minutes emergency response time")}
              {renderLine("2 Hours non-emergency response time")}
              {renderLine("Service report")}
              {renderLine("Starting from AED 2508 / year")}
            </CardContent>

            {/* Button */}
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#C9861B",
                py: 1.5,
                fontWeight: "bold",
                borderRadius: 0,
                width: "100%",
                "&:hover": { backgroundColor: "#b07516" },
              }}
              onClick={handleEnquireClick}
            >
              ENQUIRE NOW
            </Button>
          </Card>
        </Grid>

        {/* EXECUTIVE CARD */}
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              borderRadius: 3,
              boxShadow: 4,
              display: "flex",
              flexDirection: "column",
              maxWidth: 360,
              mx: "auto",
            }}
          >
            <CardMedia component="img" height="200" image={Card3} />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography align="center" fontWeight="bold" variant="h6" sx={{ mb: 2 }}>
                Executive
              </Typography>

              {renderLine("Annual services program", true)}
              {renderLine("x2/year AC service and maintenance")}
              {renderLine("x1/year Electrical service and maintenance")}
              {renderLine("x1/year Plumbing service and maintenance")}
              {renderLine("Emergency and routine callouts", true)}
              {renderLine("24/7/365 Helpline", true)}
              {renderLine("Unlimited emergency callouts for AC, electrical and plumbing failure")}
              {renderLine("Unlimited routine callouts for AC, electrical and plumbing issues")}
              {renderLine("Unlimited routine callouts for small carpentry, masonry and painting touch-ups")}
              {renderLine("60 Minutes emergency response time")}
              {renderLine("2 Hours non-emergency response time")}
              {renderLine("Service report")}
              {renderLine("Spares parts and consumables (limited as per signed contract)")}
              {renderLine("Starting from AED 2508 / year")}
            </CardContent>

            {/* Button */}
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#C9861B",
                py: 1.5,
                fontWeight: "bold",
                borderRadius: 0,
                width: "100%",
                "&:hover": { backgroundColor: "#b07516" },
              }}
              onClick={handleEnquireClick}
            >
              ENQUIRE NOW
            </Button>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Cardsubservices;
