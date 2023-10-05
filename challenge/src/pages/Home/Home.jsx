import { useState, useEffect } from "react";
import { fetchProducts } from "../../services/ProductsService";
import Loading from "./components/Loading";
import CategorySelector from "./components/CategorySelector";
import ProductTable from "./components/ProductTable";
import Error from "./components/Error";
import { useContext } from "react";
import { ProductContext } from "./context/ProductContext";

const Home = () => {
  //   const [products, setProducts] = useState([]);
  const [filterCategory, setFilterCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const { state, setState } = useContext(ProductContext);
  const [error, setError] = useState("");
  useEffect(() => {
    setLoading(true);
    fetchProducts()
      .then((products) => {
        setState(products);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);
  //   const handleDelete = (product) => {
  //     // let actualState = state;
  //     // actualState = state.filter((productF) => productF.id !== product.id);
  //     // setProducts(actualState);
  //   };

  const handleFilterChange = (filter) => {
    setFilterCategory(filter);
  };
  return (
    <div className="container my-0 ">
      {error !== "" ? (
        <Error />
      ) : loading ? (
        <Loading />
      ) : (
        <>
          <CategorySelector handleFilterChange={handleFilterChange} />
          <div className="row">
            <div className="col">
              <ProductTable
                products={
                  filterCategory === ""
                    ? state
                    : state.filter(
                        (product) => product.category === filterCategory
                      )
                }
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
