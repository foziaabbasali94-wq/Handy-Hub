import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Card, CardMedia, CardContent, Typography, Grid } from "@mui/material";

import Home from "../../assets/home1.png";
import Home2 from "../../assets/home2.png";
import Home3 from "../../assets/home3.png";
import Paint from "../../assets/painting1.jpg";

function Subdiscription5() {
  const navigate = useNavigate();

  const cards = [
    { img: Home, title: "Epoxy Floor", route: "/subservices/5/subdetailservice/1"},
    { img: Home2, title: "Flooring/Tiling", route: "/subservices/5/subdetailservice/2" },
    { img: Home3, title: <>The Full Works <br /> Walls and Ceiling</>, route: "/subservices/5/subdetailservice/3" },
    { img: Paint, title: "Painting Service", route: "/subservices/5/subdetailservice/4" },
  ];

  return (
    <Box sx={{ px: { xs: 2, md: 10 }, py: 5 }}>
      {/* Heading above cards */}
      <Typography
        variant="h4"
        align="center"
        sx={{ fontWeight: "bold", mb: 5 }}
      >
        Home Improvement Services
      </Typography>

      <Grid
        container
        spacing={4}
        justifyContent="center" // Center all cards
        alignItems="stretch"   // Make all cards same height
      >
        {cards.map((card, index) => (
          <Grid item xs={12} sm={6} md={3} key={index} sx={{ display: "flex" }}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
                boxShadow: 5,
                transition: "transform 0.3s",
                cursor: "pointer", // 👈 shows clickable pointer
                "&:hover": { transform: "translateY(-5px)" },
              }}
              onClick={() => navigate(card.route)} // 👈 click navigates
            >
              <CardMedia
                component="img"
                image={card.img}
                alt={typeof card.title === "string" ? card.title : "Service"}
                sx={{
                  height: 280,
                  width: 250,
                }}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  align="center"
                  sx={{ fontWeight: "bold" }}
                >
                  {card.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Subdiscription5;
