import * as React from "react";
import { Box, Card, CardContent, Divider, Grid, Typography } from "@mui/material";
import androidLogo from "../../assets/icons/android_logo.png";
import firebaseLogo from "../../assets/icons/firebase_logo.png";
import ssmsLogo from "../../assets/icons/ssms_logo.png";
import adoLogo from "../../assets/icons/azure_logo.png";
import postgresLogo from "../../assets/icons/postgres_logo.png";
import gitLogo from "../../assets/icons/git_logo.png";

const tools = [
  { img: adoLogo, desc: "Azure DevOps" },
  { img: postgresLogo, desc: "PostgreSQL" },
  { img: gitLogo, desc: "Git" },
  { img: androidLogo, desc: "Android Studio" },
  { img: firebaseLogo, desc: "Firebase" },
  { img: ssmsLogo, desc: "SSMS" },
];

export default function Tools() {
  return (
    <Card
      elevation={4}
      sx={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        borderRadius: 3,
        backgroundColor: "#ecf0f9",
        border: "1px solid #d0d4e0",
      }}
    >
      <CardContent sx={{ pb: 4 }}>
        {/* Title */}
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: 600,
            mt: 1,
            fontSize: "1.2rem",
            letterSpacing: -0.5,
          }}
        >
          Tools
        </Typography>

        {/* Accent Line */}
        <Divider
          variant="middle"
          sx={{
            width: 140,
            height: 2,
            backgroundColor: "primary.main",
            borderRadius: 999,
            mx: "auto",
            mt: 1,
            mb: 4,
          }}
        />

        {/* Grid of Tools */}
        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="center"
        >
          {tools.map((item, i) => (
            <Grid
              item
              key={i}
              xs={6}   // 2 per row on mobile
              sm={4}   // 3 per row on small screens
              md={3}   // up to 4 per row on desktop, within card width
            >
              <SkillIcon {...item} />
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}

function SkillIcon({ img, desc }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: 1,
      }}
    >
      <Box
        component="img"
        src={img}
        alt={desc}
        sx={{
          width: { xs: 60, sm: 70, md: 100, lg: 120, xl: 140,},
          height: { xs: 60, sm: 70, md: 100, lg: 120, xl: 140,},
          objectFit: "contain",
          mb: 0.5,
          transition: "transform 0.15s ease-in-out",
          "&:hover": {
            transform: "scale(1.2)",
          },
        }}
      />
      <Typography sx={{ fontSize: "0.95rem", fontWeight: 500 }}>
        {desc}
      </Typography>
    </Box>
  );
}
