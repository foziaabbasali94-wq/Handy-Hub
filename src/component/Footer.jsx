
import { Box, Grid, Typography, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Logo from "../assets/Logo.svg";

function Footer() {
  const navigate = useNavigate();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#000",
        color: "#fff",
        px: { xs: 3, sm: 5, md: 10 },
        py: { xs: 6, sm: 8, md: 10 },
        display: { xs: "none", md: "block" }, // Hide on xs and sm, show on md+
      }}
    >
      <Grid container spacing={{ xs: 4, md: 6 }} alignItems="flex-start">
        {/* LOGO */}
        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{ display: "flex", alignItems: "center", cursor: "pointer", mb: { xs: 2, sm: 0 } }}
            onClick={() => navigate("/")}
          >
            <img src={Logo} alt="Logo" style={{ height: 60 }} />
          </Box>
        </Grid>

        {/* SECTIONS */}
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
              Sections
            </Typography>
            <Typography sx={{ cursor: "pointer", "&:hover": { color: "#ccc" } }} onClick={() => navigate("/")}>
              Home
            </Typography>
            <Typography sx={{ cursor: "pointer", "&:hover": { color: "#ccc" } }} onClick={() => navigate("/services")}>
              Services
            </Typography>
            <Typography sx={{ cursor: "pointer", "&:hover": { color: "#ccc" } }} onClick={() => navigate("/about")}>
              About Us
            </Typography>
            <Typography sx={{ cursor: "pointer", "&:hover": { color: "#ccc" } }} onClick={() => navigate("/contact")}>
              Contact Us
            </Typography>
          </Box>
        </Grid>

        {/* CONTACT */}
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mt: { xs: 2, sm: 0 } }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
              Contact
            </Typography>
            <Typography fontSize={{ xs: 14, sm: 15 }}>Phone No:</Typography>
            <Typography fontWeight="bold" fontSize={{ xs: 14, sm: 15 }}>
              +92 303 6786363
            </Typography>
          </Box>
        </Grid>

        {/* SOCIAL */}
        <Grid item xs={12} sm={6} md={3}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: { xs: 2, sm: 0 } }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
              Social
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1, fontSize: { xs: 14, sm: 15 } }}>
              <FacebookIcon fontSize="small" />
              <Typography>Handy-Hub</Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1, fontSize: { xs: 14, sm: 15 } }}>
              <WhatsAppIcon fontSize="small" />
              <Typography>+92 303 6786363</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* DIVIDER LINE */}
      <Divider sx={{ backgroundColor: "#444", my: 4 }} />

      {/* COPYRIGHT */}
      <Typography sx={{ textAlign: "center", fontSize: { xs: 12, sm: 14 }, color: "#aaa" }}>
        Copyright © Handy-Hub 2026. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
