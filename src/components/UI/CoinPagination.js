import React from "react";

const CoinPagination = ({ coin }) => {
  return (
    // Flex Container
    <div className="flex items-center gap-4 self-start lg:w-2/3 lg:mx-auto">
      {/* Links back to list of coins */}
      <a
        className="text-primary font-semibold hover:underline underline-offset-2"
        href="/"
      >
        Coins
      </a>
      <i className="fa-solid fa-chevron-right text-primary"></i>
      {/* Current coin name */}
      <p className="text-baseContent font-semibold">{coin.name} Price</p>
    </div>
  );
};

export default CoinPagination;
