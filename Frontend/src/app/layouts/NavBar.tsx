import { DarkMode, LightMode } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

type Props = {
    darkMode: boolean;
    handleThemeToggle: () => void;
}



const NavBar = ({darkMode, handleThemeToggle}: Props) => {
  return (
    <AppBar position="fixed" >
      <Toolbar>
        <Typography variant="h6">TEE-STORE</Typography>
        <IconButton onClick={handleThemeToggle}>
            {darkMode ? <DarkMode /> : <LightMode sx={{color: 'yellow'}} />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;
