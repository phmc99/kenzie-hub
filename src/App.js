import React from "react";
import { Toaster } from "react-hot-toast";
import Routes from "./routes/Routes";

import { GlobalStyle } from "./styles/global";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Toaster />

      <Routes />
    </>
  );
};

export default App;
