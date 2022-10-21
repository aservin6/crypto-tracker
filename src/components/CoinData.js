import React, { useState } from "react";

const CoinData = ({ coin }) => {
  const [description, setDescription] = useState(
    coin.description.en.split(". ")[0]
  );
  const [showMore, setShowMore] = useState(false);

  const clickHandler = () => {
    if (showMore) {
      setDescription(coin.description.en.split(". ")[0]);
      setShowMore(false);
    } else {
      setDescription(coin.description.en);
      setShowMore(true);
    }
  };
  return (
    <>
      {/* Flex Container */}
      <div className="flex flex-col space-y-4 text-baseContent w-full lg:w-2/3">
        <div className="flex items-center justify-between">
          {/* Coin Rank */}
          <div className="flex py-1 px-2 bg-neutral rounded-md w-fit text-sm">
            Rank #{coin.market_cap_rank}
          </div>
        </div>

        {/* Icon, Name, and Symbol */}
        <div className="flex items-center space-x-3">
          <img
            className="w-8"
            src={coin.image.small}
            alt={`${coin.name} icon`}
          />
          <span className="font-bold text-2xl">{coin.name}</span>
          <span className="font-semibold text-primary text-lg">
            {coin.symbol.toUpperCase()}
          </span>
        </div>

        {/* Current Price, Percentage Change */}
        <div className="flex items-center space-x-3">
          <span className="text-3xl font-bold">
            ${coin.market_data.current_price.usd}
          </span>
          {!coin.market_data.price_change_percentage_24h ? (
            <div className="flex items-center space-x-1 text-lg">?</div>
          ) : (
            <div
              // Change Text Color based on whether it's greater than 0
              className={`flex items-center space-x-1 text-lg ${
                coin.market_data.price_change_percentage_24h.toFixed(2) > 0
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              <i className="fa-solid fa-caret-up"></i>
              {!coin.market_data.price_change_percentage_24h ? (
                <span className="font-semibold">?</span>
              ) : (
                <span className="font-semibold">
                  {coin.market_data.price_change_percentage_24h.toFixed(2)}%
                </span>
              )}
            </div>
          )}
        </div>

        {/* Current Price in BTC, Percentage Change in BTC */}
        <div className="flex items-center space-x-2 text-sm">
          <span className="opacity-70">
            {coin.market_data.current_price.btc} BTC
          </span>
          {!coin.market_data.price_change_percentage_24h_in_currency.btc ? (
            <div className="flex items-center space-x-1">?</div>
          ) : (
            <div
              // Change Text Color based on whether it's greater than 0
              className={`flex items-center space-x-1 ${
                coin.market_data.price_change_percentage_24h_in_currency.btc.toFixed(
                  2
                ) > 0
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              <span>
                {coin.market_data.price_change_percentage_24h_in_currency.btc.toFixed(
                  2
                )}
                %
              </span>
              <i className="fa-solid fa-caret-up"></i>
            </div>
          )}
        </div>
      </div>

      {/* Flex Container */}
      <div className="grid text-baseContent text-[13px] self-start mx-auto w-full lg:grid-cols-2 lg:gap-x-4 lg:w-2/3">
        {/* Market Cap */}
        <div className="flex items-center justify-between py-2 border-b border-white border-opacity-[.12]">
          <span className="opacity-70">Market Cap</span>
          <span>${coin.market_data.market_cap.usd.toLocaleString()}</span>
        </div>
        {/* Circulating Supply */}
        <div className="flex items-center justify-between py-2 border-b border-white border-opacity-[.12]">
          <span className="opacity-70">Circulating Supply</span>
          <span>{coin.market_data.circulating_supply.toLocaleString()}</span>
        </div>
        {/* 24hr Volume */}
        <div className="flex items-center justify-between py-2 border-b border-white border-opacity-[.12]">
          <span className="opacity-70">24 Hour Trading Vol</span>
          <span>${coin.market_data.total_volume.usd.toLocaleString()}</span>
        </div>
        {/* Total Supply */}
        <div className="flex items-center justify-between py-2 border-b border-white border-opacity-[.12]">
          <span className="opacity-70">Total Supply</span>
          {/* If null, render 'Infinite' Else, render the integer */}
          {coin.market_data.total_supply === null ? (
            <span>Infinite</span>
          ) : (
            <span>{coin.market_data.total_supply.toLocaleString()}</span>
          )}
        </div>
        {/* Max Supply */}
        <div className="flex items-center justify-between py-2 border-b border-white border-opacity-[.12] lg:col-start-2">
          <span className="opacity-70">Max Supply</span>
          {/* If null, render 'Infinite' Else, render the integer */}
          {!coin.market_data.max_supply ? (
            <span>Infinite</span>
          ) : (
            <span>{coin.market_data.max_supply.toLocaleString()}</span>
          )}
        </div>
      </div>

      {/* Container */}
      <div className="w-full text-sm pb-2 md:text-base  border-b border-white border-opacity-[.12] lg:w-2/3">
        {/* If showMore is true, full description is rendered */}
        {showMore ? (
          <>
            <div
              className="text-baseContent"
              dangerouslySetInnerHTML={{ __html: description }}
            />
            {/* When clicked the description is shortened */}
            <button
              className="text-accent text-xs mt-2 md:text-sm hover:underline"
              onClick={clickHandler}
            >
              Show Less
            </button>
          </>
        ) : (
          <>
            <div
              className="text-baseContent"
              dangerouslySetInnerHTML={{ __html: description + "..." }}
            />
            {/* When clicked the full description is shown */}
            <button
              className="text-accent text-xs mt-2 md:text-sm hover:underline"
              onClick={clickHandler}
            >
              Show More
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default CoinData;
