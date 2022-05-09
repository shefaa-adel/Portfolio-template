import React from "react";
import Box from "@mui/material/Box";
import personImg from "../assets/about-5.jpg";
import { Typography } from "@mui/material";
import TabsComponent from '../components/tabsComponent'

const AboutComponent = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap:'wrap',
          width: "97%",
          px: "20px",
          justifyContent: "space-between",
          position: "relative",
          minHeight: "620px",
        }}
      >
        <Box
          sx={{
           
            width: {lg:"38%",md:"38%",sm:"100%"},
            minHeight: "830px",
            position: "absolute",
            top: "-140px",
            borderRadius: "11px",
            backgroundImage: `url(${personImg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            display:{lg:'block',md:'block',sm:'none'}
          }}
        ></Box>
        <Box
          sx={{
            width: {lg:"55%",md:"55%",sm:"100%"},
            // backgroundColor: "blue",
            minHeight: "100%",
            position: "absolute",
            right: "20px",
            pt: "70px",
            pl: "60px",
          }}
        >
          <Typography
            variant="h1"
            sx={{ fontSize: "4.1em", fontWeight: "700" }}
          >
            About Me
          </Typography>
          <Typography sx={{fontSize:'1.2em',width:'90%',mt:'30px',mb:'50px'}} color="gray">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered in some form, by injected humour, or
            randomised words which dont look even slightly believable. If you
            are going to use a passage of Lorem Ipsum,
          </Typography>

          <TabsComponent/>
        </Box>
      </Box>
    </>
  );
};

export default AboutComponent;
