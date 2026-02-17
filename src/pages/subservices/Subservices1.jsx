
import { Box, Typography, Button } from "@mui/material";
import Chilledwater1 from "../../assets/ChilledWater1-sub.png";

function Subservices1() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${Chilledwater1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative", // ⭐ important
        color: "#fff",
      }}
    >
      {/* Bottom Left Content */}
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: 20, md: 40 },
          left: { xs: 20, md: 40 },
          maxWidth: "800px",
        }}
      >
        <Typography
          variant="h3"
          sx={{ fontWeight: 700, mb: 1 }}
        >
          Chilled Water Pipe Insulation
        </Typography>

        <Typography
          sx={{ fontSize: "20px", lineHeight: 1.6, mb: 3 }}
        >
          Your Trusted Partner for Quality Maintenance Services in Dubai and Abu Dhabi
        </Typography>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#C9861B",
            color: "#fff",
            px: 4,
            py: 1.5,
            "&:hover": { backgroundColor: "#C9861B" },
          }}
        >
          ENQUIRE NOW
        </Button>
      </Box>
    </Box>
  );
}

export default Subservices1;
