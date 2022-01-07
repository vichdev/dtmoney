import React from "react";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import NewTransactionModal from "./components/NewTransactionModal";
import { Context } from "./context/context";
import { GlobalStyle } from "./styles/globalStyles";

const App: React.FC = () => {
  return (
    <Context>
      <GlobalStyle />
      <Header />
      <Dashboard />
      <NewTransactionModal />
    </Context>
  );
};

export default App;
