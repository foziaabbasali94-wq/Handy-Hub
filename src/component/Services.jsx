import React, { useState } from "react";
import { Box, Typography, Pagination } from "@mui/material";
import { useNavigate } from "react-router-dom";
//  IMAGES 
 import chilled from "../assets/ChilledWater2.png"; 
 import group from "../assets/Group2_umreqr (2).svg"; 
 import group3 from "../assets/Group3_qnpblx (1).svg";
  import handy from "../assets/HandyMan2_timiuf.jpg"; 
  import group5 from "../assets/Group5_bpr7jd (2).svg"; 
  import man from "../assets/Group6_s5hv6w (1).svg"; 
  import home from "../assets/Home3_p6jacg.jpg"; 
  import man2 from "../assets/man-with-wrench.jpg"; 
  // PAGE 2 IMAGES 
  import Cleaning2 from "../assets/cleaning2.jpg";
   import WaterTank from "../assets/watarTank.jpg"; 
   import Smart2 from "../assets/smart2.jpg";
import Cleaning from "../assets/cleaning.jpg"; 
import Pool from "../assets/pool.svg";
function Services() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);

  const services = [
    { img: chilled, title: "Chilled Water Pipe Insulation", route: "/subservices/1" },
    { img: group, title: "Air Conditioning", route: "/subservices/2" },
    { img: group3, title: "Electrical Service", route: "/subservices/3" },
    { img: handy, title: "Handyman Services", route: "/subservices/4" },
    { img: group5, title: "Home Improvement", route: "/subservices/5" },
    { img: man, title: "Plumbing Services", route: "/subservices/6" },
    { img: home, title: "Home Appliances Repairing", route: "/subservices/7" },
    { img: man2, title: "Maintenance Packages", route: "/subservices/8" },

    { img: WaterTank, title: "Water Tank Cleaning" },
    { img: Smart2, title: "Smart Installation" },
    { img: Cleaning, title: "Special Cleaning" },
    { img: Cleaning2, title: "Cleaning Services" },
    { img: Pool, title: "Pool Cleaning" },
  ];

  const startIndex = page === 1 ? 0 : 8;
  const endIndex = page === 1 ? 8 : services.length;
  const currentItems = services.slice(startIndex, endIndex);

  return (
    <Box sx={{ px: { xs: 2, sm: 3, md: 6 }, py: { xs: 5, md: 8 } }}>
      {/* HEADING */}
      <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
        <Typography
          sx={{
            fontSize: { xs: 28, sm: 34, md: 40 },
            fontWeight: "bold",
          }}
        >
          All Services
        </Typography>

        <Typography
          sx={{
            mt: 1,
            fontSize: { xs: 14, sm: 16, md: 18 },
            color: "#666",
          }}
        >
          Comprehensive Solutions for Property Maintenance and Beyond
        </Typography>
      </Box>

      {/* CARDS */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          },
          gap: { xs: 2, md: 3 },
        }}
      >
        {currentItems.map((service, index) => (
          <Box
            key={index}
            onClick={() => service.route && navigate(service.route)}
            sx={{
              borderRadius: 3,
              overflow: "hidden",
              cursor: service.route ? "pointer" : "default",
              boxShadow: "0 8px 15px rgba(0,0,0,0.1)",
              transition: "0.3s ease",
              "&:hover": {
                transform: service.route ? "translateY(-6px)" : "none",
                boxShadow: service.route
                  ? "0 20px 35px rgba(0,0,0,0.25)"
                  : "0 8px 15px rgba(0,0,0,0.1)",
              },
            }}
          >
            {/* IMAGE */}
            <Box
              sx={{
                height: { xs: 200, sm: 220, md: 260 },
              }}
            >
              <img
                src={service.img}
                alt={service.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>

            {/* TEXT */}
            <Box sx={{ p: 2, textAlign: "center" }}>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: 16, md: 18 },
                }}
              >
                {service.title}
              </Typography>

              {page === 2 && (
                <Typography sx={{ mt: 1, fontSize: 14, color: "#999" }}>
                  Coming Soon
                </Typography>
              )}
            </Box>
          </Box>
        ))}
      </Box>

      {/* PAGINATION */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
        <Pagination
          count={2}
          page={page}
          onChange={(e, v) => setPage(v)}
          size="large"
        />
      </Box>
    </Box>
  );
}

export default Services;
