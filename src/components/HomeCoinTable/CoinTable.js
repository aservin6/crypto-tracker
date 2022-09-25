import { useEffect, useState } from "react";
import axios from "axios";
import CoinTableRow from "./CoinTableRow";
import CoinTableHead from "./CoinTableHead";
import Loading from "../UI/Loading";
import CoinTablePagination from "./CoinTablePagination";

const CoinTable = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  // Prev Button handler
  const clickPrevHandler = () => {
    if (page === 1) {
      return;
    }
    setPage(page - 1);
  };

  // Next button handler
  const clickNextHandler = () => {
    setPage(page + 1);
  };

  // Get request triggers on page load
  useEffect(() => {
    const getCoins = async () => {
      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=50&page=${page}&sparkline=false`
      );
      // Request data is stored in coins
      setCoins(data);
      // Set loading to false
      setLoading(false);
    };
    getCoins();
    // Get request triggers again when page is changed
  }, [page]);

  // If loading render Loading component
  return loading ? (
    <Loading />
  ) : (
    // Container
    <div className="w-full lg:w-2/3">
      {/* Heading */}
      <h2 className="text-baseContent text-base font-semibold mb-1 md:text-xl">
        Cryptocurrency Prices by Market Cap{" "}
      </h2>
      {/* Table Container */}
      <div className="overflow-auto md:overflow-visible">
        <table className="relative mx-auto container text-xs text-baseContent w-full bg-base100 md:text-sm">
          {/* Table Head */}
          <CoinTableHead />
          <tbody>
            {/* Renders a CoinTableRow component for each coin */}
            {coins.map((coin) => {
              return <CoinTableRow coin={coin} key={coin.id} />;
            })}
          </tbody>
        </table>
      </div>
      {/* Table Pagination component */}
      <CoinTablePagination
        onPrev={clickPrevHandler}
        onNext={clickNextHandler}
      />
    </div>
  );
};

export default CoinTable;
