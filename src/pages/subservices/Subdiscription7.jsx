
import { Box, Typography } from "@mui/material";
import Homeapplience1 from "../../assets/fridge_7.jpg";
import Homeapplience3 from "../../assets/washingMachine_7.jpg";

function Subdiscription7() {
  const cards = [
    {
      title: "Fridge Repairing",
      detail: "Starting from AED 175",
      image: Homeapplience1,
    },
    {
      title: "Washing Machine Repairing",
      detail: "Starting from AED 175",
      image: Homeapplience3,
    },
  ];

  return (
    <Box sx={{ px: { xs: 2, sm: 4, md: 8 }, py: { xs: 6, md: 10 } }}>
      {/* MAIN HEADING */}
      <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
        <Typography
          variant="h4"
          sx={{
            fontSize: { xs: "22px", sm: "26px", md: "32px" },
            fontWeight: "bold",
          }}
        >
          Home Appliances Repairing Services
        </Typography>
      </Box>

      {/* CARDS */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: 4, sm: 6 },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {cards.map((card, index) => (
          <Box
            key={index}
            sx={{
              width: { xs: "90%", sm: "250px", md: "300px" },
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "#fff",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              },
            }}
          >
            {/* IMAGE */}
            <Box
              component="img"
              src={card.image}
              alt={card.title}
              sx={{
                width: "100%",
                height: { xs: "180px", sm: "200px", md: "220px" },
                objectFit: "cover",
                transition: "all 0.3s ease-in-out",
              }}
            />

            {/* TEXT BELOW IMAGE */}
            <Box sx={{ p: 2, textAlign: "center" }}>
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: "16px", sm: "18px", md: "20px" },
                  fontWeight: "bold",
                  mb: 1,
                }}
              >
                {card.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "14px", sm: "15px", md: "16px" },
                  color: "text.secondary",
                }}
              >
                {card.detail}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Subdiscription7;
