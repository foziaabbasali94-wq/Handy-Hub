
import { Box, Typography, Button } from "@mui/material";

// IMAGES
import Backimg from "../assets/backimg.jpeg";
import time from "../assets/time.svg";
import onlinebook from "../assets/online-book.svg";
import emergency from "../assets/emergency.svg";
import Guranty from "../assets/guranty.svg";

function Herosection() {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: { xs: 400, sm: 550, md: 600 },
        backgroundImage: `url(${Backimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      {/* Center Text */}
      <Box
        sx={{
          position: "absolute",
          top: { xs: "30%", sm: "35%", md: "38%" },
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: "#fff",
          px: { xs: 2, sm: 3, md: 0 },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: 16, sm: 28, md: 32 },
          }}
        >
          Best Home Maintenance
        </Typography>

        <Typography
          sx={{
            mt: 1,
            fontSize: { xs: 14, sm: 16, md: 18 },
            lineHeight: { xs: 1.4, sm: 1.6 },
          }}
        >
          Your Trusted Partner for Quality Maintenance Services in
          <br />
          Dubai and Abu Dhabi
        </Typography>

        <Button
          sx={{
            mt: { xs: 3, sm: 4, md: 6 },
            backgroundColor: "#C9861B",
            color: "#fff",
            px: { xs: 4, sm: 5 },
            py: { xs: 1.5, sm: 1.8 },
            fontWeight: "bold",
            fontSize: { xs: 12, sm: 14, md: 16 },
            borderRadius: 2,
            "&:hover": { backgroundColor: "#C9861B" },
          }}
        >
          ENQUIRE NOW
        </Button>
      </Box>

      {/* Overlapping Card */}
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: -90, sm: -65 },
          left: "50%",
          transform: "translateX(-50%)",
          width: { xs: "90%", sm: "100%" },
          maxWidth: 1100,
          backgroundColor: "#C9861B",
          borderRadius: 4,
          boxShadow: "0 15px 30px rgba(0,0,0,0.3)",
          py: { xs: 2, sm: 3 },
          px: { xs: 2, sm: 1 },
          zIndex: 3,
          overflowX: "auto",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexWrap: "nowrap",
            justifyContent: { xs: "flex-start", sm: "space-between" },
            textAlign: "center",
            color: "#fff",
            gap: { xs: 3, sm: 0 },
            minWidth: { xs: "max-content", sm: "auto" },
          }}
        >
          {/* Item 1 */}
          <Box sx={{ flex: "0 0 120px" }}>
            <img src={Guranty} alt="Guarantee" style={{ height: 32 }} />
            <Typography sx={{ mt: 1, fontSize: { xs: 12, sm: 14, md: 16 } }}>
              Guaranteed
            </Typography>
            <Typography sx={{ fontSize: { xs: 12, sm: 14, md: 16 } }}>
              Satisfaction
            </Typography>
          </Box>

          {/* Item 2 */}
          <Box sx={{ flex: "0 0 120px" }}>
            <img src={onlinebook} alt="Booking" style={{ height: 32 }} />
            <Typography sx={{ mt: 1, fontSize: { xs: 12, sm: 14, md: 16 } }}>
              Online
            </Typography>
            <Typography sx={{ fontSize: { xs: 12, sm: 14, md: 16 } }}>
              Booking
            </Typography>
          </Box>

          {/* Item 3 */}
          <Box sx={{ flex: "0 0 120px" }}>
            <img src={emergency} alt="Emergency" style={{ height: 32 }} />
            <Typography sx={{ mt: 1, fontSize: { xs: 12, sm: 14, md: 16 } }}>
              Emergency
            </Typography>
            <Typography sx={{ fontSize: { xs: 12, sm: 14, md: 16 } }}>
              Response
            </Typography>
          </Box>

          {/* Item 4 */}
          <Box sx={{ flex: "0 0 120px" }}>
            <img src={time} alt="Time" style={{ height: 32 }} />
            <Typography sx={{ mt: 1, fontSize: { xs: 12, sm: 14, md: 16 } }}>
              24/7 Working
            </Typography>
            <Typography sx={{ fontSize: { xs: 12, sm: 14, md: 16 } }}>
              Days
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Spacer to avoid content overlap */}
      <Box sx={{ height: { xs: 120, sm: 100, md: 120 } }} />
    </Box>
  );
}

export default Herosection;
