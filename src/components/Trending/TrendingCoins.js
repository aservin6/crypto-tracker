import axios from "axios";
import { useEffect, useState } from "react";
import TrendingCoinCard from "./TrendingCoinCard";
import Loading from "../UI/Loading";

const TrendingCoins = () => {
  const [trendingCoins, setTrendingCoins] = useState();
  const [loading, setLoading] = useState(true);

  // Get Request gets triggered on page load
  useEffect(() => {
    const getTrendingCoins = async () => {
      const { data } = await axios.get(
        "https://api.coingecko.com/api/v3/search/trending"
      );
      // Set request data to trendingCoins
      setTrendingCoins(data.coins);
      // Sets loading to false
      setLoading(false);
    };
    getTrendingCoins();
  }, []);

  // If Loading return Loading component
  return loading ? (
    <Loading />
  ) : (
    // Container
    <div className="w-full lg:w-2/3">
      {/* Header */}
      <h2 className="text-baseContent text-base font-semibold mb-1 md:text-xl">
        Trending Coins <i className="fa-solid fa-fire fa-sm text-accent"></i>
      </h2>
      {/* Grid Container */}
      <div className="grid grid-cols-2 gap-[2px] md:grid-cols-7">
        {/* Return a TrendingCoinCard for each item mapped */}
        {trendingCoins.map((coin) => {
          return <TrendingCoinCard coin={coin.item} key={coin.item.id} />;
        })}
      </div>
    </div>
  );
};

export default TrendingCoins;
