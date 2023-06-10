import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./HomePage/HomePage.js";
import ProductsPage from "./ProductsPage/ProductsPage.js";
import Header from "./Header.js";
import Menu from "./Menu.js";
import BottomMenu from "./BottomMenu.js";
import ItemPage from "./ItemPage/ItemDetailsPage.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <Switch>
        <Route path="/products/item" component={ItemPage} />
        <Route path="/products" component={ProductsPage} />
        <Route path="/" component={HomePage} />
      </Switch>
      <BottomMenu />
    </div>
  );
}

export default App;
