
import { Box, Typography } from "@mui/material";

function Subdiscription1() {
  return (
    <Box
      sx={{
        px: { xs: 3, md: 10 },
        py: { xs: 5, md: 8 },
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {/* Main Title */}
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
        Chilled Water Pipe Insulation
      </Typography>

      {/* DESCRIPTION */}
      <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
        DESCRIPTION
      </Typography>

      <Typography sx={{ mb: 3, lineHeight: 1.7 }}>
        At Kmatechnical, we specialize in comprehensive insulation solutions to
        enhance energy efficiency and comfort. Our skilled team ensures optimal
        performance and longevity for your spaces. Here’s what we offer:
      </Typography>

      {/* Services List */}
      <Box sx={{ mb: 4, pl: { xs: 2, sm: 3 } }}>
        <Typography sx={{ mb: 1 }}>
          <strong>Chilled Water Pipe Insulation:</strong> Protect your pipes from
          condensation, mold, and ceiling damage. We use high-quality insulating
          materials such as rubber, XLPE, and glass wool.
        </Typography>
        <Typography sx={{ mb: 1 }}>
          <strong>Ceiling Removal and Re-Fixing:</strong> Our seamless process
          minimizes disruption. We remove existing ceilings, insulate pipes, and
          expertly re-fix ceilings.
        </Typography>
        <Typography sx={{ mb: 1 }}>
          <strong>Discreet Painting Services:</strong> We provide discreet paint
          jobs in designated areas. You won’t even notice our presence once the
          work is complete.
        </Typography>
      </Box>

      {/* Why Choose */}
      <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
        Why Choose Kmatechnical?
      </Typography>

      <Box sx={{ mb: 4, pl: { xs: 2, sm: 3 } }}>
        <Typography sx={{ mb: 1 }}>
          <strong>Experience:</strong> With over a decade of experience, we’ve
          honed our craft, serving diverse clients from domestic spaces to
          luxury hotels.
        </Typography>
        <Typography sx={{ mb: 1 }}>
          <strong>Quality Assurance:</strong> Meticulous workmanship ensures a
          flawless finish.
        </Typography>
        <Typography sx={{ mb: 1 }}>
          <strong>Warranty:</strong> Enjoy peace of mind with our 2-year
          warranty on all insulation projects.
        </Typography>
      </Box>

      <Typography sx={{ mt: 3, fontWeight: 700 }}>
        Discover the difference KMA Technical can make. Contact us today for
        efficient, reliable, and top-notch insulation services!
      </Typography>
    </Box>
  );
}

export default Subdiscription1;
