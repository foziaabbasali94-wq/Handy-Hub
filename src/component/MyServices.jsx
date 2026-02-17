
import { Box, Typography, Button } from "@mui/material";
import ServiceImg from "../assets/service_img_yb56ni.svg";

function MyServices() {
  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "40vh", sm: "70vh", md: "100vh" }, // responsive height
        backgroundImage: `url(${ServiceImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: { xs: "flex-start", sm: "center", md: "flex-end" }, // align differently on small screens
        justifyContent: { xs: "center", md: "flex-start" },
        p: { xs: 2, sm: 4, md: 6 },
        position: "relative",
      }}
    >
      {/* Overlay for better text readability on small screens */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: { xs: "rgba(0,0,0,0.45)", sm: "rgba(0,0,0,0.35)", md: "transparent" },
        }}
      />

      {/* Text Content */}
      <Box
        sx={{
          position: "relative",
          color: "white",
          maxWidth: { xs: "90%", sm: "70%", md: 600 },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "22px", sm: "28px", md: "36px" },
          }}
        >
          All Services
        </Typography>

        <Typography
          sx={{
            mt: 1,
            fontSize: { xs: "12px", sm: "16px", md: "18px" },
            lineHeight: 1.5,
          }}
        >
          Your Trusted Partner for Quality Maintenance Services in Dubai and Abu Dhabi
        </Typography>

        <Button
          variant="contained"
          sx={{
            mt: 3,
            backgroundColor: "#C9861B",
            color: "#fff",
            px: { xs: 3, sm: 4, md: 6 },
            py: { xs: 1, sm: 1.5, md: 2 },
            fontSize: { xs: "12px", sm: "14px", md: "16px" },
            fontWeight: "bold",
            "&:hover": { backgroundColor: "#b67815" },
          }}
        >
          ENQUIRE NOW
        </Button>
      </Box>
    </Box>
  );
}

export default MyServices;
