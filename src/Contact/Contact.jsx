import { Box, Card, Typography, TextField, Button, Link } from "@mui/material";
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import { useMemo, useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const onChange = (key) => (e) =>
    setForm((s) => ({ ...s, [key]: e.target.value }));

  const canSubmit = useMemo(() => {
    return (
      form.name.trim() &&
      form.email.trim() &&
      form.subject.trim() &&
      form.message.trim()
    );
  }, [form]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        px: { xs: 2, sm: 3, md: 6 },
        py: { xs: 6, md: 6 },
        backgroundColor: "#fffafa",
      }}
    >
      <Box sx={{ textAlign: "center", mb: 2.5, maxWidth: 1100 }}>
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 1,
            mb: 0.75,
          }}
        >
          <Typography
            component="h2"
            sx={{
              fontSize: { xs: "1.5rem", sm: "2rem" },
              fontWeight: 900,
              lineHeight: 1.1,
              textDecoration: "underline",
              textUnderlineOffset: "6px",
            }}
          >
            Let's Get In Touch
          </Typography>
          <HandshakeOutlinedIcon sx={{fontSize: "2rem"}}/>
        </Box>

        <Typography
          sx={{
            fontWeight: 600,
            fontSize: { xs: "0.8rem", sm: "1rem" },
            color: "text.primary",
          }}
        >
          I am currently open to any new opportunities. You can contact me by
          connecting and sending a message on LinkedIn, sending me an email, or
          by filling out the contact form below!
        </Typography>
      </Box>

      <Card
        elevation={0}
        sx={{
          width: "100%",
          maxWidth: 1500,
          borderRadius: 1.5,
          px: { xs: 1.5, sm: 2.5 },
          py: { xs: 1.75, sm: 2.25 },
          backgroundColor: "#fffafa",
        }}
      >
        <Box
          component="form"
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />

          <Box sx={{ display: "grid", gap: 1.2 }}>
            <TextField
              placeholder="Full Name"
              name="name"
              value={form.name}
              onChange={onChange("name")}
              fullWidth
              size="small"
              sx={{ bgcolor: "#fff"}}
            />
            <TextField
              placeholder="Email Address"
              name="email"
              value={form.email}
              onChange={onChange("email")}
              fullWidth
              type="email"
              size="small"
              sx={{ bgcolor: "#fff"}}
            />
            <TextField
              placeholder="Subject"
              name="subject"
              value={form.subject}
              onChange={onChange("subject")}
              fullWidth
              size="small"
              sx={{ bgcolor: "#fff"}}
            />
            <TextField
              placeholder="Message"
              name="message"
              value={form.message}
              onChange={onChange("message")}
              fullWidth
              multiline
              minRows={6}
              size="small"
              sx={{ 
                bgcolor: "#fff",
                alignItems: "flex-start"
              }}
            />
            <Button
              type="submit"
              variant="contained"
              disabled={!canSubmit}
              sx={{
                height: 52,
                fontWeight: 800,
                fontSize: "1.05rem",
                borderRadius: 1,
                textTransform: "none",
              }}
              fullWidth
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}