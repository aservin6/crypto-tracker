import React from "react";

const UserCoinItem = ({ coin, userCoinsData }) => {
  return (
    // A Row is rendered for each of the users coins
    <tr className="h-12 border-t border-white border-opacity-[.12]">
      {/* Displays coin Name, Icon, and Symbol */}
      <td className="text-left px-3">
        <div className="flex items-center gap-3 font-semibold w-full">
          <img className="w-6" src={coin.image} alt="" />
          <span>{coin.name}</span>
          <span className="text-primary">{coin.symbol.toUpperCase()}</span>
        </div>
      </td>
      {/* Displays the coins current price */}
      <td className="text-center px-3">${coin.current_price}</td>
      {/* Displays the coins 24h percent change */}
      <td
        className={`px-3 text-center ${
          // Text color changes depending on variable being > or < 0
          coin.percent_change_24h > 0 ? "text-green-500" : "text-red-500"
        }`}
      >
        {coin.percent_change_24h}%
      </td>
      {/* Displays how much the user owns in the coins currency */}
      <td className="text-center px-3">
        {coin.quantity} {coin.symbol.toUpperCase()}
      </td>
    </tr>
  );
};

export default UserCoinItem;
