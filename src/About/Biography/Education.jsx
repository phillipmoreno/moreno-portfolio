import { Box, Button, Card, Collapse, Divider, Grid, Typography } from "@mui/material";
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import DateRangeIcon from '@mui/icons-material/DateRange';
import fscLogo from '../../assets/experience/farmingdale_logo.png'
import nccLogo from '../../assets/experience/NCC.png'
import CircleIcon from '@mui/icons-material/Circle';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SailingIcon from '@mui/icons-material/Sailing';
import { useState } from "react";



export default function Education(){
  const [fscOpen, setFscOpen] = useState(false);
  const [nccOpen, setNccOpen] = useState(false);
  const bullet = { fontSize: "0.9rem", display: "flex", alignItems: "flex-start" };
  const dot = { fontSize: "0.3rem", mr: 1, mt: "6px" };



  return(
    <Card 
      sx={{
          p: 2, display: "flex", 
          flexDirection: "column", 
          backgroundColor: "#ecf0f9", 
          height: "100%", 
          overflowY: "auto",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
      }} 
      elevation={3}
      >
      <Typography sx={{textAlign: "center", fontSize: "1.2rem", letterSpacing: -0.5, fontWeight: 500 }}>Education</Typography>
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
      <Grid container alignItems="center" wrap="nowrap">
        <Grid
          item
          xs={4}
          component="img"
          src={fscLogo}
          sx={{ width: "100%", maxWidth: "70px", height: "auto" }} // logo sizing
        />
        <Grid
          item
          xs={8}
          display="flex"
          flexDirection="column"
          sx={{ ml: 3 }}
        >
          <Typography sx={{ fontWeight: 500 }}>Farmingdale State College</Typography>
          <Typography sx={{ fontWeight: 400, fontSize: "0.9rem"}}>Jan 2018 - May 2020</Typography>
          <Typography sx={{fontStyle: "italic", fontSize: "0.9rem"}}>Farmingdale, NY</Typography>
        </Grid>
      </Grid>
      <Box
        sx={{
          mt: 1,
          mb: 2
        }}
      >
        <Typography sx={{fontStyle: "italic", fontWeight: 500}}>B.S. in Computer Programming and Information Systems</Typography>
        <Typography>Institutional Honors: Magna Cum Laude</Typography>
        <Collapse in={fscOpen}>
          <Box sx={{ mt: 1, mb: 2 }}>
            <Typography sx={{fontWeight: 500}}>Notable Courses Completed:</Typography>
            <Typography sx={bullet}>
              <CircleIcon sx={dot} />Data Structures
            </Typography>
            <Typography sx={bullet}>
              <CircleIcon sx={dot} />Algorithms
            </Typography>
            <Typography sx={bullet}>
              <CircleIcon sx={dot} />Android Mobile Development
            </Typography>
            <Typography sx={bullet}>
              <CircleIcon sx={dot} />Programming in SQL
            </Typography>
            <Typography sx={bullet}>
              <CircleIcon sx={dot} />UNIX Operating Systems
            </Typography>
          </Box>
        </Collapse>
        <Button
          size="small"
          onClick={() => setFscOpen(!fscOpen)}
          endIcon={fscOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          sx={{ textTransform: "none", fontSize: "0.85rem" }}
        >
          {fscOpen ? "Show less" : "Show more"}
        </Button>
      </Box>
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
      <Grid container alignItems="center" wrap="nowrap">
        <Grid
          item
          xs={4}
          component="img"
          src={nccLogo}
          sx={{ width: "100%", maxWidth: "70px", height: "auto" }} // logo sizing
        />
        <Grid
          item
          xs={8}
          display="flex"
          flexDirection="column"
          sx={{ ml: 3 }}
        >
          <Typography sx={{ fontWeight: 500 }}>Nassau Community College</Typography>
          <Typography sx={{ fontWeight: 400, fontSize: "0.9rem"}}>Aug 2015 - Dec 2017</Typography>
          <Typography sx={{ fontStyle: "italic", fontSize: "0.9rem"}}>Garden City, NY</Typography>
        </Grid>
      </Grid>
      <Box
        sx={{
          mt: 1,
          mb: 3
        }}
      >
        <Typography sx={{fontStyle: "italic", fontWeight: 500}}>A.S. in Liberal Arts and Sciences</Typography>
        <Typography>Institutional Honors: Dean's List</Typography>
        <Collapse in={nccOpen}>
          <Box sx={{ mt: 1, mb: 2 }}>
            <Typography sx={{fontWeight: 500}}>Notable Courses Completed:</Typography>
            <Typography sx={bullet}>
              <CircleIcon sx={dot} />Computer Science 101
            </Typography>
            <Typography sx={bullet}>
              <CircleIcon sx={dot} />Calculus
            </Typography>
            <Typography sx={bullet}>
              <CircleIcon sx={dot} />Statistics
            </Typography>
            <Typography sx={bullet}>
              <CircleIcon sx={dot} />Sailing 101 <SailingIcon sx={{fontSize: "1.2rem"}}/>
            </Typography>
          </Box>
        </Collapse>
        <Button
          size="small"
          onClick={() => setNccOpen(!nccOpen)}
          endIcon={nccOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          sx={{ textTransform: "none", fontSize: "0.85rem" }}
        >
          {nccOpen ? "Show less" : "Show more"}
        </Button>
      </Box>
    </Card>
  )
}