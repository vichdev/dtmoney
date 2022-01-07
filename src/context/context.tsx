import React, { createContext, useContext, useEffect, useState } from "react";
import { IPropsTransactionInput, Transaction } from "../models/transaction";
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

  async function createTransaction(transactionInput: IPropsTransactionInput) {
    const response = await api.post("/transactions", {
      ...transactionInput,
      createdAt: new Date(),
    });
    const { transaction } = response.data;

    setTransactions([...transactions, transaction]);
  }

  const removeTransaction = (id: Transaction["id"]) => {
    setTransactions((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <TransactionContext.Provider
      value={{
        transactionModal,
        setTransactionModalOpen,
        transactions,
        createTransaction,
        removeTransaction,
      }}
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
