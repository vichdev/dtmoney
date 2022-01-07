import React from "react";
import * as Styles from "./styles";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";

const Summary: React.FC = () => {
  return (
    <Styles.Containter>
      <Styles.SummaryWrapper>
        <Styles.SummaryHeader>
          <Styles.SummaryTitle>Entradas</Styles.SummaryTitle>
          <Styles.SummaryIcon src={incomeImg} />
        </Styles.SummaryHeader>
        <Styles.Value>R$1000,00</Styles.Value>
      </Styles.SummaryWrapper>
      <Styles.SummaryWrapper>
        <Styles.SummaryHeader>
          <Styles.SummaryTitle>Saídas</Styles.SummaryTitle>
          <Styles.SummaryIcon src={outcomeImg} />
        </Styles.SummaryHeader>
        <Styles.Value>-R$500,00</Styles.Value>
      </Styles.SummaryWrapper>
      <Styles.SummaryWrapper color={"#33CC95"} textcolor={"#FFFFFF"}>
        <Styles.SummaryHeader>
          <Styles.SummaryTitle>Total</Styles.SummaryTitle>
          <Styles.SummaryIcon src={totalImg} />
        </Styles.SummaryHeader>
        <Styles.Value>R$500,00</Styles.Value>
      </Styles.SummaryWrapper>
    </Styles.Containter>
  );
};

export default Summary;
