import React from "react";
import * as Styles from "./styles";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { useTransaction } from "../../context/context";

const Summary: React.FC = () => {
  const { transactions } = useTransaction();

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type == "deposit") {
        acc.deposits += transaction.amount as number;
        acc.total += transaction.amount as number;
      } else {
        acc.withdraws += transaction.amount as number;
        acc.total -= transaction.amount as number;
      }
      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );

  return (
    <Styles.Containter>
      <Styles.SummaryWrapper>
        <Styles.SummaryHeader>
          <Styles.SummaryTitle>Entradas</Styles.SummaryTitle>
          <Styles.SummaryIcon src={incomeImg} />
        </Styles.SummaryHeader>
        <Styles.Value>
          {new Intl.NumberFormat("pr-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.deposits)}
        </Styles.Value>
      </Styles.SummaryWrapper>
      <Styles.SummaryWrapper>
        <Styles.SummaryHeader>
          <Styles.SummaryTitle>Saídas</Styles.SummaryTitle>
          <Styles.SummaryIcon src={outcomeImg} />
        </Styles.SummaryHeader>
        <Styles.Value>
          -
          {new Intl.NumberFormat("pr-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.withdraws)}
        </Styles.Value>
      </Styles.SummaryWrapper>

      {summary.total >= 0 ? (
        <Styles.SummaryWrapper color={"#33CC95"} textcolor={"#FFFFFF"}>
          <Styles.SummaryHeader>
            <Styles.SummaryTitle>Total</Styles.SummaryTitle>
            <Styles.SummaryIcon src={totalImg} />
          </Styles.SummaryHeader>
          <Styles.Value>
            {new Intl.NumberFormat("pr-BR", {
              style: "currency",
              currency: "BRL",
            }).format(summary.total)}
          </Styles.Value>
        </Styles.SummaryWrapper>
      ) : (
        <Styles.SummaryWrapper color={"#E52E4D"} textcolor={"#FFFFFF"}>
          <Styles.SummaryHeader>
            <Styles.SummaryTitle>Total</Styles.SummaryTitle>
            <Styles.SummaryIcon src={totalImg} />
          </Styles.SummaryHeader>
          <Styles.Value>
            {new Intl.NumberFormat("pr-BR", {
              style: "currency",
              currency: "BRL",
            }).format(summary.total)}
          </Styles.Value>
        </Styles.SummaryWrapper>
      )}
    </Styles.Containter>
  );
};

export default Summary;
