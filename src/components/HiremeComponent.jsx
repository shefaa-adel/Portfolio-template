import React from "react";
import persomImg from "../assets/about-6.jpg";
import { Typography, Box } from "@mui/material";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  TextField,
  Button,
} from "@mui/material";

const HiremeComponent = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        width: "97%",
        px: "20px",
        justifyContent: "space-between",
        mt: "100px",
        minHeight: "620px",
      }}
    >
      <Box
        sx={{
          width: { lg: "50%", md: "50%", sm: "100%" },
          // backgroundColor: "blue",
          minHeight: "100%",

          right: "20px",
          pt: "20px",
        }}
      >
        <Typography variant="h1" sx={{ fontSize: "4.1em", fontWeight: "700" }}>
          Hire Me
        </Typography>
        <Typography
          sx={{ fontSize: "1.2em", width: "90%", mt: "30px", mb: "10px" }}
          color="gray"
        >
          I am available for freelance work. Connect with me via phone:{" "}
          <Typography
            variant="caption"
            color="black"
            sx={{
              fontSize: "inherit",
              fontWeight: "500",
            }}
          >
            01923 088574
          </Typography>{" "}
          or email:{" "}
          <Typography
            variant="caption"
            color="black"
            sx={{
              fontSize: "inherit",
              fontWeight: "500",
            }}
          >
            admin@example.com
          </Typography>
        </Typography>

        <FormControl>
          {/* <InputLabel htmlFor="my-input">Email address</InputLabel> */}
          {/* <Input id="my-input" aria-describedby="my-helper-text" /> */}
          <TextField
            id="outlined-basic"
            required
            label="Your Name"
            variant="outlined"
            sx={{ width: "200%", mt: "20px" }}
          />
          <TextField
            id="outlined-basic"
            type="email"
            required
            label="Your Email"
            variant="outlined"
            sx={{ width: "200%", mt: "20px" }}
          />
          <TextField
            id="outlined-basic"
            label="Write a Subject"
            variant="outlined"
            sx={{ width: "200%", mt: "20px" }}
          />
          <TextField
            id="outlined-basic"
            multiline
            rows={4}
            label="Your Message"
            variant="outlined"
            sx={{ width: "200%", mt: "20px" }}
          />
          <Button
            variant="outlined"
            sx={{
              border: "2px solid transparent",
              color: "white",
              padding: "15px 10px",
              fontSize: "1em",
              fontWeight: "600",
              borderRadius: "8px",
              backgroundColor: "#F9004D",
              mb: "60px",
              mt: "10px",
              width: "75%",
              "&:hover": {
                color: "#F9004D",
                backgroundColor: "white",
                border: "2px solid #F9004D",
                boxShadow: "3",
              },
            }}
          >
            SUBMIT
          </Button>
        </FormControl>
      </Box>
      <Box
        sx={{
          width: { lg: "50%", md: "50%", sm: "100%" },

          minHeight: "100%",

          borderRadius: "11px",
          backgroundImage: `url(${persomImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "50%",
        }}
      ></Box>
    </Box>
  );
};

export default HiremeComponent;
