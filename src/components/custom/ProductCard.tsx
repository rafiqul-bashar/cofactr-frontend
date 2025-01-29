import useCartStore from "../../store/cart.store";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { useToast } from "../ui/use-toast";
import p4 from "../../assets/product4.png";
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
    <div className="px-6 group hover:-translate-y-3 transition-all duration-300 ease-linear">
      <Link to={`/product/${product?.id}`}>
        <img
          src={p4}
          alt={product.title}
          className="img-shadow2 max-w-[200px] max-h-[210px] mx-auto group-hover:scale-125 duration-300 cursor-pointer"
        />
      </Link>
      <div className="space-y-2 mt-6 text-lg text-center">
        <h2 className="font-bold tracking-wide text-lightGray truncate">
          {product?.title}
        </h2>
        <p className=" text-lightGray font-bold tracking-wide text-center">
          <span className="text-shop-primary">&#2547;</span> {product.price}
        </p>
        <p className="">
          <Button variant={"ghost"} onClick={onAddToCart} className="">
            <span className="opacity-0 group-hover:opacity-100 transition-all duration-300">
              Add to cart
            </span>
          </Button>
        </p>
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
//         className="rproductative group bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300"
//       >
//         {product.discountLabproduct && (
//           <span className="absolute top-2 left-2 bg-orange-500 text-white text-sm font-bold px-2 py-1 rounded">
//             {product.discountLabproduct}
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
