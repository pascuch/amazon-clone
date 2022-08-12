import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllProducts,
  getProductsStatus,
  getProductsError,
  fecthProducts,
} from "../redux/productsSlice";
import Product from "./Product";

function ProductFeed() {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  const productsStatus = useSelector(getProductsStatus);
  const productsError = useSelector(getProductsError);

  useEffect(() => {
    if (productsStatus === "idle") {
      dispatch(fecthProducts());
    }
  }, [productsStatus, dispatch]);

  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-32 lg:-mt-52 mx-auto">
      {products
        ?.slice(0, 4)
        .map(({ id, title, price, description, category, image, rating, hasPrime }) => (
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
            rating={rating}
            hasPrime={hasPrime}
          />
        ))}
      <img
        className="md:col-span-full"
        src="https://links.papareact.com/dyz"
        alt=""
      />
      <div className="md:col-span-2">
        {products
          ?.slice(4, 5)
          .map(({ id, title, price, description, category, image, rating, hasPrime }) => (
            <Product
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
              rating={rating}
              hasPrime={hasPrime}
            />
          ))}
      </div>

      {products
        ?.slice(5, products.length)
        .map(({ id, title, price, description, category, image, rating, hasPrime }) => (
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
            rating={rating}
            hasPrime={hasPrime}
          />
        ))}
    </div>
  );
}

export default ProductFeed;
