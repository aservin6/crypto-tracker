import React from "react";

const TrendingCoinCard = ({ coin }) => {
  return (
    // Clicking the card links to specified coin
    <a
      href={`/coins/${coin.id}`}
      className="flex items-center justify-center gap-2 bg-neutral p-1.5 border border-white border-opacity-[.12]"
    >
      {/* Coin Image */}
      <img className="w-5" src={coin.thumb} alt="" />
      {/* Coin Symbol */}
      <p className="text-slate-200 text-xs font-semibold hover:underline md:text-xs">
        {coin.symbol}
      </p>
    </a>
  );
};

export default TrendingCoinCard;
