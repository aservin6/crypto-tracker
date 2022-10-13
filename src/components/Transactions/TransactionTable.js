import React from "react";
import TransactionTableHead from "./TransactionTableHead";
import TransactionItem from "./TransactionItem";

const PortfolioTable = ({ transactions, setTransactions }) => {
  // Takes in the selected transaction item
  // filters the list with targeted transaction the user wants to remove
  const removeTransactionHandler = (item) => {
    // Sets new transaction list to filtered list without removed transaction item
    setTransactions(transactions.filter((obj) => obj.key !== item.key));
  };

  return (
    // Makes table scrollable when overflowed
    <div className="overflow-auto md:overflow-visible">
      <table className="w-full text-xs md:text-sm">
        {/* Renders Table Head component */}
        <TransactionTableHead />
        <tbody>
          {/* Maps over transactions and renders a transaction item for every transaction */}
          {transactions.map((transaction) => {
            return (
              // Passes in transaction object, key, and Remove function
              <TransactionItem
                transaction={transaction}
                key={Math.random() * 1000}
                onRemove={removeTransactionHandler}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PortfolioTable;
