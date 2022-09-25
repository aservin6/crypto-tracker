import React from "react";

const TransactionItem = ({ transaction, onRemove }) => {
  return (
    // All information about the transaction is displayed as a table row
    <tr className="h-12 border-t border-white border-opacity-[.12]">
      {/* Coin Icon, Name and Symbol */}
      <td className="text-left px-3">
        <div className="flex items-center space-x-2 font-semibold">
          <img className="w-6" src={transaction.image} alt="" />
          <span>{transaction.coinName}</span>
          <span className="text-primary">
            {transaction.symbol.toUpperCase()}
          </span>
        </div>
      </td>
      {/* Transaction type is displayed: Buy or Sell */}
      <td className="text-center px-3">{transaction.type ? "Buy" : "Sell"}</td>
      {/* Transaction quantity in the coins currency */}
      <td className="text-right px-3">
        {transaction.quantity} {transaction.symbol.toUpperCase()}
      </td>
      {/* Current price of the coin that was bought or sold */}
      <td className="text-right px-3">${transaction.current_price}</td>
      {/* Total monetary value of the transaction */}
      <td className="text-right px-3">${transaction.total.toLocaleString()}</td>
      <td className="text-right px-3 text-accent hover:text-red-500">
        {/* Remove button to remove targeted transaction item */}
        <button
          onClick={() => {
            onRemove(transaction);
          }}
          className="font-semibold"
        >
          REMOVE
        </button>
      </td>
    </tr>
  );
};

export default TransactionItem;
