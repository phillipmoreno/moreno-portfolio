import useEmblaCarousel from "embla-carousel-react";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import Languages from "./Skills/Languages";
import Frameworks from "./Skills/Frameworks";
import Tools from "./Skills/Tools";
import Bio from "./Biography/Bio";
import Experience from "./Biography/Experience";
import Education from "./Biography/Education";
import { useCallback } from "react";

export default function About() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (embla) embla.scrollPrev();
  }, [embla]);

  const scrollNext = useCallback(() => {
    if (embla) embla.scrollNext();
  }, [embla]);

  return (
    <Box
      sx={{
        // On desktop we want it locked to viewport height.
        // On mobile we allow it to grow because each slide is 100vh.
        backgroundColor: "#fffafa",
        px: { xs: 2, sm: 3, md: 5 },
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh"
      }}
    >
      {/* TOP ROW – biography cards */}
      <Grid
        container
        direction="row"
        columns={12}
        columnSpacing={[2, 4, 8, 10]}
        rowSpacing={{ xs: 3 }}
        justifyContent="center"
        sx={{
          pt: { xs: 6, md: 10 },
          pb: { xs: 4, md: 5 },
          flex: { xs: "unset"},
        }}
      >
        <Grid size={{xs: 12, lg: 4}} sx={{ height: {xs: "100%", lg: "500px"}, minHeight: 0 }}>
          <Bio />
        </Grid>
        <Grid size={{xs: 12, lg: 4}} sx={{ height: {xs: "100%", lg: "500px"}, minHeight: 0 }}>
          <Experience />
        </Grid>
        <Grid size={{xs: 12, lg: 4}} sx={{ height: {xs: "100%", lg: "500px"}, minHeight: 0 }}>
          <Education />
        </Grid>
      </Grid>

      {/* BOTTOM – skills row for md+ (3 cards side-by-side) */}
      <Grid
        container
        direction="row"
        columnSpacing={[2, 4, 8, 10]}
        justifyContent="center"
        sx={{
          pt: { xs: 0, md: 4 },
          pb: { xs: 4, md: 10 },
          minHeight: 0,
          display: {xs: "none", lg: "flex"},
          flex: { xs: "unset", xl: "1 1 45%" },
        }}
      >
        <Grid size={4} sx={{ height: "100%", minHeight: 0 }}>
          <Languages />
        </Grid>
        <Grid size={4} sx={{ height: "100%", minHeight: 0 }}>
          <Frameworks />
        </Grid>
        <Grid size={4} sx={{ height: "100%", minHeight: 0 }}>
          <Tools />
        </Grid>
      </Grid>

      {/* MOBILE VIEW – full-screen Embla carousel (one card per screen) */}
      <Box
        ref={emblaRef}
        sx={{
          display: { md: "flex", lg: "none" },
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            display: "flex",
            height: "100%",
          }}
        >
          {/* Slide 1 – Programming Languages */}
          <Box
            sx={{
              flex: "0 0 100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              pb: 4,
              px: 2,
            }}
          >
            <Box
              sx={{
                flex: 1,
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Languages />
            </Box>
          </Box>

          {/* Slide 2 – Frameworks and Libraries */}
          <Box
            sx={{
              flex: "0 0 100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              pb: 4,
              px: 2,
            }}
          >
            <Box
              sx={{
                flex: 1,
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Frameworks />
            </Box>
          </Box>

          {/* Slide 3 – Tools */}
          <Box
            sx={{
              flex: "0 0 100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              pb: 4,
              px: 2,
            }}
          >
            <Box
              sx={{
                flex: 1,
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Tools />
            </Box>
          </Box>
        </Box>

        {/* Arrow controls */}
        <Box
          sx={{
            position: "absolute",
            bottom: 100,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "space-between",
            px: 3,
          }}
        >
          <IconButton onClick={scrollPrev} size="small">
            <ArrowBackIosNewIcon fontSize="small" />
          </IconButton>
          <IconButton onClick={scrollNext} size="small">
            <ArrowForwardIosIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
