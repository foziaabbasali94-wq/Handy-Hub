import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function Contactinformation() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.message) newErrors.message = "Message is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  };

  return (
    <Box sx={{ px: { xs: 2, sm: 4, md: 12 }, py: { xs: 6, md: 10 } }}>
      {/* PAGE HEADING */}
      <Box sx={{ textAlign: "center", mb: { xs: 4, md: 8 } }}>
        <Typography
          sx={{
            fontSize: { xs: "28px", sm: "32px", md: "42px" },
            fontWeight: "bold",
            mb: 1,
          }}
        >
          Contact Us
        </Typography>
        <Typography color="text.secondary" fontSize={{ xs: "16px", md: "20px" }}>
          Any question or remarks? Just write us a message!
        </Typography>
      </Box>

      {/* FLEX CONTAINER */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 4, md: 6 },
          alignItems: "flex-start",
        }}
      >
        {/* LEFT CARD */}
        <Box
          sx={{
            flex: 1,
            p: { xs: 4, md: 5 },
            borderRadius: "20px",
            background: "linear-gradient(180deg, #C9861B 0%, #C9861B 100%)",
            color: "#fff",
            minHeight: { xs: "auto", md: "420px" },
          }}
        >
          <Typography variant="h5" fontWeight="bold" mb={2}>
            Contact Information
          </Typography>
          <Typography mb={4} sx={{ fontSize: { xs: "16px", md: "20px" }, fontWeight: 500 }}>
            Say something to start a live chat!
          </Typography>

          <Box display="flex" alignItems="center" mb={2}>
            <PhoneIcon sx={{ mr: 2 }} />
            <Typography fontSize={{ xs: "14px", md: "16px" }}>+92 3036786363</Typography>
          </Box>

          <Box display="flex" alignItems="center" mb={2}>
            <PhoneIcon sx={{ mr: 2 }} />
            <Typography fontSize={{ xs: "14px", md: "16px" }}>+92 3036786363</Typography>
          </Box>

          <Box display="flex" alignItems="center" mb={4}>
            <EmailIcon sx={{ mr: 2 }} />
            <Typography fontSize={{ xs: "14px", md: "16px" }}>info@kmatechnical.com</Typography>
          </Box>

          <Box display="flex" gap={2}>
            <FacebookIcon sx={{ cursor: "pointer" }} />
            <WhatsAppIcon sx={{ cursor: "pointer" }} />
          </Box>
        </Box>

        {/* RIGHT FORM */}
        <Box
          sx={{
            flex: 1,
            p: { xs: 4, md: 5 },
            borderRadius: "20px",
            backgroundColor: "#fff",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
            minHeight: { xs: "auto", md: "520px" },
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* FORM FIELDS */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: { xs: 2, md: 2 },
              flexGrow: 1,
            }}
          >
            <TextField
              fullWidth
              sx={{ flex: { xs: "1 1 100%", md: "1 1 48%" } }}
              label="First Name"
              name="firstName"
              variant="standard"
              value={formData.firstName}
              onChange={handleChange}
              helperText={errors.firstName || "Enter your first name"}
              error={Boolean(errors.firstName)}
            />
            <TextField
              fullWidth
              sx={{ flex: { xs: "1 1 100%", md: "1 1 48%" } }}
              label="Last Name"
              name="lastName"
              variant="standard"
              value={formData.lastName}
              onChange={handleChange}
              helperText={errors.lastName || "Enter your last name"}
              error={Boolean(errors.lastName)}
            />
            <TextField
              fullWidth
              sx={{ flex: { xs: "1 1 100%", md: "1 1 48%" } }}
              label="Email"
              name="email"
              variant="standard"
              value={formData.email}
              onChange={handleChange}
              helperText={errors.email || "Enter a valid email address"}
              error={Boolean(errors.email)}
            />
            <TextField
              fullWidth
              sx={{ flex: { xs: "1 1 100%", md: "1 1 48%" } }}
              label="Phone Number"
              name="phone"
              variant="standard"
              value={formData.phone}
              onChange={handleChange}
              helperText={errors.phone || "Enter your contact number"}
              error={Boolean(errors.phone)}
            />
            <TextField
              fullWidth
              label="Message"
              name="message"
              variant="standard"
              multiline
              rows={4}
              sx={{ mt: 2 }}
              value={formData.message}
              onChange={handleChange}
              helperText={errors.message || "Write your message or inquiry here"}
              error={Boolean(errors.message)}
            />
          </Box>

          {/* BUTTON AT BOTTOM RIGHT */}
          <Box sx={{ textAlign: { xs: "center", md: "right" }, mt: "auto" }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#C9861B",
                px: { xs: 4, md: 6 },
                py: 1.6,
                fontWeight: "bold",
                mt: { xs: 3, md: 0 },
                "&:hover": { backgroundColor: "#C9861B" },
              }}
              onClick={handleSubmit}
            >
              Send Message
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Contactinformation;
