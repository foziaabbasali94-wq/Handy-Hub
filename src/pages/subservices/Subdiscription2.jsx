import React from "react";
import { Box, Typography, Card, CardMedia, CardContent } from "@mui/material";
import { useNavigate } from "react-router-dom";

import Acer2 from "../../assets/acservice_xupu4o (1).svg";
import Acer from "../../assets/acrepair_tqmii5 (1).svg";
import Ac from "../../assets/AC-Duct-Repair_qhd6tf.jpg";
import Duct from "../../assets/ductclean_rtdtwi (1).svg";

function Subdiscription2() {
  const navigate = useNavigate();

  const cards = [
    { img: Acer2, title: "AC Services", route: "/subservices/2/subdetailservice/2" },
    { img: Acer, title: "AC Repair", route: "/subservices/2/subdetailservice/3 " },
    { img: Ac, title: "Duct Cleaning", route: "/subservices/2/subdetailservice/4 " },
    { img: Duct, title: "AC Duct Fabrication", route: "/subservices/2/subdetailservice/5 " },
  ];

  return (
    <Box sx={{ px: { xs: 3, md: 10 }, py: 6 }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", mb: 5, textAlign: "center" }}
      >
        Air Conditioning Services
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 3,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {cards.map((card, index) => (
          <Card
            key={index}
            onClick={() => navigate(card.route)}
            sx={{
              width: 270,
              borderRadius: 3,
              boxShadow: 3,
              textAlign: "center",
              cursor: "pointer",
              transition: "0.3s",
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: 6,
              },
            }}
          >
            <CardMedia
              component="img"
              image={card.img}
              alt={card.title}
              sx={{ height: 230, objectFit: "cover" }}
            />

            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {card.title}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

export default Subdiscription2;
