import * as React from "react";
import { Box, Card, CardContent, Divider, Grid, Typography } from "@mui/material";
import reactLogo from "../../assets/icons/react_logo.png";
import angularLogo from "../../assets/icons/angular_logo.png";
import dotnetLogo from "../../assets/icons/net_framework_logo.png";
import materialLogo from "../../assets/icons/material_logo.png";
import bootstrapLogo from "../../assets/icons/bootstrap_logo.png";
import javafxLogo from "../../assets/icons/Scene_Builder_logo.png";

const frameworks = [
  { img: reactLogo, desc: "React" },
  { img: angularLogo, desc: "Angular" },
  { img: dotnetLogo, desc: ".NET" },
  { img: materialLogo, desc: "Material UI" },
  { img: bootstrapLogo, desc: "Bootstrap" },
  { img: javafxLogo, desc: "Scene Builder" },
];

export default function Frameworks() {
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
          Frameworks & Libraries
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

        {/* Grid of Frameworks */}
        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="center"
        >
          {frameworks.map((item, i) => (
          <Grid
            item
            key={i}
            xs={6}   // 2 per row on mobile
            sm={4}   // 3 per row on small screens
            md={3}   // 4 per row on desktop
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


