import { Box, IconButton, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

export default function Footer() {
  const iconStyles = {
    color: "#fff",
    transition: "all 0.25s ease",
    "&:hover": {
      color: "#FFD700", // gold
      transform: "scale(1.15)",
    },
  };

  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        bgcolor: "primary.main",
        py: 1.5,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box sx={{ display: "flex", gap: 4, mb: 1 }}>
        <IconButton
          href="https://github.com/phillipmoreno"
          target="_blank"
          sx={iconStyles}
        >
          <GitHubIcon sx={{ fontSize: 50 }} />
        </IconButton>

        <IconButton
          href="https://www.linkedin.com/in/phillip-moreno-72b61b1aa/"
          target="_blank"
          sx={iconStyles}
        >
          <LinkedInIcon sx={{ fontSize: 50 }} />
        </IconButton>

        <IconButton
          href="mailto:phillipmoreno123@gmail.com"
          sx={iconStyles}
        >
          <EmailOutlinedIcon sx={{ fontSize: 50 }} />
        </IconButton>
      </Box>

      <Typography
        sx={{
          color: "#fff",
          fontSize: "0.9rem",
          fontWeight: 500,
        }}
      >
        Copyright © 2026 - Phillip Moreno
      </Typography>
    </Box>
  );
}