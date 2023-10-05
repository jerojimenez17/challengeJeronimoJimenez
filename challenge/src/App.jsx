import Header from "./components/Header";
import Home from "./pages/Home/Home";
import ProductProvider from "./pages/Home/context/ProductProvider";

function App() {
  return (
    <ProductProvider>
      <div className="app-container bg-black vh-100 overflow-auto">
        <Header />
        <Home />
      </div>
    </ProductProvider>
  );
}

export default App;
