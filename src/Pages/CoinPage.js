import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/UI/Loading";
import Navbar from "../components/UI/Navbar";
import CoinPagination from "../components/UI/CoinPagination";
import CoinData from "../components/CoinData";
import Wrapper from "../components/Wrapper";
import CoinChart from "../components/CoinChart";

const CoinPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();
  const [loading, setLoading] = useState(true);

  // Get request triggers when page loads
  useEffect(() => {
    const getCoin = async () => {
      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`
      );
      // set data to coin variable
      setCoin(data);
      // set loading to false
      setLoading(false);
    };
    getCoin();
  }, [id]);

  // If loading renders Loading component
  return loading ? (
    <Loading />
  ) : (
    <Wrapper>
      <Navbar />
      {/* Coin data is passed down to each component */}
      <CoinPagination coin={coin} />
      <CoinData coin={coin} />
      <CoinChart coin={coin} />
    </Wrapper>
  );
};

export default CoinPage;
