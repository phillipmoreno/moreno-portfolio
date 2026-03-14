import { Box, Button, Card, Collapse, Divider, Grid, Typography } from "@mui/material";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import rtgLogo from '../../assets/experience/rtg_logo.png'
import gmLogo from '../../assets/experience/general_motors.svg'
import tcsLogo from '../../assets/experience/tcs_logo.png'
import CircleIcon from '@mui/icons-material/Circle';
import { useState } from "react";



export default function Experience(){
  const [rtgOpen, setRtgOpen] = useState(false);
  const [gmOpen, setGmOpen] = useState(false);
  const [tcsOpen, setTcsOpen] = useState(false);

  
const bullet = { fontSize: "0.9rem", display: "flex", alignItems: "flex-start" };
const dot = { fontSize: "0.3rem", mr: 1, mt: "6px" };

  return(
    <Card 
      elevation={3}
      sx={{
        p: 2, 
        display: "flex", 
        flexDirection: "column", 
        backgroundColor: "#ecf0f9", 
        height: "100%"
        }} 
    >
      <Typography sx={{textAlign: "center", fontSize: "1.2rem", letterSpacing: -0.5, fontWeight: 500 }}>Experience</Typography>
      <Divider
        variant="middle"
        sx={{
          width: 120,
          height: 2,
          backgroundColor: "primary.main",
          borderRadius: 1,
          mx: "auto",
          mt: 1,
          mb: 2,
        }}
      />
      <Box
        sx={{
          flex: 1,              // ⬅️ take remaining height
          minHeight: 0,         // ⬅️ allow shrinking in flex layout
          overflowY: "auto",  
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <Grid container alignItems="center">
          <Grid
            item
            xs={4}
            component="img"
            src={rtgLogo}
            sx={{ width: "100%", maxWidth: "70px", height: "auto" }}
          />
          <Grid
            item
            xs={8}
            display="flex"
            flexDirection="column"
            sx={{ ml: 3 }}
          >
            <Typography sx={{ fontWeight: 500}}>Rooms To Go</Typography>
            <Typography sx={{ fontWeight: 400, fontSize: "0.9rem" }}>Jun 2025 - Present</Typography>
            <Typography fontStyle={"italic"} sx={{fontSize: "0.9rem"}}>Seffner, FL</Typography>
          </Grid>
        </Grid>
        <Collapse in={rtgOpen}>
          <Box sx={{ mt: 1, mb: 2 }}>
            <Typography sx={bullet}>
              <CircleIcon sx={dot} /> Developed and maintained full-stack web
              applications using React, Redux, MUI, and .NET 8.
            </Typography>
            <Typography sx={bullet}>
              <CircleIcon sx={dot} /> Optimized Redux state management and
              improved heavy data load times.
            </Typography>
            <Typography sx={bullet}>
              <CircleIcon sx={dot} /> Enhanced responsiveness across desktop,
              mobile, and tablet using MUI breakpoints.
            </Typography>
            <Typography sx={bullet}>
              <CircleIcon sx={dot} /> Designed print-optimized layouts for
              business-critical reporting.
            </Typography>
          </Box>
        </Collapse>
        <Button
          size="small"
          onClick={() => setRtgOpen(!rtgOpen)}
          endIcon={rtgOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          sx={{ textTransform: "none", fontSize: "0.85rem"}}
        >
          {rtgOpen ? "Show less" : "Show more"}
        </Button>
        <Divider
          variant="middle"
          sx={{
            width: "100%",
            height: 1.5,
            backgroundColor: "#ccc",
            borderRadius: 1,
            mx: "auto",
            mt: 2,
            mb: 2,
          }}
        />
        <Grid container alignItems="center">
          <Grid
            item
            xs={4}
            component="img"
            src={gmLogo}
            sx={{ width: "100%", maxWidth: "70px", height: "auto" }}
          />
          <Grid
            item
            xs={8}
            display="flex"
            flexDirection="column"
            sx={{ ml: 3 }}
          >
            <Typography sx={{ fontWeight: 500 }}>
              General Motors
            </Typography>
            <Typography sx={{ fontWeight: 400, fontSize: "0.9rem" }}>
              May 2022 - Jun 2025
            </Typography>
            <Typography sx={{fontStyle: "italic", fontSize: "0.9rem"}}>Austin, TX</Typography>
          </Grid>
        </Grid>
        <Collapse in={gmOpen}>
          <Box sx={{ mt: 1, mb: 2 }}>
            <Typography sx={bullet}>
              <CircleIcon sx={dot} /> Led onboarding and mentorship for new team
              members.
            </Typography>
            <Typography sx={bullet}>
              <CircleIcon sx={dot} /> Delivered features supporting prototype and
              production vehicle programs.
            </Typography>
            <Typography sx={bullet}>
              <CircleIcon sx={dot} /> Built and optimized Azure DevOps & GitHub
              Actions pipelines.
            </Typography>
            <Typography sx={bullet}>
              <CircleIcon sx={dot} /> Modernized Angular (7→15) and .NET (3.1→8).
            </Typography>
          </Box>
        </Collapse>

        <Button
          size="small"
          onClick={() => setGmOpen(!gmOpen)}
          endIcon={gmOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          sx={{ textTransform: "none", fontSize: "0.85rem" }}
        >
          {gmOpen ? "Show less" : "Show more"}
        </Button>
        <Divider
        variant="middle"
        sx={{
          width: "100%",
          height: 1.5,
          backgroundColor: "#ccc",
          borderRadius: 1,
          mx: "auto",
          mt: 2,
          mb: 2,
        }}
        />
        <Grid container alignItems="center">
          <Grid
            item
            xs={4}
            component="img"
            src={tcsLogo}
            sx={{ width: "100%", maxWidth: "70px", height: "auto" }}
          />
          <Grid
            item
            xs={8}
            display="flex"
            flexDirection="column"
            sx={{ ml: 3 }}
          >
            <Typography sx={{ fontWeight: 500 }}>
              theCoderSchool
            </Typography>
            <Typography sx={{ fontWeight: 400, fontSize: "0.9rem" }}>
              Mar 2021 - Jun 2021
            </Typography>
            <Typography sx={{fontStyle: "italic", fontSize: "0.9rem"}}>Syosset, NY</Typography>
          </Grid>
        </Grid>
        <Collapse in={tcsOpen}>
          <Box sx={{ mt: 1, mb: 2 }}>
            <Typography sx={bullet}>
              <CircleIcon sx={dot} />Tutored and mentored students in programming concepts through project-based lessons.
            </Typography>
            <Typography sx={bullet}>
              <CircleIcon sx={dot} />Assigned and reviewed homework assignments daily.
            </Typography>
            <Typography sx={bullet}>
              <CircleIcon sx={dot} />Programming languages taught include Java, JavaScript, Python, HTML, and CSS
            </Typography>
          </Box>
        </Collapse>

        <Button
          size="small"
          onClick={() => setTcsOpen(!tcsOpen)}
          endIcon={tcsOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          sx={{ textTransform: "none", fontSize: "0.85rem" }}
        >
          {tcsOpen ? "Show less" : "Show more"}
        </Button>
      </Box>
    </Card>
  )
}