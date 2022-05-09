import React from "react";
import { Typography, Box } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import logo from "../assets/logo.png";

const socialMedia = [
  <FacebookOutlinedIcon />,
  <TwitterIcon />,
  <LinkedInIcon />,
  <InstagramIcon />,
];

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        backgroundColor: "#1E1F25",
        minHeight: "150px",
        mt: "70px",
        pt: {lg:"0",md:'40px',sm:'40px',xs:'40px'},
      }}
    >
      <Box
        sx={{
          width: { lg: "30%", md: "100%", sm: "100%", xs: "100%" },
          textAlign: "center",
          lineHeight:{lg: "150px"},
          minHeight: "100%",
          position: "relative",
        }}
      >
        <Box
          component="img"
          src={logo}
          sx={{
            width: {lg:"50%",md:'30%'},
            position: {lg:"absolute"},
            top: {lg:"50%"},
            left:{ lg:"50%"},
            transform: {lg:"translate(-50%, -50%)"},
          }}
        ></Box>
      </Box>
      <Box
        sx={{
          width: { lg: "30%", md: "100%", sm: "100%", xs: "100%" },
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          pt: {lg:"45px",md:'10px',sm:'10px',xs:'10px'},
          minHeight:'100%'
        }}
      >
        {socialMedia.map((icon) => (
          <Box
            sx={{
              width: "50px",
              height: "50px",
              color: "lightGray",
              borderRadius: "50%",
              border: "2px solid lightGray",
              lineHeight:'60px',
              fontSize: "1.1em",
              ml:'20px'
            }}
          >
            {icon}
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          width: { lg: "30%", md: "100%", sm: "100%", xs: "100%" },
          textAlign: "center",
          lineHeight: "150px",
          minHeight: "100%",
          position: "relative",
          pt: {lg:"0",md:'50px',sm:'50px',xs:'50px'},
          
        }}
      >
          <Typography color='lightgray' sx={{fontSize:'1em', position: "absolute",
            top: "50%",
            
            transform: "translateY(-50%)",width:'100%'}}>
          Copyright © 2021 Rainbow-Themes. All Rights Reserved.
          </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
