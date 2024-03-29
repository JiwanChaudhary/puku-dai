import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import reportWebVitals from "./reportWebVitals";
import { MantineProvider, createTheme } from "@mantine/core";
import TodoContextProvider from "./context/TodoContext";

const theme = createTheme({
  /** Put your mantine theme override here */
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <TodoContextProvider>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </TodoContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
