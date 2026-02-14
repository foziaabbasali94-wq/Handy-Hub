import { Box, Typography } from "@mui/material";

function Aboutus() {
  return (
    <Box
      sx={{
        px: { xs: 2, sm: 4, md: 10 },
        py: { xs: 4, sm: 6, md: 10 },
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >

      {/* Heading */}
      <Typography
        sx={{
          fontWeight: "bold",
          mb: 3,
          fontSize: {
            xs: "22px",
            sm: "28px",
            md: "40px",
          },
        }}
      >
        Message from Our CEO
      </Typography>


      {/* Intro */}
      <Typography
        sx={{
          mb: 3,
          lineHeight: 1.7,
          fontSize: {
            xs: "14px",
            sm: "16px",
            md: "22px",
          },
        }}
      >
        Welcome to <strong>Hudy-Hub</strong> – Your Premier Partner for Innovative
        MEP (Mechanical, Electrical, and Plumbing) Services in the United Arab
        Emirates.
      </Typography>


      {/* Journey */}
      <Typography
        sx={{
          fontWeight: "bold",
          mb: 2,
          fontSize: {
            xs: "18px",
            sm: "22px",
            md: "30px",
          },
        }}
      >
        Our Journey and Values
      </Typography>


      <Typography
        sx={{
          mb: 3,
          lineHeight: 1.7,
          fontSize: {
            xs: "14px",
            sm: "15px",
            md: "18px",
          },
        }}
      >
        Since our inception in 2012, Hudy-Hub has been more than a service
        provider; we’ve been architects of progress. With a relentless
        commitment to excellence, we’ve forged partnerships across sectors,
        from hospitality to retail, delivering cutting-edge MEP solutions that
        redefine efficiency and sustainability.
      </Typography>



      {/* What Sets Us Apart */}
      <Typography
        sx={{
          fontWeight: "bold",
          mb: 2,
          fontSize: {
            xs: "18px",
            sm: "22px",
            md: "30px",
          },
        }}
      >
        What Sets Us Apart
      </Typography>



      {[
        "Comprehensive MEP Solutions:",
        "Smart Solutions:",
        "Pioneering Sustainability:",
        "Empowering Clients:",
        "Community Impact:",
      ].map((title, i) => (
        <Typography
          key={i}
          sx={{
            mb: 2,
            lineHeight: 1.7,
            fontSize: {
              xs: "14px",
              sm: "15px",
              md: "18px",
            },
          }}
        >
          <strong>{title}</strong> Lorem ipsum placeholder text for your content.
        </Typography>
      ))}



      {/* Looking Ahead */}
      <Typography
        sx={{
          fontWeight: "bold",
          mb: 2,
          mt: 3,
          fontSize: {
            xs: "18px",
            sm: "22px",
            md: "30px",
          },
        }}
      >
        Looking Ahead
      </Typography>


      <Typography
        sx={{
          lineHeight: 1.7,
          fontSize: {
            xs: "14px",
            sm: "15px",
            md: "18px",
          },
        }}
      >
        As we move forward into the next chapter, the possibilities are
        limitless. With Expo 2020 behind us, Hudy-Hub stands at the forefront
        of a new era for MEP services in the UAE—leading with innovation,
        sustainability, and excellence.
      </Typography>


    </Box>
  );
}

export default Aboutus;
