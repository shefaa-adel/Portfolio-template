import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import project1 from "../assets/portfolio-1.jpg";
import project2 from "../assets/portfolio-2.jpg";
import project3 from "../assets/portfolio-3.jpg";
import project4 from "../assets/portfolio-4.jpg";

const projects = [project1, project3, project2, project4, project1, project4];

const ProjectsComponent = () => {
  return (
    <Box sx={{ textAlign: "center", width: "95%", px: "20px", mt: "130px", mr:'auto',ml:'auto' }}>
      <Typography variant="h1" sx={{ fontSize: "4.1em", fontWeight: "700" }}>
        My Latest Projects
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
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration.
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: {lg:"space-between",md:'space-around',sm:'center',xs:'center'},
          width: "100%",
          
          margin:'auto'
        }}
      >
        {projects.map((project) => (
          <Box
            sx={{
              width: { lg: "31%", md: "45%", sm: "90%" },
              minHeight: "600px",
              borderRadius: "20px",
              mt: "25px",
              position: "relative",
            }}
          >
            <Box
              component="img"
              src={project}
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "20px",
              }}
            ></Box>
            <Box
              component="div"
              sx={{
                width: "100%",
                height: "100%",
                position: "absolute",
                backgroundColor: "rgba(117,117,117,.4)",
                zIndex: "1",
                top: "0",
                borderRadius: "20px",
                textAlign: "center",
                "&:hover": {
                    background: 'linear-gradient(0deg, rgba(10,9,9,.4) 0%, rgba(249,0,77,.7) 100%)',
                  },
              }}
            >
              <Typography
                sx={{ fontSize: "1.1em", mt: "77%", mb: "30px" }}
                color="#e0e0e0"
              >
                Development
              </Typography>
              <Typography
                sx={{
                  fontSize: "1.7em",
                  fontWeight: "600",
                  width: "80%",
                  margin: "auto",
                }}
                color="white"
              >
                Getting tickets to the big show
              </Typography>
              <Button
                variant="outlined"
                sx={{
                  mt: "30px",
                  border: "2.5px solid lightgray",
                  color: "white",
                  padding: "10px 27px",
                  fontWeight: "360",
                  borderRadius: "8px",
                  "&:hover": {
                    backgroundColor: '#F9004D',border:"2.5px solid transparent"
                  },
                }}
              >
                VIEW DETAILS
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
      <Button
        variant="outlined"
        sx={{
          color: "white",
          padding: "13px 40px",
          fontSize: "1.5em",
          fontWeight: "600",
          borderRadius: "8px",
          backgroundColor: "#F9004D",
          mb: "60px",
          mt: "60px",
          border: "2px solid transparent",
          "&:hover": {
            color: "#F9004D",
            backgroundColor: "white",
            border: "2px solid #F9004D",
            boxShadow: "3",
          },
        }}
      >
        VIEW MORE
      </Button>
    </Box>
  );
};

export default ProjectsComponent;
