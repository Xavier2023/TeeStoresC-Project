import { Box, Container, createTheme, ThemeProvider } from "@mui/material";
import NavBar from "./NavBar";
import { useState } from "react";
import { Outlet } from "react-router-dom";

function App() {
  

  const [darkMode, setDarkMode] = useState(false);
  const palletteType = darkMode ? "dark" : "light";

  const theme = createTheme({
    palette: {
      mode: palletteType,
      background: {
        default: palletteType === "light" ? "#eaeaea" : "#121212",
      },
    },
  });

  const handleThemeToggle = () => {
    setDarkMode((prev) => !prev);
  };

  


  return (
    <ThemeProvider theme={theme}>
      <NavBar darkMode={darkMode} handleThemeToggle={handleThemeToggle} />
      <Box
        sx={{
          minHeight: "100vh",
          background: darkMode
            ? "radial-gradient(circle, #1e3aBa, #111B27)"
            : "radial-gradient(circle, #baecf9, #f0f9ff)",
        }}
      >
        <Container maxWidth="xl" sx={{ padding: 14 }}>
          <Outlet />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
