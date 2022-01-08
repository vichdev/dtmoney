import React from "react";
import * as Styles from "./styles";
import logo from "../../assets/logo.svg";
import { useTransaction } from "../../context/context";
import { IoIosMenu } from "react-icons/io";

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
        <IoIosMenu onClick={() => setTransactionModalOpen(!transactionModal)} />
      </Styles.Header>
    </Styles.HeaderWrapper>
  );
};

export default Header;
