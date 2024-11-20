import useCartStore from "../../store/cart.store";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { useToast } from "../ui/use-toast";

export default function ProductCard({ product }) {
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
    <div className="group bg-zinc-50 shadow-md hover:shadow-xl transition-all duration-200 ease-in rounded-md max-w-sm  text-left hover:bg-shop-primary/10 ">
      <Link to={`/product/${product?.id}`}>
        <img
          className="rounded-t-lg p-4  transition-transform duration-300 h-48 mx-auto"
          src={product.image}
          alt="product image"
        />
      </Link>
      <div className="px-5 pb-5">
        <Link to={`/product/${product?.id}`}>
          <h3 className="text-gray-900 font-semibold text-xl  ">
            {product.title.slice(0, 40).trim() + "..."}
          </h3>
        </Link>
        <div className="my-2 text-xs font-medium bg-gray-200 text-gray-700 w-fit px-2 py-0.5 md:text-sm uppercase">
          {product.category}
        </div>
        <div className="md:flex items-center justify-between  space-y-2">
          <span className="text-3xl font-bold text-gray-900 ">
            $ {product.price}
          </span>
          <Button
            onClick={onAddToCart}
            className=" text-shop-dark-purple bg-shop-primary hover:bg-black/90 hover:text-gray-100 font-semibold rounded-sm  px-8 py-2.5 text-center transition ease-linear duration-300 "
          >
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
}

// demo 1

{
  /* <div className="group bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300">
      <div className="">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48  object-contain p-4 transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-4">
        <h2 className="font-semibold text-lg">
          {product.title.slice(0, 40).trim() + "..."}
        </h2>
        <div className="flex items-center mt-2">
          <span className="text-xl font-bold text-orange-500">
            TK. {product.price}
          </span>
        </div>
        <button
          onClick={onAddToCart}
          className="mt-4 w-full bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition-all duration-300"
        >
          Buy Now
        </button>
      </div>
    </div> */
}

// demo 2
//       <div
//         className="relative group bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300"
//       >
//         {product.discountLabel && (
//           <span className="absolute top-2 left-2 bg-orange-500 text-white text-sm font-bold px-2 py-1 rounded">
//             {product.discountLabel}
//           </span>
//         )}

//         <div className="overflow-hidden">
//           <img
//             src={product.image}
//             alt={product.title}
//             className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
//           />
//         </div>

//         <div className="p-4">
//           <h2 className="font-semibold text-lg">{product.title}</h2>
//           <div className="flex items-center mt-2">
//             <span className="text-xl font-bold text-orange-500">
//               TK. {product.price}
//             </span>
//             {product.oldPrice && (
//               <span className="text-sm line-through ml-2 text-gray-500">
//                 TK. {product.oldPrice}
//               </span>
//             )}
//           </div>

//           <button className="mt-4 w-full bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition-all duration-300">
//             Buy Now
//           </button>
//         </div>
//       </div>
