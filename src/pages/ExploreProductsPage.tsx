import { useLocation } from "react-router-dom";
import ProductCard from "../components/custom/ProductCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import useProductStore from "../store/productData.store";
import { useEffect, useState } from "react";
import { LoadingStatus } from "../components/custom";
import ProductItemCard from "../components/custom/productspage/ProductItemCard";
export default function ExploreProductsPage() {
  const { products, categories } = useProductStore((state) => state);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [priceSort, setPriceSort] = useState(null);
  const [loading, setLoading] = useState(false);

  const { search } = useLocation();

  //  loading screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  //  filter and sorting

  useEffect(() => {
    let filtered = [...products];

    if (selectedCategory && selectedCategory !== "all") {
      filtered = filtered.filter(
        (product) => product?.category === selectedCategory
      );
    }
    if (priceSort && priceSort !== "all") {
      filtered.sort((a, b) =>
        priceSort === "high-to-low" ? b.price - a.price : a.price - b.price
      );
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, priceSort]);

  return (
    <div className="container space-y-6 py-12">
      <div className="bg-purple-200">
        <h3>{search}</h3>
        <h2>SEARCHED ITEM...</h2>
      </div>

      <div className=" text-gray-700 space-y-4 md:space-y-8">
        <h1 className="text-3xl md:text-5xl  font-bold">Products</h1>
        {/* filter section */}
        <div className="space-x-2 flex items-center py-2">
          <h5 className="text-gray-700 font-semibold">Filter: </h5>

          {/* sort by price */}

          <div>
            <Select onValueChange={setPriceSort}>
              <SelectTrigger className="md:w-[180px]">
                <SelectValue placeholder="Price" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="low-to-high">Low to High</SelectItem>
                <SelectItem value="high-to-low">High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {/* sort by categories */}
          <div>
            <Select onValueChange={setSelectedCategory}>
              <SelectTrigger className="md:w-[180px]">
                <SelectValue placeholder="Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                {categories?.map((category, i) => (
                  <SelectItem
                    value={
                      typeof category === "string"
                        ? category.toLowerCase()
                        : String(category).toLowerCase()
                    }
                    key={i}
                  >
                    <span className="capitalize">{category}</span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
      {/* product grid */}
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-8 ">
        {loading ? (
          <div className="col-span-4 h-80 flex items-center justify-center">
            <LoadingStatus />
          </div>
        ) : (
          filteredProducts?.map((product) => (
            <ProductItemCard key={product?.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
}
