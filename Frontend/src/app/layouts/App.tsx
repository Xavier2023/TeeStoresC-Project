import { useEffect, useState } from "react";
import type { Product } from "../models/product";
import Catalog from "../../features/catalog/Catalog";
import { Box, Container, createTheme, ThemeProvider } from "@mui/material";
import NavBar from "./NavBar";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

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

  useEffect(() => {
    fetch("https://localhost:5001/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  console.log(products);

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
          <Catalog products={products} />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
