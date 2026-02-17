
import { Box, Typography, Card, CardContent, Button } from "@mui/material";

function MaintenancePage() {
  const packages = [
    { title: "BASIC", description: "Starting At", price: "AED 121" },
    { title: "STANDARD", description: "Starting At", price: "AED 209" },
    { title: "EXECUTIVE", description: "Starting At", price: "AED 314" },
    { title: "CUSTOM", description: "Starting At", price: "AED 0" },
  ];

  return (
    <Box sx={{ backgroundColor: "#f4f6f8", py: 6 }}>

      {/* Heading */}
      <Typography
        align="center"
        fontWeight="700"
        fontSize={{ xs: "22px", md: "28px" }}
        mb={1}
      >
        Maintenance Packages
      </Typography>

      <Typography
        align="center"
        color="text.secondary"
        fontSize="14px"
        mb={5}
      >
        Choose a package that’s right for you
      </Typography>


      {/* Cards Container */}
      <Box
        sx={{
          maxWidth: "900px",
          margin: "auto",
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          justifyContent: "center",
        }}
      >
        {packages.map((item, index) => {
          const isFirst = index === 0;
          const isLast = index === packages.length - 1;

          return (
            <Box
              key={index}
              sx={{
                width: {
                  xs: "80%",
                  sm: "47%",
                },
                display: "flex",
              }}
            >
              <Card
                sx={{
                  width: "100%",
                  height: 200, // ✅ Equal height
                  borderRadius: 3,
                  boxShadow: 3,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  p: 2,
                  backgroundColor: isFirst ? "#C9861B" : "#fff",
                  transition: "0.3s",

                  "&:hover": {
                    backgroundColor: "#C9861B",
                    transform: "translateY(-5px)",
                    boxShadow: 6,
                  },

                  "&:hover .text": {
                    color: "#fff",
                  },

                  "&:hover .btn": {
                    backgroundColor: "#fff",
                    color: "#C9861B",
                    border: "1px solid #C9861B",
                  },
                }}
              >

                <CardContent sx={{ p: 0 }}>

                  <Typography
                    className="text"
                    fontWeight="700"
                    fontSize="15px"
                    color={isFirst ? "#fff" : "#111"}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    className="text"
                    fontSize="12px"
                    color={isFirst ? "#fff" : "#777"}
                    mt={0.5}
                  >
                    {item.description}
                  </Typography>

                  <Typography
                    className="text"
                    fontWeight="700"
                    fontSize="18px"
                    mt={1}
                    color={isFirst ? "#fff" : "#111"}
                  >
                    {item.price}

                    <Typography
                      component="span"
                      fontSize="11px"
                      ml={0.5}
                    >
                      / Month
                    </Typography>

                  </Typography>

                </CardContent>


                <Button
                  className="btn"
                  fullWidth
                  sx={{
                    mt: 2,
                    fontSize: "13px",
                    py: 0.6,
                    borderRadius: 2,
                    backgroundColor: "#fff",
                    color: "#C9861B",
                    border: "1px solid #C9861B",
                    fontWeight: 600,
                  }}
                >
                  {isLast ? "Request Now" : "Select Plan"}
                </Button>


              </Card>
            </Box>
          );
        })}
      </Box>

    </Box>
  );
}

export default MaintenancePage;
