import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import logo from "../assets/logo-symbol-dark.png";
import { red } from "@mui/material/colors";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const theme = createTheme({
  typography: {
    pallete: {
      grey: red,
    },
  },
});
const pages = ["Home", "Service", "About", "Pages", "Blocks", "Contact"];
const icons = [
  <FacebookOutlinedIcon />,
  <TwitterIcon />,
  <LinkedInIcon />,
  <InstagramIcon />,
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "transparent",
        border: "none",
        boxShadow: "0",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component="img"
            sx={{
              height: "60px",
              width: "60px",
              maxHeight: { xs: 233, md: 167 },
              maxWidth: { xs: 350, md: 250 },
              marginRight: 10,
              marginLeft: 5,
            }}
            alt="logo"
            src={logo}
          />
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" color="black">
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
            {/* hhh */}

            <Box sx={{ flexDirection: "row", display: "flex" }} ml="30px">
              {icons.map((icon) => (
                <IconButton
                  key={icon}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    mx: 1,
                    color: "black",
                    display: "block",
                    fontSize: "1em",
                    "&:hover": { color:'#F9004D'},
                  }}
                >
                  {icon}
                </IconButton>
              ))}
            </Box>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  fontWeight:'600',
                  display: "block",
                  color: "black",
                  fontSize: ".9em",
                  ml:'10px',
                  "&:hover": { color: "#F9004D",},
                }}
              >
                {page}
              </Button>
            ))}
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                
              }}
              ml="90px"
            >
              {icons.map((icon) => (
                <IconButton
                  key={icon}
                  onClick={handleCloseNavMenu}
                  sx={{
                    mx: 1,
                    color: "white",
                    display: "block",
                    fontSize: "1.2em",
                    "&:hover": { color:'#F9004D',mb:'5px'},
                  }}
                >
                  {icon}
                </IconButton>
              ))}
            </Box>
          </Box>

          <Button
            variant="outlined"
            color="info"
            size="large"
            style={{
              border: "2.5px solid gray",
              color: "black",
              padding: "10px 30px",
              fontWeight: "360",
              borderRadius: "8px",
              "&:hover": { border:'2.5px solid transparent',color:'white'},
            }}
            sx={{
              display: { xs: "none", sm: "none", md: "block" },
              "&:hover": { backgroundColor: "#F9004D",border:'2.5px solid #F9004D',color:'white'},
            }}
          >
            Buy Now
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
