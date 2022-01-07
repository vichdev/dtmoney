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
  createTransaction: (transaction: IPropsTransactionInput) => Promise<void>;
  removeTransaction: (id: Transaction["id"]) => void;
}

export type IPropsTransactionInput = Pick<
  Transaction,
  "title" | "amount" | "type" | "category"
>;
