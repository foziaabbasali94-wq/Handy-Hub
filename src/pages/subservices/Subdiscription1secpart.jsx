
import { Box, Typography, Card, CardMedia, CardContent } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Acer2 from "../../assets/acservice_xupu4o (1).svg";
import Acer from "../../assets/acrepair_tqmii5 (1).svg";

function Subdiscription1secpart() {
  const navigate = useNavigate();

  const cards = [
    { img: Acer, title: "AC Services", route: "/subservices/1/subdetailservice/1" },
    { img: Acer2, title: "AC Repair", route: "/subservices/1/subdetailservice/1" },
  ];

  const handleCardClick = (route) => {
    navigate(route); // navigate to route
    // You can replace this with any function you want
    console.log("Card clicked:", route);
  };

  return (
    <Box
      sx={{
        px: { xs: 3, md: 10 },
        py: { xs: 5, md: 8 },
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {/* Pagination */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          mb: 3,
        }}
      >
        <Typography
          sx={{
            fontSize: 18,
            cursor: "pointer",
            color: "#BDBDBD",
            fontWeight: "bold",
          }}
        >
          {"<"}
        </Typography>

        <Typography
          sx={{
            px: 3,
            py: 1,
            borderRadius: "20px",
            fontWeight: 700,
            color: "#BDBDBD",
            fontSize: 18,
            backgroundColor: "#F5F5F5",
          }}
        >
          1
        </Typography>

        <Typography
          sx={{
            fontSize: 22,
            cursor: "pointer",
            color: "#BDBDBD",
            fontWeight: "bold",
          }}
        >
          {">"}
        </Typography>
      </Box>

      {/* TRENDING SERVICES HEADING */}
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", mb: 4, textAlign: "center" }}
      >
        TRENDING SERVICES
      </Typography>

      {/* Cards */}
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
            sx={{
              width: 270,
              borderRadius: 3,
              boxShadow: 3,
              textAlign: "center",
              cursor: "pointer", // shows pointer on hover
              transition: "transform 0.2s",
              "&:hover": { transform: "scale(1.05)" }, // slight hover effect
            }}
            onClick={() => handleCardClick(card.route)}
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

export default Subdiscription1secpart;
