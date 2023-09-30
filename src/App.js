import "./App.css";
import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./components/checkout/checkout.component";
import ProductCategory from "./components/product-category/product-category.component.jsx";
import ProductCategoryPreview from "./routes/product-category/product-categoryPreview.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/shop/*" element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
