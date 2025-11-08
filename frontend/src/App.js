import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductsList from "./components/ProductList";
import ProductPage from "./components/ProductPage";


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/products" element={<ProductsList />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
