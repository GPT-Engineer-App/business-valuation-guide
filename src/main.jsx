import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    50: "#e8f0fd",
    100: "#c0d4f9",
    200: "#98b9f5",
    300: "#709df1",
    400: "#4881ed",
    500: "#2066e9",
    600: "#1a52bc",
    700: "#143d8f",
    800: "#0e2962",
    900: "#081435",
  },
};

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
