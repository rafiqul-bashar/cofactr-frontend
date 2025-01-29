import { Plus, Minus, Trash2 } from "lucide-react";
import useCartStore from "../../../store/cart.store";
import { useToast } from "../../ui/use-toast";
import p4 from "../../../assets/product4.png";
import { Link } from "react-router-dom";
import { Button } from "../../ui/button";

export default function ProductItemCard({ product }) {
  const { addItemToCart } = useCartStore();
  const { toast } = useToast();
  const onAddToCart = () => {
    addItemToCart(product);
    toast({
      variant: "success",
      title: "Added to cart",
    });
  };
  return (
    <>
      <div className="group hover:-translate-y-3 transition-all duration-300 ease-linear border border-transparent hover:border-gray-300 md:space-y-3 ">
        <img
          src={p4}
          alt={product.title}
          className="img-shadow2 max-w-[200px] max-h-[210px] mx-auto group-hover:scale-125 duration-300 "
        />
        {/* product card text contents */}
        <div className="text-lg text-center  px-4 md:px-8 py-2 ">
          <Link to={`/product/${product?.id}`}>
            <h2 className="font-semibold tracking-wide text-lightGray truncate hover:underline-offset-2 hover:underline hover:text-black transition-all duration-150">
              {product?.title}
            </h2>
          </Link>
          <p className=" text-lightGray text-lg font-semibold tracking-wide text-center space-x-1">
            <span className="text-lg">TK</span>{" "}
            {/* <span className="text-primary text-xl">&#2547; tk sign </span>{" "} */}
            <span className="text-xl font-bold">{product?.price}</span>
            <span>BDT</span>
          </p>
        </div>
        <Button
          onClick={onAddToCart}
          className="w-full rounded-none font-semibold tracking-wider capitalize text-warmGray opacity-0 group-hover:opacity-100 transition-all duration-300 hover:text-gray-800 hover:bg-orange-400"
        >
          <span className="">Add to cart</span>
        </Button>
      </div>
    </>
  );
}
