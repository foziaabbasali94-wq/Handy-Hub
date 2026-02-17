
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";

// Replace with your actual image
import Basic3 from "../../assets/basicmakeover3.jpg";

function Subservices5img3() {
  const navigate = useNavigate();

  const handleEnquire = () => {
    navigate("/subservices/5/subdetailservice/3"); // update route if needed
  };

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: { xs: "60vh", md: "80vh" },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* BACKGROUND IMAGE */}
      <Box
        component="img"
        src={Basic3}
        alt="The Full Works - Walls and Ceiling"
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      />

      {/* TEXT + BUTTON — BOTTOM LEFT */}
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: 24, md: 48 },
          left: { xs: 16, md: 48 },
          zIndex: 1,
          color: "#fff",
          maxWidth: { xs: "95%", md: "45%" },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            mb: 2,
            textShadow: "2px 2px 6px rgba(0,0,0,0.6)",
          }}
        >
          The Full Works - Walls and Ceiling
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 3,
            textShadow: "1px 1px 4px rgba(0,0,0,0.6)",
          }}
        >
          Your Trusted Partner for Quality Maintenance Services in Dubai and Abu Dhabi
        </Typography>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#C9861B",
            width: "220px",
             height: "60px",
            fontWeight: "bold",
            "&:hover": { backgroundColor: "#b77417" },
          }}
          onClick={handleEnquire}
        >
          ENQUIRE NOW
        </Button>
      </Box>
    </Box>
  );
}

export default Subservices5img3;
