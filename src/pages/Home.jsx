import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Zoom from "@mui/material/Zoom";
import Cover from "../components/Cover";
import About from "../components/AboutComponent";
import Clients from "../components/ClientsComponent";
import Projects from "../components/ProjectsComponent";
import Hireme from "../components/HiremeComponent";
import Footer from "../components/Footer";

function ScrollTop(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

// ScrollTop.propTypes = {
//   children: PropTypes.element.isRequired,
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

export default function BackToTop(props) {
  return (
    <React.Fragment>
      <Box>
        <Toolbar
          id="back-to-top-anchor"
          style={{ height: "0px", position: "absolute" }}
        />
        <Cover />
        <About />
        <Clients />
        <Projects />
        <Hireme />
        <Footer />
      </Box>

      <ScrollTop {...props}>
        <Fab
          size="small"
          aria-label="scroll back to top"
          sx={{
            backgroundColor: "#F9004D",
            color: "white",
            "&:hover": { color: "#F9004D", backgroundColor: "white" },
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
