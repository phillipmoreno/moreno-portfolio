import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import codeLogo from './assets/favicon/android-chrome-512x512.png'


export default function Navbar({scrollToSection, homeRef, aboutRef, projectRef, contactRef}) {
  return (
    <AppBar position="static" color="primary" sx={{position: "fixed", zIndex: 1}}>
      <Toolbar sx={{display: "flex", flexDirection: ["column", "column", "row", "row"], justifyContent: "space-between", alignItems: "center"}}>
        <Box
          sx={{
            my: 1,
          }}
        >
          <Typography component="div" sx={{ flexGrow: 1, fontSize: ["1.4rem", "1.8rem", "1.8rem", "1.8rem"], fontWeight: "bold"}}>Phillip Moreno</Typography>
          <Box sx={{display: "flex", flexDirection: "row", justifyContent: ["center", "center", "flex-start", "flex-start"]}}>
            <Typography sx={{mr: 1}}>Software Engineer</Typography>
            <img src={codeLogo} className="logo react" alt="React logo" width={"20px"}/>
          </Box>
        </Box>
        <Box>
          <Button 
            color="inherit"
            onClick={() => scrollToSection(homeRef)}
            sx={{
            "&:hover": {
              color: "gold"
             }
            }}
          >
            <Typography sx={{fontWeight: "bold", fontSize: ["0.75rem", "1rem", "1rem", "1rem"]}}>Home</Typography>
          </Button>
          <Button
            color="inherit"
            onClick={() => scrollToSection(aboutRef)}
            sx={{
            "&:hover": {
              color: "gold"
             }
            }}
          >
            <Typography sx={{fontWeight: "bold", fontSize: ["0.75rem", "1rem", "1rem", "1rem"]}}>About</Typography>
          </Button>
          <Button 
            color="inherit"
            onClick={() => scrollToSection(projectRef)}
            sx={{
            "&:hover": {
              color: "gold"
              }
            }}
          >
            <Typography sx={{fontWeight: "bold", fontSize: ["0.75rem", "1rem", "1rem", "1rem"]}}>Projects</Typography>
          </Button>
          <Button 
            color="inherit"
            onClick={() => scrollToSection(contactRef)}
            sx={{
            "&:hover": {
              color: "gold"
              }
            }}
          >
            <Typography sx={{fontWeight: "bold", fontSize: ["0.75rem", "1rem", "1rem", "1rem"]}}>Contact</Typography>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}