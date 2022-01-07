import React, { FormEvent, useState } from "react";
import { useTransaction } from "../../context/context";
import * as Styles from "./styles";
import { IPropsModal } from "./types";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";

const NewTransactionModal: React.FC<IPropsModal> = () => {
  const [title, setTitle] = useState<string>();
  const [amount, setAmount] = useState<number>();
  const [category, setCategory] = useState<string>();
  const { transactionModal, setTransactionModalOpen, createTransaction } =
    useTransaction();
  const [type, setType] = useState<string>();

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      type,
      category,
    });
    setTitle("");
    setAmount(0);
    setCategory("");
    setType("deposit");

    setTransactionModalOpen(!transactionModal);
  }

  return (
    <Styles.ModalWrapper isOpen={transactionModal}>
      <Styles.Modal onSubmit={handleCreateNewTransaction}>
        <Styles.CloseModal
          src={closeImg}
          alt="Fechar Modal"
          onClick={() => setTransactionModalOpen(!transactionModal)}
        />
        <Styles.ModalTitle>Nova Transação</Styles.ModalTitle>
        <Styles.ModalInputs
          type="text"
          placeholder="Titulo"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <Styles.ModalInputs
          type="text"
          placeholder="R$00,00"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />
        <Styles.ButtonTypeWrapper>
          <Styles.TransactionButton
            type="button"
            onClick={() => {
              setType("deposit");
            }}
            isActive={type == "deposit"}
            activeColor="green"
          >
            <span>Entrada</span>
            <img src={incomeImg} />
          </Styles.TransactionButton>
          <Styles.TransactionButton
            type="button"
            onClick={() => {
              setType("withdraw");
            }}
            isActive={type == "withdraw"}
            activeColor="red"
          >
            <span>Saída</span>
            <img src={outcomeImg} />
          </Styles.TransactionButton>
        </Styles.ButtonTypeWrapper>
        <Styles.ModalInputs
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
        <Styles.ButtonSubmit type="submit">Cadastrar</Styles.ButtonSubmit>
      </Styles.Modal>
    </Styles.ModalWrapper>
  );
};

export default NewTransactionModal;
