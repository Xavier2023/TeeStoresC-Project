import { DarkMode, LightMode, ShoppingCart } from "@mui/icons-material";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";

const midLinks = [
  { title: "catalog", path: "/catalog" },
  { title: "about", path: "/about" },
  { title: "contact", path: "/contact" },
];

const rightLinks = [
  { title: "register", path: "/register" },
  { title: "login", path: "/login" },
];

const navStyles = {
  color: "inherit",
  typography: "h6",
  textDecoration: "none",
  "&:hover": {
    color: "grey.500",
  },
  "&.active": {
    color: "#baecf9",
  },
};

type Props = {
  darkMode: boolean;
  handleThemeToggle: () => void;
};

const NavBar = ({ darkMode, handleThemeToggle }: Props) => {
  return (
    <AppBar position="fixed">
      <Toolbar sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <Box sx={{display: 'flex', alignItems: 'center', gap: 1,}}>
          <Typography
            component={NavLink}
            to="/"
            sx={{ textDecoration: "none" }}
            variant="h6"
          >
            TEE-STORE
          </Typography>
          <IconButton onClick={handleThemeToggle}>
            {darkMode ? <DarkMode /> : <LightMode sx={{ color: "yellow" }} />}
          </IconButton>
        </Box>
        <List sx={{ display: "flex" }}>
          {midLinks.map(({ title, path }) => (
            <ListItem component={NavLink} to={path} key={path} sx={navStyles}>
              {title.toLocaleUpperCase()}
            </ListItem>
          ))}
        </List>
        <Box sx={{display: 'flex', alignItems: 'center'}}>
          <IconButton size="large" sx={{ color: "inherit" }}>
            <Badge badgeContent="4" color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>

          <List sx={{ display: "flex" }}>
            {rightLinks.map(({ title, path }) => (
              <ListItem component={NavLink} to={path} key={path} sx={navStyles}>
                {title.toLocaleUpperCase()}
              </ListItem>
            ))}
          </List>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;
