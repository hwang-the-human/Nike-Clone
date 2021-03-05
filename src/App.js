import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./HomePage/HomePage.js";
import ProductsPage from "./ProductsPage/ProductsPage.js";
import Header from "./Header.js";
import Menu from "./Menu.js";
import BottomMenu from "./BottomMenu.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Switch>
        <Route path="/product" component={ProductsPage} />
        <Route path="/" component={HomePage} />
      </Switch>
      <BottomMenu />
    </div>
  );
}

export default App;
