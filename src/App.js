import Home from "./Pages/Home";
import CoinPage from "./Pages/CoinPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      {/* Wrapper for whole App */}
      <div className="bg-base100 min-h-screen">
        {/* Switch for each possible path */}
        <Switch>
          <Route path="/coins/:id" component={CoinPage} exact />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
