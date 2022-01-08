import React from "react";
import { useTransaction } from "../../context/context";
import * as Styles from "./styles";
import { FaTrashAlt } from "react-icons/fa";

const TransactionTable: React.FC = () => {
  const { transactions, removeTransaction } = useTransaction();

  return (
    <Styles.Container>
      <Styles.TransactionTable>
        <Styles.TitleWrapper>
          <Styles.TableContainer>
            <Styles.TableTitle>Titulo</Styles.TableTitle>
            <Styles.TableTitle>Valor</Styles.TableTitle>
            <Styles.TableTitle>Categoria</Styles.TableTitle>
            <Styles.TableTitle>Data</Styles.TableTitle>
          </Styles.TableContainer>
        </Styles.TitleWrapper>
        <Styles.TableWrapper>
          {transactions.map((transaction) => (
            <Styles.TableContainer key={transaction.id}>
              <Styles.TableContent>{transaction.title}</Styles.TableContent>
              {transaction.type === "deposit" ? (
                <Styles.TableContent color={"#33CC95"}>
                  {new Intl.NumberFormat("pr-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(transaction.amount as number)}
                </Styles.TableContent>
              ) : (
                <Styles.TableContent color={"#E52E4D"}>
                  -
                  {new Intl.NumberFormat("pr-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(transaction.amount as number)}
                </Styles.TableContent>
              )}
              <Styles.TableContent>{transaction.category}</Styles.TableContent>
              <Styles.TableContent>
                {new Intl.DateTimeFormat("pr-BR").format(
                  new Date(transaction.createdAt as string)
                )}
              </Styles.TableContent>
              <Styles.TableContent>
                <FaTrashAlt
                  onClick={() => removeTransaction(transaction.id!)}
                />
              </Styles.TableContent>
            </Styles.TableContainer>
          ))}
        </Styles.TableWrapper>
      </Styles.TransactionTable>
    </Styles.Container>
  );
};

export default TransactionTable;
