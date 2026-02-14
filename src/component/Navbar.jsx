import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Stack,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import PhoneIcon from "@mui/icons-material/Phone";

import { useTheme, useMediaQuery } from "@mui/material";
import Logo from "../assets/Logo.svg";

const menuItems = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ maxWidth: 1200, mx: "auto" }}>
      {/* TOP BAR */}
      <AppBar position="static" color="inherit" elevation={0}>
        <Toolbar
          sx={{
            px: 2,
            py: 0.5,
            flexWrap: "wrap",
            gap: 1,
             display: { xs: "none", sm: "flex" },
          }}
        >
          <Stack direction="row" alignItems="center" spacing={1} flex={1}>
            <LocationOnIcon fontSize="small" sx={{ color: "#9e9e9e" }} />
            <Typography fontSize={14} color="#9e9e9e">
              Dubai, Abu Dhabi
            </Typography>
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            flex={1}
            justifyContent="center"
          >
            <AccessTimeFilledIcon fontSize="small" sx={{ color: "#9e9e9e" }} />
            <Typography fontSize={14} color="#9e9e9e">
              9:00 AM – 10:00 PM
            </Typography>
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            flex={1}
            justifyContent="flex-end"
          >
            <PhoneIcon fontSize="small" sx={{ color: "#9e9e9e" }} />
            <Typography fontSize={14} color="#9e9e9e">
              +92 3036786363
            </Typography>
          </Stack>
        </Toolbar>
      </AppBar>

      <Divider />

      {/* MAIN NAVBAR */}
      <AppBar position="static" color="inherit" elevation={0}>
        <Toolbar sx={{ px: 2 }}>
          {/* LOGO */}
          <Link to="/">
            <img src={Logo} alt="Logo" style={{ height: 60 }} />
          </Link>

          {/* DESKTOP MENU */}
          {!isMobile && (
            <Stack direction="row" spacing={4} sx={{ mx: "auto" }}>
              {menuItems.map((item) => (
                <Typography
                  key={item.label}
                  component={Link}
                  to={item.path}
                  sx={{
                    textDecoration: "none",
                    color: "#000",
                    fontSize: 18,
                    "&:hover": { color: "#C9861B" },
                  }}
                >
                  {item.label}
                </Typography>
              ))}
            </Stack>
          )}

          {/* MOBILE MENU ICON */}
          {isMobile && (
            <IconButton
              sx={{ ml: "auto" }}
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* DRAWER */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box sx={{ width: 250, mt: 2 }}>
          <List>
            {menuItems.map((item) => (
              <ListItem
                button
                key={item.label}
                component={Link}
                to={item.path}
                onClick={() => setOpen(false)}
              >
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}

export default Navbar;
