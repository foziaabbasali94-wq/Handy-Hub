import { useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import Fabrication from "../../assets/fabrication_ncuaxv.svg";

function Subservicesbackimg5() {
  const navigate = useNavigate();

  const handleEnquire = () => {
    navigate("/subservices/2/subdetailservice/2", {
      state: { bgIndex: 3 },
    });
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
        src={Fabrication}
        alt="A/C Duct Fabrication"
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
          A/C Duct Fabrication
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

export default Subservicesbackimg5;
