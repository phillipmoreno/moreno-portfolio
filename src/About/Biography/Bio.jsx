import { Card, Divider, Typography } from "@mui/material";

export default function Bio(){

  return(
    <Card 
      sx={{
        p: 2, 
        display: "flex", 
        flexDirection: "column", 
        alignContent: "center", 
        alignItems: "center", 
        backgroundColor: "#ecf0f9", 
        overflowY: "auto",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        height: "100%"
        }} 
        elevation={3}
    >
      <Typography sx={{textAlign: "center", fontSize: "1.2rem", letterSpacing: -0.5, fontWeight: 500 }}>About Me</Typography>
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
      <Typography sx={{px: 1}}>I am a 28-year-old Software Engineer from Long Island, New York that now resides in Tampa, Florida. <br/><br/>Whether it's creating a website from scratch or developing a mobile application, the fulfillment and joy I get from problem solving and programming is unmatched! <br/><br/>Throughout the years I have gained professional, academic, and personal experience in various different programming languages, frameworks, and databases across the stack.</Typography>
    </Card>
  )
}