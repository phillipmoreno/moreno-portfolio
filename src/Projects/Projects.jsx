import useEmblaCarousel from "embla-carousel-react";
import { Box, Card, Divider, Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";

import calculatorIcon from "../assets/projects/calculator.png";
import fscDineIcon from "../assets/projects/fsc_dine_logo.png";
import cardsIcon from "../assets/projects/king_card.png";
import kodableIcon from "../assets/projects/kodable.png";

const projects = [
  {
    title: "FSC Dine",
    subtitle: "Android Mobile Application",
    icon: fscDineIcon,
    bullets: [
      "Description: Senior Project mobile application that emulates a food ordering application for the Farmingdale State College Food Court.",
      "Features: Based on user role, users can perform a variety of tasks such as: browse through a selection of food items on the menu, add items to their cart, checkout, add/edit menu items and food court restaurant information, accept orders, and more.",
      "Key Technologies Used: Firebase, Picasso API, RecyclerView, Fragments.",
    ],
  },
  {
    title: "Playing Cards 24",
    subtitle: "Java Desktop Application",
    icon: cardsIcon,
    bullets: [
      "Description: GUI desktop application math game. Each card has a number value ranging from 1–13. Four cards are randomly generated into the GUI and the objective of the user is to come up with a math equation that equals to the value of 24.",
      "Game features: Provide user with math solution, refresh and generate a new set of cards, verify math equation.",
      "Built using Java version 8, JavaFX and Scene Builder.",
    ],
  },
  {
    title: "Maze Game",
    subtitle: "Android Mobile Application",
    icon: kodableIcon,
    bullets: [
      "Description: Mobile application game that was based off Kodable. The objective of this game is to reach the end of a maze with drag and drop directional controls and reach a new high score.",
      "Game features: Multiple levels, character selection, difficulty selection, sound effects and soundtrack, user registration, score board.",
    ],
  },
  {
    title: "Calculator",
    subtitle: "Java Desktop Application",
    icon: calculatorIcon,
    bullets: [
      "Description: A simple GUI calculator application that allows the user to perform basic math operations such as addition, subtraction, division, and multiplication.",
      "Built using Java version 8, JavaFX and Scene Builder.",
    ],
  },
];

function BulletList({ items }) {
  return (
    <Box
      component="ul"
      sx={{
        m: 0,
        pl: 2.3,
        // helps long text wrap nicely without weird overflow behavior
        overflowWrap: "anywhere",
      }}
    >
      {items.map((t, i) => (
        <Box key={i} component="li" sx={{ mb: 1.2 }}>
          <Typography
            sx={{
              fontSize: { xs: "0.9rem", md: "0.95rem" },
              lineHeight: 1.5,
              overflowWrap: "anywhere",
              wordBreak: "break-word",
            }}
          >
            {t}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

export default function Projects() {
  // Keeping your embla setup (even though carousel is commented out)
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    dragFree: true,
  });

  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <Box
      sx={{
        px: { xs: 2, sm: 3, md: 6 },
        py: { xs: 4, md: 5 },
        minHeight: "100vh",
        backgroundColor: "#fffafa",
      }}
    >
      {/* Responsive grid: 1 col xs, 2 col sm, 4 col md+ */}
      <Box
        sx={{
          display: "grid",
          gap: 10,
          gridTemplateColumns: {
            xs: "1fr",
            md: "repeat(2, minmax(0, 1fr))",
            xl: "repeat(4, minmax(0, 1fr))", // ✅ each is 25%
          },
          alignItems: "stretch",
        }}
      >
        {projects.map((p) => (
          <Card
            key={p.title}
            elevation={3}
            sx={{
              height: "100%",
              minWidth: 0, // ✅ critical for long text
              borderRadius: 2,
              backgroundColor: "#ecf0f9",
              p: 2.5,
              transition: "transform 160ms ease, box-shadow 160ms ease",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                mb: 2,
              }}
            >
              <Box
                component="img"
                src={p.icon}
                alt={p.title}
                sx={{
                  width: 120,
                  borderRadius: 2,
                  objectFit: "cover",
                  mb: 1.5,
                }}
              />
              <Typography sx={{ fontWeight: 800, fontSize: "1.15rem" }}>
                {p.title}
              </Typography>

              <Divider
                variant="middle"
                sx={{
                  width: 120,
                  height: 2,
                  backgroundColor: "primary.main",
                  borderRadius: 1,
                  mx: "auto",
                  mt: 1,
                  mb: 1,
                }}
              />

              <Typography sx={{ fontWeight: 600, mt: 0.3 }}>
                {p.subtitle}
              </Typography>
            </Box>

            <BulletList items={p.bullets} />
          </Card>
        ))}
      </Box>

      {/* Your carousel can live here if you want it for xs only */}
    </Box>
  );
}