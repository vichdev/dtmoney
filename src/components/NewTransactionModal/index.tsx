import React, { FormEvent, useState } from "react";
import { useTransaction } from "../../context/context";
import * as Styles from "./styles";
import { IPropsModal } from "./types";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { api } from "../../services/api";

const NewTransactionModal: React.FC<IPropsModal> = () => {
  const [title, setTitle] = useState<string>();
  const [value, setValue] = useState<number>();
  const [category, setCategory] = useState<string>();
  const { transactionModal, setTransactionModalOpen } = useTransaction();
  const [type, setType] = useState<string>();

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();
    const data = { category, value, title, type };

    api.post("/transactions", data);
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
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
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
