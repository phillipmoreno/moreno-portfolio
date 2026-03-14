import { Box, Button, Typography } from "@mui/material";
import CodeIcon from '@mui/icons-material/Code';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import portrait from './assets/profile_picture.jpeg'
import { useEffect, useState } from "react";

const segments = [
  { text: "System", color: "primary.main", fontWeight: 500 },
  { text: ".", color: "#d7eef4", fontWeight: 500 },
  { text: "out", color: "primary.main", fontWeight: 600 },
  { text: ".", color: "#d7eef4", fontWeight: 500 },
  { text: "println", color: "primary.main", fontWeight: 500 },
  { text: "(", color: "#d7eef4", fontWeight: 500 },
  { text: `"Hello World! My Name is Phillip"`, color: "#62a831", fontWeight: 500 },
  { text: ");", color: "#d7eef4", fontWeight: 500 },
];


export default function Home({scrollToSection, aboutRef}){
  const [typedCount, setTypedCount] = useState(0);

  const totalChars = segments.reduce(
    (sum, seg) => sum + seg.text.length,
    0
  );

  useEffect(() => {
    if (typedCount >= totalChars) return;

    const timer = setTimeout(() => {
      setTypedCount((prev) => prev + 1);
    }, 45);

    return () => clearTimeout(timer);
  }, [typedCount, totalChars]);


  return(
    <Box sx={{ minHeight: "100vh", backgroundColor: " #c4c4cc", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
      <Box
        component="img"
        src={portrait}
        alt="portrait"
        sx={{
          width: {
            xs: "220px", // phones
            sm: "275px", // small tablets
            md: "300px", // laptops
            lg: "350px", // desktops
          },
          borderRadius: "100%",
          mb: 5,
          mt: [10, 12, 14, 16],
          boxShadow: 3,
          maxWidth: "100%", // prevents overflow
          height: "auto",   // keeps aspect ratio
        }}
      />
      <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {segments.reduce(
          (acc, seg, index) => {
            const { charsShownSoFar, elements } = acc;

            const start = charsShownSoFar;
            const end = charsShownSoFar + seg.text.length;

            const visibleChars = Math.max(
              0,
              Math.min(typedCount - start, seg.text.length)
            );

            const visibleText =
              visibleChars > 0 ? seg.text.slice(0, visibleChars) : "";

            if (visibleText) {
              elements.push(
                <Typography
                  key={index}
                  component="span"
                  sx={{
                    color: seg.color,
                    fontWeight: seg.fontWeight,
                    letterSpacing: -0.5,
                    fontSize: [
                      "0.85rem",
                      "1.25rem",
                      "1.75rem",
                      "2rem",
                    ],
                  }}
                >
                  {visibleText}
                </Typography>
              );
            }

            return {
              charsShownSoFar: end,
              elements,
            };
          },
           { charsShownSoFar: 0, elements: []} 
        ).elements}
        {typedCount < totalChars && (
          <Box
            component="span"
            sx={{
              width: "2px",
              height: ["0.85rem", "1.25rem", "1.75rem", "2rem"],
              bgcolor: "#d7eef4",
              ml: 0.3,
              animation: "blink 1s steps(1) infinite",
            }}
          />
        )}
      </Box>

      <Typography 
        sx={{
          color: "black", 
          letterSpacing: -0.5, 
          fontSize: ["0.8rem", "1.15rem", "1.25rem", "1.5rem"],
          fontWeight: 400,
        }}
      >
        ...and I have a passion for Full-Stack Development
        <CodeIcon 
          sx={{
            fontSize: ["0.9rem", "1.2rem", "1.4rem", "1.4rem"], 
            color: "gold", 
            ml: 1,
          }}
        />
      </Typography>
      <Typography 
        sx={{
          color: "black", 
          letterSpacing: -0.5, 
          fontSize: ["0.6rem", "1rem", "1.15rem", "1.25rem"],
          fontWeight: 400,
        }}
      >
        Tampa, FL
        <LocationPinIcon 
          sx={{
            fontSize: ["0.9rem", "1.2rem", "1.4rem", "1.4rem"],
            color: "red",
          }}
        />
      </Typography>
      <Button 
        variant="contained"
        sx={{
          fontWeight: "bold",
          fontSize: ["0.5rem", "0.8rem", "0.9rem", "1rem"],
          letterSpacing: -0.5,
          my: 3,
          p: 1.3,
          "&:hover": {
            color: "gold"
            }
        }}
        onClick={() => scrollToSection(aboutRef)}
      >
        Learn More About Me
      </Button>
    </Box>
  )
}