import React from "react";

const PortfolioTableHead = () => {
  return (
    // Renders Table Head
    <thead>
      <tr className="bg-neutral border-y border-white border-opacity-[.12] h-10">
        <th className="text-left px-3">Name</th>
        <th className="text-right px-3">Type</th>
        <th className="text-right px-3">Quantity</th>
        <th className="text-right px-3">Buy/Sell Price</th>
        <th className="text-right px-3">Total ($USD)</th>
        <th></th>
      </tr>
    </thead>
  );
};

export default PortfolioTableHead;
