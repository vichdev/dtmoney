import React from "react";
import * as Styles from "./styles";
import logo from "../../assets/logo.svg";
import { useTransaction } from "../../context/context";

const Header: React.FC = () => {
  const { transactionModal, setTransactionModalOpen } = useTransaction();

  return (
    <Styles.HeaderWrapper>
      <Styles.Header>
        <Styles.LogoImg src={logo} />
        <Styles.HeaderButton
          onClick={() => setTransactionModalOpen(!transactionModal)}
        >
          Nova transação
        </Styles.HeaderButton>
      </Styles.Header>
    </Styles.HeaderWrapper>
  );
};

export default Header;
