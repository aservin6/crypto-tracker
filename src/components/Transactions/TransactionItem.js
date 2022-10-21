import React from "react";

const TransactionItem = ({ transaction, onRemove }) => {
  return (
    // All information about the transaction is displayed as a table row
    <tr className="h-12 border-t border-white border-opacity-[.12]">
      {/* Coin Icon, Name and Symbol */}
      <td className="text-left px-3">
        <div className="flex items-center gap-3 font-semibold">
          <img className="w-6" src={transaction.image} alt="" />
          <a className="flex flex-col md:flex-row md:items-center md:gap-3 hover:underline" href={`/coins/${transaction.id}`}>
            <span>{transaction.coinName}</span>
            <span className="text-primary">
              {transaction.symbol.toUpperCase()}
            </span>
          </a>
        </div>
      </td>
      {/* Transaction type is displayed: Buy or Sell */}
      <td className="text-right px-3">{transaction.type ? "Buy" : "Sell"}</td>
      {/* Transaction quantity in the coins currency */}
      <td className="text-right px-3">
        {transaction.quantity} {transaction.symbol.toUpperCase()}
      </td>
      {/* Price the coin was bought or sold for */}
      <td className="text-right px-3">${transaction.price_per_coin}</td>
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
