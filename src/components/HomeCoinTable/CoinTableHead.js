import React from "react";

const CoinTableHead = () => {
  return (
    <thead>
      <tr className="bg-neutral border-y border-white border-opacity-[.12] h-10">
        <th className="px-3 text-center">#</th>
        <th className="px-3 text-left bg-neutral">
          Coin
        </th>
        <th className="px-3 text-right">
          Price
        </th>
        <th className="px-3 text-right">
          24h
        </th>
        <th className="px-3 text-right">
          24h Volume
        </th>
        <th className="px-3 text-right">
          Market Cap
        </th>
      </tr>
    </thead>
  );
};

export default CoinTableHead;
