import React from "react";

const CoinTableRow = ({ coin }) => {
  // Coin Data stored in variables
  const coinRank = coin.market_cap_rank;
  const coinIcon = coin.image;
  const coinId = coin.id;
  const coinName = coin.name;
  const coinSymbol = coin.symbol.toUpperCase();
  const coinCurrentPrice = coin.current_price.toLocaleString();
  const priceChange = coin.price_change_percentage_24h.toFixed(1);
  const coin24hrVolume = coin.total_volume.toLocaleString();
  const coinMarketCap = coin.market_cap.toLocaleString();

  return (
    <tr className="text-slate-300 border-t border-white border-opacity-[.12] h-12">
      {/* Coin Rank */}
      <td className="px-3 text-center">{coinRank}</td>
      {/* CoinIcon, CoinID, and CoinName */}
      <td className="px-3 bg-base100">
        <div className="flex items-center gap-3 w-full">
          <img className="w-5" src={coinIcon} alt="coin icon" />
          <div>
            {/* Links to specified CoinPage */}
            <a
              className="flex flex-col md:flex-row md:items-center md:gap-2 hover:underline"
              href={`/coins/${coinId}`}
            >
              {/* CoinName */}
              <span className="text-slate-200 font-bold">{coinName}</span>
              {/* Coin Symbol */}
              <span className="text-primary text-[11px]">
                {coinSymbol}
              </span>
            </a>
          </div>
        </div>
      </td>
      {/* Current Price of coin */}
      <td className="px-3 text-right">
        ${coinCurrentPrice}
      </td>
      {/* 24 Price change of coin */}
      <td
        className={`px-3 text-right ${
          // Text color changes depending on variable being > or < 0
          priceChange > 0 ? "text-green-500" : "text-red-500"
        }`}
      >
        {priceChange}%
      </td>
      {/* 24hr Volume of coin */}
      <td className="px-3 text-right">${coin24hrVolume}</td>
      {/* Market Cap of coin */}
      <td className="px-3 text-right">${coinMarketCap}</td>
    </tr>
  );
};

export default CoinTableRow;
