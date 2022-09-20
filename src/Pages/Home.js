import CoinTable from "../components/Table/CoinTable";
import Navbar from "../components/UI/Navbar";
import TrendingCoins from "../components/Trending/TrendingCoins";
import Wrapper from "../components/Wrapper";

const Home = () => {
  return (
    <Wrapper>
      <Navbar />
      <TrendingCoins />
      <CoinTable />
    </Wrapper>
  );
};

export default Home;
