import CoinTable from "../components/HomeCoinTable/CoinTable";
import Navbar from "../components/UI/Navbar";
import TrendingCoins from "../components/Trending/TrendingCoins";
import Wrapper from "../components/Wrapper";

const HomePage = () => {
  return (
    <Wrapper>
      <Navbar />
      <TrendingCoins />
      <CoinTable />
    </Wrapper>
  );
};

export default HomePage;
