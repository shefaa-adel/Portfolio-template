import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Link from "@mui/material/Link";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
         
        >
          <Tab  sx={{fontSize:'1.1em'}} label="Main Skills" {...a11yProps(0)} />
          <Tab  sx={{fontSize:'1.1em'}} label="Awards" {...a11yProps(1)} />
          <Tab  sx={{fontSize:'1.1em'}} label="Experience" {...a11yProps(2)} />
          <Tab  sx={{fontSize:'1.1em'}} label="Education & Certification" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <List sx={{ p: "0px" }}>
          <ListItem href="#simple-list" sx={{ pl: "0px" }}>
            <ListItemText
              primary={
                <>
                  <Link sx={{ textDecoration: "none", cursor: "pointer" }}>
                    <Typography
                      color="gray"
                      sx={{ fontSize: "1.2em", fontWeight: "600" }}
                    >
                      User experience design
                      <Typography
                        variant="caption"
                        sx={{ fontSize: "inherit" }}
                      >
                        {" "}
                        - UI/UX
                      </Typography>
                    </Typography>
                  </Link>
                </>
              }
              secondary={
                <>
                  <Typography sx={{ fontSize: "1.2em" }} color="gray">
                    Delight the user and make it work.
                  </Typography>
                </>
              }
            />
          </ListItem>

          <ListItem href="#simple-list" sx={{ pl: "0px" }}>
            <ListItemText
              primary={
                <>
                  <Link sx={{ textDecoration: "none", cursor: "pointer" }}>
                    <Typography
                      color="gray"
                      sx={{ fontSize: "1.2em", fontWeight: "600" }}
                    >
                      Web and user interface design
                      <Typography
                        variant="caption"
                        sx={{ fontSize: "inherit" }}
                      >
                        {" "}
                        - Development
                      </Typography>
                    </Typography>
                  </Link>
                </>
              }
              secondary={
                <>
                  <Typography sx={{ fontSize: "1.2em" }} color="gray">
                    Websites, web experiences, ...
                  </Typography>
                </>
              }
            />
          </ListItem>

          <ListItem href="#simple-list" sx={{ pl: "0px" }}>
            <ListItemText
              primary={
                <>
                  <Link sx={{ textDecoration: "none", cursor: "pointer" }}>
                    <Typography
                      color="gray"
                      sx={{ fontSize: "1.2em", fontWeight: "600" }}
                    >
                      Interaction design
                      <Typography
                        variant="caption"
                        sx={{ fontSize: "inherit" }}
                      >
                        {" "}
                        - Animation
                      </Typography>
                    </Typography>
                  </Link>
                </>
              }
              secondary={
                <>
                  <Typography sx={{ fontSize: "1.2em" }} color="gray">
                    I like to move it move it.
                  </Typography>
                </>
              }
            />
          </ListItem>
          <ListItem></ListItem>
        </List>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <List sx={{ p: "0px" }}>
          <ListItem href="#simple-list" sx={{ pl: "0px" }}>
            <ListItemText
              primary={
                <>
                  <Link sx={{ textDecoration: "none", cursor: "pointer" }}>
                    <Typography
                      color="gray"
                      sx={{ fontSize: "1.2em", fontWeight: "600" }}
                    >
                      Awwwards.com
                      <Typography
                        variant="caption"
                        sx={{ fontSize: "inherit" }}
                      >
                        {" "}
                        - Winner
                      </Typography>
                    </Typography>
                  </Link>
                </>
              }
              secondary={
                <>
                  <Typography sx={{ fontSize: "1.2em" }} color="gray">
                    2019 - 2020
                  </Typography>
                </>
              }
            />
          </ListItem>

          <ListItem href="#simple-list" sx={{ pl: "0px" }}>
            <ListItemText
              primary={
                <>
                  <Link sx={{ textDecoration: "none", cursor: "pointer" }}>
                    <Typography
                      color="gray"
                      sx={{ fontSize: "1.2em", fontWeight: "600" }}
                    >
                      CSS Design Awards
                      <Typography
                        variant="caption"
                        sx={{ fontSize: "inherit" }}
                      >
                        {" "}
                        - Winner
                      </Typography>
                    </Typography>
                  </Link>
                </>
              }
              secondary={
                <>
                  <Typography sx={{ fontSize: "1.2em" }} color="gray">
                    2017 - 2018
                  </Typography>
                </>
              }
            />
          </ListItem>

          <ListItem href="#simple-list" sx={{ pl: "0px" }}>
            <ListItemText
              primary={
                <>
                  <Link sx={{ textDecoration: "none", cursor: "pointer" }}>
                    <Typography
                      color="gray"
                      sx={{ fontSize: "1.2em", fontWeight: "600" }}
                    >
                      Design nominees
                      <Typography
                        variant="caption"
                        sx={{ fontSize: "inherit" }}
                      >
                        {" "}
                        - site of the day
                      </Typography>
                    </Typography>
                  </Link>
                </>
              }
              secondary={
                <>
                  <Typography sx={{ fontSize: "1.2em" }} color="gray">
                    2013- 2014
                  </Typography>
                </>
              }
            />
          </ListItem>
          <ListItem></ListItem>
        </List>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <List sx={{ p: "0px" }}>
          <ListItem href="#simple-list" sx={{ pl: "0px" }}>
            <ListItemText
              primary={
                <>
                  <Link sx={{ textDecoration: "none", cursor: "pointer" }}>
                    <Typography
                      color="gray"
                      sx={{ fontSize: "1.2em", fontWeight: "600" }}
                    >
                      Sr. Front-end Engineer
                      <Typography
                        variant="caption"
                        sx={{ fontSize: "inherit" }}
                      >
                        {" "}
                        - Google
                      </Typography>
                    </Typography>
                  </Link>
                </>
              }
              secondary={
                <>
                  <Typography sx={{ fontSize: "1.2em" }} color="gray">
                    2018 - Current
                  </Typography>
                </>
              }
            />
          </ListItem>

          <ListItem href="#simple-list" sx={{ pl: "0px" }}>
            <ListItemText
              primary={
                <>
                  <Link sx={{ textDecoration: "none", cursor: "pointer" }}>
                    <Typography
                      color="gray"
                      sx={{ fontSize: "1.2em", fontWeight: "600" }}
                    >
                      Front-end Engineer
                      <Typography
                        variant="caption"
                        sx={{ fontSize: "inherit" }}
                      >
                        {" "}
                        - Microsoft
                      </Typography>
                    </Typography>
                  </Link>
                </>
              }
              secondary={
                <>
                  <Typography sx={{ fontSize: "1.2em" }} color="gray">
                    2017 - 2018
                  </Typography>
                </>
              }
            />
          </ListItem>

          <ListItem href="#simple-list" sx={{ pl: "0px" }}>
            <ListItemText
              primary={
                <>
                  <Link sx={{ textDecoration: "none", cursor: "pointer" }}>
                    <Typography
                      color="gray"
                      sx={{ fontSize: "1.2em", fontWeight: "600" }}
                    >
                      Software Engineer
                      <Typography
                        variant="caption"
                        sx={{ fontSize: "inherit" }}
                      >
                        {" "}
                        - Alibaba
                      </Typography>
                    </Typography>
                  </Link>
                </>
              }
              secondary={
                <>
                  <Typography sx={{ fontSize: "1.2em" }} color="gray">
                    2013- 2014
                  </Typography>
                </>
              }
            />
          </ListItem>
          <ListItem></ListItem>
        </List>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <List sx={{ p: "0px" }}>
          <ListItem href="#simple-list" sx={{ pl: "0px" }}>
            <ListItemText
              primary={
                <>
                  <Link sx={{ textDecoration: "none", cursor: "pointer" }}>
                    <Typography
                      color="gray"
                      sx={{ fontSize: "1.2em", fontWeight: "600" }}
                    >
                      BSc In CSE
                      <Typography
                        variant="caption"
                        sx={{ fontSize: "inherit" }}
                      >
                        {" "}
                        - ABC University, Los Angeles, CA
                      </Typography>
                    </Typography>
                  </Link>
                </>
              }
              secondary={
                <>
                  <Typography sx={{ fontSize: "1.2em" }} color="gray">
                    2010
                  </Typography>
                </>
              }
            />
          </ListItem>

          <ListItem href="#simple-list" sx={{ pl: "0px" }}>
            <ListItemText
              primary={
                <>
                  <Link sx={{ textDecoration: "none", cursor: "pointer" }}>
                    <Typography
                      color="gray"
                      sx={{ fontSize: "1.2em", fontWeight: "600" }}
                    >
                      BSc In CSE
                      <Typography
                        variant="caption"
                        sx={{ fontSize: "inherit" }}
                      >
                        {" "}
                        - ABC University, Los Angeles, CA
                      </Typography>
                    </Typography>
                  </Link>
                </>
              }
              secondary={
                <>
                  <Typography sx={{ fontSize: "1.2em" }} color="gray">
                    2010
                  </Typography>
                </>
              }
            />
          </ListItem>

          <ListItem href="#simple-list" sx={{ pl: "0px" }}>
            <ListItemText
              primary={
                <>
                  <Link sx={{ textDecoration: "none", cursor: "pointer" }}>
                    <Typography
                      color="gray"
                      sx={{ fontSize: "1.2em", fontWeight: "600" }}
                    >
                      BSc In CSE
                      <Typography
                        variant="caption"
                        sx={{ fontSize: "inherit" }}
                      >
                        {" "}
                        - ABC University, Los Angeles, CA
                      </Typography>
                    </Typography>
                  </Link>
                </>
              }
              secondary={
                <>
                  <Typography sx={{ fontSize: "1.2em" }} color="gray">
                    2010
                  </Typography>
                </>
              }
            />
          </ListItem>
          <ListItem></ListItem>
        </List>
      </TabPanel>
    </Box>
  );
}
