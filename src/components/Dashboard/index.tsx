import React from "react";

import Summary from "../Summary";
import TransactionTable from "../TransactionTable";
import * as Styles from "./styles";

const Dashboard: React.FC = () => {
  return (
    <Styles.Container>
      <Summary />
      <TransactionTable />
    </Styles.Container>
  );
};

export default Dashboard;
