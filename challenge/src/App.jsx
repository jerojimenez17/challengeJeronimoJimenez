import { useEffect, useState } from "react";
import Header from "./components/Header";
import { fetchProducts } from "./services/ProductsService";
import ProductTable from "./components/ProductTable";
import Loading from "./components/Loading";
import Select from "./components/Select";

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filterCategory, setFilterCategory] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchProducts()
      .then((products) => {
        setProducts(products);
        console.log(products);
        const allCategories = products.map((product) => product.category);
        const categories = [...new Set(allCategories)];
        setCategories(categories);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const handleDelete = (product) => {
    let actualState = products;
    actualState = products.filter((productF) => productF.id !== product.id);
    setProducts(actualState);
  };

  const handleFilterChange = (filter) => {
    setFilterCategory(filter);
  };
  return (
    <div className="app-container bg-black">
      <Header />
      <div className="container my-0">
        {loading ? (
          <Loading />
        ) : (
          <>
            <Select
              categories={categories}
              handleFilterChange={handleFilterChange}
            />
            <div className="row">
              <div className="col">
                <ProductTable
                  products={
                    filterCategory === ""
                      ? products
                      : products.filter(
                          (product) => product.category === filterCategory
                        )
                  }
                  handleDelete={handleDelete}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
