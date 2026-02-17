
import { Box, Typography } from "@mui/material";

function Subdiscription3() {
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
        Electrical Services
      </Typography>

      {/* Description */}
      <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
        DESCRIPTION
      </Typography>

      <Typography sx={{ mb: 3, lineHeight: 1.7 }}>
        Kmatechnical Electrical Services: Your trusted partner for electrical
        solutions. At Kmatechnical Electrical Services, we pride ourselves on
        delivering top-quality electrical repairs and maintenance. Our team of
        highly qualified electricians ensures that your electrical system
        remains in optimal working order.
      </Typography>

      <Typography sx={{ mb: 3, fontWeight: 600 }}>
        Comprehensive Troubleshooting:
      </Typography>
      <Typography sx={{ mb: 3, lineHeight: 1.6 }}>
        From safety checks to full electrical rewires, we address all your
        electrical concerns. Our experts meticulously diagnose issues and
        provide effective solutions.
      </Typography>

      <Typography sx={{ mb: 2, fontWeight: 600 }}>Scope of Our Services:</Typography>
      <ul style={{ marginBottom: "16px", paddingLeft: "20px" }}>
        <li>Onsite Inspections and Diagnostics: Thoroughly assess your electrical setup, identifying potential hazards.</li>
        <li>Testing for Short Circuits: Ensuring safety by detecting and rectifying wiring problems that could lead to fires.</li>
        <li>Condensate Drain Tray Inspection and Cleaning: Preventing moisture-related issues.</li>
        <li>Lighting, Sockets, and Switch Installation: Enhancing functionality and aesthetics.</li>
        <li>Fuse/Circuit Board Upgrades: Keeping your system up-to-date.</li>
        <li>Rectification of Faults and Dangerous Wiring Installations: Prioritizing safety.</li>
      </ul>

      <Typography sx={{ mb: 2, fontWeight: 600 }}>Benefits for You:</Typography>
      <ul style={{ marginBottom: "16px", paddingLeft: "20px" }}>
        <li>Peace of Mind: Trust in our expertise for a worry-free electrical system.</li>
        <li>Reduced Fire Risk: Our proactive approach minimizes hazards.</li>
        <li>Appliance Reliability: Ensuring optimal performance and longevity.</li>
        <li>Energy-Efficient Lighting: Modernize your space while saving on energy costs.</li>
      </ul>

      <Typography sx={{ mb: 2, fontWeight: 600 }}>Exclusions:</Typography>
      <ul style={{ marginBottom: "16px", paddingLeft: "20px" }}>
        <li>Spare Parts and Consumables: These are not covered.</li>
        <li>Civil Works (e.g., Gypsum Ceiling Cutting): Beyond our scope.</li>
      </ul>

      <Typography sx={{ mt: 3, fontWeight: 600 }}>
        Choose Kmatechnical Electrical Services for professional, reliable, and efficient electrical solutions. Let us light up your space safely and effectively.
      </Typography>
    </Box>
  );
}

export default Subdiscription3;
