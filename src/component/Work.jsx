import React from "react";
import { Box, Typography, Button } from "@mui/material";

function Work() {
  return (
    <Box sx={{ px: { xs: 2, sm: 3, md: 6 }, py: { xs: 5, md: 8 } }}>
      {/* MAIN HEADING */}
      <Box sx={{ textAlign: "center", mb: { xs: 4, md: 5 } }}>
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: 28, sm: 32, md: 40 },
            fontWeight: "bold",
          }}
        >
          How it works
        </Typography>

        <Typography
          sx={{
            mt: 2,
            fontSize: { xs: 14, sm: 16, md: 18 },
            color: "#666",
          }}
        >
          Welcome to Handy-hub, one of the largest companies in the UAE. With a
          reputation based on quality, reliability, and value for money we work
          hard to keep our customers happy.
        </Typography>
      </Box>

      {/* 3 CARDS */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap", // allow wrap on mobile
          justifyContent: "center",
          gap: { xs: 2, sm: 3, md: 3 },
        }}
      >
        {/* CARD 1 */}
        <Box
          sx={{
            width: { xs: "100%", sm: "48%", md: "30%" },
            p: { xs: 2, md: 3 },
            borderRadius: 3,
            boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
            textAlign: "center",
            mb: { xs: 2, sm: 0 }, // spacing for stacked mobile cards
          }}
        >
          <Button
            sx={{
              mt: 3,
              backgroundColor: "#C9861B",
              color: "#fff",
              fontWeight: "bold",
              px: 4,
              "&:hover": { backgroundColor: "#C9861B" },
            }}
          >
            Select
          </Button>
          <Typography sx={{ mt: 2, color: "#666", fontSize: { xs: 14, md: 16 } }}>
            Select the service(s) you need
          </Typography>
        </Box>

        {/* CARD 2 */}
        <Box
          sx={{
            width: { xs: "100%", sm: "48%", md: "30%" },
            p: { xs: 2, md: 3 },
            borderRadius: 3,
            boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
            textAlign: "center",
            mb: { xs: 2, sm: 0 },
          }}
        >
          <Button
            sx={{
              mt: 3,
              backgroundColor: "#C9861B",
              color: "#fff",
              fontWeight: "bold",
              px: 4,
              "&:hover": { backgroundColor: "#C9861B" },
            }}
          >
            Book
          </Button>
          <Typography sx={{ mt: 2, color: "#666", fontSize: { xs: 14, md: 16 } }}>
            Book a date and time that suits you.
          </Typography>
        </Box>

        {/* CARD 3 */}
        <Box
          sx={{
            width: { xs: "100%", sm: "48%", md: "30%" },
            p: { xs: 2, md: 3 },
            borderRadius: 3,
            boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
            textAlign: "center",
          }}
        >
          <Button
            sx={{
              mt: 3,
              backgroundColor: "#C9861B",
              color: "#fff",
              fontWeight: "bold",
              px: 4,
              "&:hover": { backgroundColor: "#C9861B" },
            }}
          >
            Relax
          </Button>
          <Typography sx={{ mt: 2, color: "#666", fontSize: { xs: 14, md: 16 } }}>
            Sit back and relax while we get to work.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Work;
