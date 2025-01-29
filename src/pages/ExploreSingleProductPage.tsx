import React from "react";
import ProductCard from "../components/custom/ProductCard";
import { useLocation, useParams } from "react-router-dom";
import useCartStore from "../store/cart.store";
import useProductStore from "../store/productData.store";

export default function ExploreSingleProductPage() {
  const { state } = useLocation();
  const { id } = useParams();
  const { addItemToCart } = useCartStore();
  const { products } = useProductStore((state) => state);
  const { image, title, price } = products[0];

  if (state === null) {
    return (
      <div>
        <div className="container">
          <div className="px-6 group hover:-translate-y-3 transition-all duration-300 ease-linear">
            <img
              src={image}
              alt={title}
              className="img-shadow2 max-w-[200px] max-h-[210px] mx-auto group-hover:scale-125 duration-300 cursor-pointer"
            />

            <div className="space-y-2 mt-6 text-lg text-center">
              <h2 className="font-bold tracking-wide text-lightGray truncate">
                {title}
              </h2>
              <p className=" text-lightGray font-bold tracking-wide text-center">
                <span className="text-shop-primary">&#2547;</span> {price}
              </p>
              <p className="">
                <button
                  onClick={() => {
                    addItemToCart(products[0]);
                  }}
                  className=""
                >
                  <span className="opacity-0 group-hover:opacity-100 transition-all duration-300">
                    Add to cart
                  </span>
                </button>
              </p>
            </div>
          </div>
        </div>
        <button onClick={() => addItemToCart(products[id - 1])}>Buy</button>
      </div>
    );
  }
  if (state.pdata) {
    return <div>Mal oise: {state.pdata?.title}</div>;
  }
}
