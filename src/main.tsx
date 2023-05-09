import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "react-query";

import { client } from "~lib/react-query";

import App from "./App";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
