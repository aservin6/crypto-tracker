import axios from "axios";
import React, { useEffect, useState } from "react";

const UserCoinItem = ({ coin }) => {
  const [error, setError] = useState(null);
  const [currentPrice, setCurrentPrice] = useState(0);
  const [percentChange24hr, setPercentChange24hr] = useState(0);

  useEffect(() => {
    const getCoinData = async (id) => {
      try {
        const { data } = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${id}?tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`
        );
        setCurrentPrice(data.market_data.current_price.usd);
        setPercentChange24hr(data.market_data.price_change_percentage_24h);
      } catch (error) {
        setError(error.message);
      }
    };
    getCoinData(coin.id);
  }, []);

  return (
    <>
      {error ? (
        <p>{error}</p>
      ) : (
        // A Row is rendered for each of the users coins
        <tr className="h-12 border-t border-white border-opacity-[.12]">
          {/* Displays coin Name, Icon, and Symbol */}
          <td className="text-left px-3">
            <div className="flex items-center gap-3 font-semibold w-full">
              <img className="w-6" src={coin.image} alt="" />
              <a
                className="flex flex-col md:flex-row md:items-center md:gap-3 hover:underline"
                href={`/coins/${coin.id}`}
              >
                <span>{coin.name}</span>
                <span className="text-primary">
                  {coin.symbol.toUpperCase()}
                </span>
              </a>
            </div>
          </td>
          {/* Displays the coins current price */}
          <td className="text-center px-3">${currentPrice}</td>
          {/* Displays the coins 24h percent change */}
          <td
            className={`px-3 text-center ${
              // Text color changes depending on variable being > or < 0
              percentChange24hr > 0 ? "text-green-500" : "text-red-500"
            }`}
          >
            {percentChange24hr.toFixed(2)}%
          </td>
          {/* Displays how much the user owns in the coins currency */}
          <td className="text-center px-3">
            {coin.quantity} {coin.symbol.toUpperCase()}
          </td>
        </tr>
      )}
      
    </>
  );
};

export default UserCoinItem;
