import { useEffect } from "react";
import products from "../../products.json";
import { addProducts, deleteSingleProduct } from "../../store/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/productsSelector";

export const MainPage = () => {
  const dispatch = useDispatch();
  const storeProducts = useSelector(getProducts);

  useEffect(() => {
    dispatch(addProducts(products));
  }, [dispatch]);

  const deleteSingleProductHandler = (id) => () => {
    dispatch(deleteSingleProduct({ id }));
  };

  return (
    <div>
      {storeProducts.length > 0 &&
        storeProducts.map((product) => {
          return (
            <div key={`${product.id} + ${product.title}`}>
              <h2>{product.title}</h2>
              <div>{product.price}</div>
              <button onClick={deleteSingleProductHandler(product.id)}>
                Удалить товар
              </button>
            </div>
          );
        })}
    </div>
  );
};
