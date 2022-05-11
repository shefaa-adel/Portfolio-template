import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import brand1 from "../assets/brand-01.png";
import brand2 from "../assets/brand-02.png";
import brand3 from "../assets/brand-03.png";
import brand4 from "../assets/brand-04.png";
import brand5 from "../assets/brand-05.png";
import brand6 from "../assets/brand-06.png";

const brands = [brand1, brand2, brand3, brand4, brand5, brand6];

const clientsComponent = () => {
  return (
    <>
      <Box sx={{ textAlign: "center", width: "97%", px: "20px", mt: "180px" }}>
        <Typography variant="h1" sx={{ fontSize: "4.1em", fontWeight: "700" }}>
          My Best Clients
        </Typography>

        <Typography
          sx={{
            fontSize: "1.2em",
            width: "60%",
            mt: "30px",
            mb: "50px",
            margin: "20px auto",
          }}
          color="gray"
        >
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
        </Typography>

        <Box sx={{ display: "flex", flexWrap: "wrap",justifyContent:'center',width:'98%',margin:'auto' }}>
          {brands.map((brand) => (
            <Box
              sx={{
                
                width: {lg:"33.2%",md:"49%",sm:"99%",xs:'99%'},
                height: "200px",
                border: ".25px solid #E8ECEF",
                textAlign: "center",
                lineHeight: "290px",
                position: "relative",
              }}
            >
              <Box
                component="img"
                src={brand}
                sx={{
                  width: "35%",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              ></Box>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default clientsComponent;
