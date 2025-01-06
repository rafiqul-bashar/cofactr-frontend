import { useLocation } from "react-router-dom";
import ProductCard from "../components/custom/ProductCard";

import useProductStore from "../store/productData.store";
export default function ExploreProductsPage() {
  const { products, categories } = useProductStore((state) => state);
  const { search } = useLocation();

  return (
    <div className="md:container mx-auto">
      <h3>{search}</h3>
      <div className="p-4 bg-gray-100 ">
        <h1 className="text-center text-3xl font-bold mb-8">Products</h1>
        <div className="md:container grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-7">
          {products?.map((product) => (
            <ProductCard key={product?.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
