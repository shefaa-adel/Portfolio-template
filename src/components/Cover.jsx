import Box from "@mui/material/Box";
import Navbar from "../components/Navbar";
import coverImg from "../assets/bg-image-16.jpg";
import Typography from "@mui/material/Typography";

const Cover = () => {
  return (
    <Box
      sx={{
        pt: "60px",
        width: "100%",
        minHeight: "800px",
        backgroundImage: `url(${coverImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "50%",
        
      }}
    >
      <Navbar />
      <Box sx={{width:'60%',mt:'130px',p:'20px'}}>
        <Typography sx={{ textTransform: "uppercase", letterSpacing: "3px",wordSpacing: "3px",fontSize:'1.1em' }}>
          Freelance Digital Designer
        </Typography>

        <Typography sx={{ mt:'30px',fontSize:{lg:'4.3em',md:'3.2em',sm:'3.2em'},fontWeight:'800', }} color='#1F1F25' >
          Hello, I'm <Typography color='#F9004D' variant="button" sx={{fontSize:'inherit',fontWeight:'inherit',}}>Nancy</Typography> welcome to my world.
        </Typography>
      </Box>
    </Box>
  );
};

export default Cover;
