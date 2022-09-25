import React from "react";
import TransactionTable from "../../components/TransactionTable/TransactionTable"

const PortfolioTransactionList = ({ transactions }) => {
  return (
    // Transaction list
    <div className="space-y-3">
      <h2 className="font-bold text-base md:text-xl">Transaction List</h2>
      {/* Pass transactions into component */}
      <TransactionTable transactions={transactions} />
    </div>
  );
};

export default PortfolioTransactionList;
