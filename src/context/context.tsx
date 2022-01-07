import React, { createContext, useContext, useEffect, useState } from "react";
import { Transaction } from "../models/transaction";
import { api } from "../services/api";

const TransactionContext = createContext<Transaction>({} as Transaction);

const Context: React.FC = ({ children }) => {
  const [transactionModal, setTransactionModalOpen] = useState<boolean>(false);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get("transactions")
      .then((response) => setTransactions(response.data["transactions"]));
  }, []);

  return (
    <TransactionContext.Provider
      value={{ transactionModal, setTransactionModalOpen, transactions }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

function useTransaction() {
  const context = useContext(TransactionContext);

  if (!context) {
    throw new Error("O hook useTransaction deve ser usado como provider! ");
  }
  return context;
}

export { Context, useTransaction };
