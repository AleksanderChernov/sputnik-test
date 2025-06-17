import "./App.css";
import { ProductCard } from "./components/Product";

function App() {
  const image =
    "https://plus.unsplash.com/premium_photo-1675237625862-d982e7f44696?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <ProductCard
      currency="EUR"
      origin="Belarus"
      title="Arabica"
      imageUrl={image}
    />
  );
}

export default App;
