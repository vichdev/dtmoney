export interface Transaction {
  transactionModal?: boolean;
  setTransactionModalOpen: (transaction: boolean) => void;
  id?: number;
  title?: string;
  amount?: number;
  type?: string;
  category?: string;
  createdAt?: string;
  transactions: Transaction[];
}
