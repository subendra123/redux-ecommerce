import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import {
  NavLink,
  Link,
  Routes,
  Route,
  useParams,
  useNavigate
} from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";

function App() {
  return (
    <>

<Routes>
      <Route path="/" element={<ProductCard />} />
     
      <Route path="/product/:productId" element={<ProductDetails />} />

      <Route path="/cart" element={<Cart />} />
     


    </Routes>
    </>
  );
}

export default App;
