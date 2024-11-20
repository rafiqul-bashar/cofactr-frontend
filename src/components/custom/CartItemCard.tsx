import { Plus, Minus, Trash2 } from "lucide-react";
import useCartStore from "../../store/cart.store";
export default function CartItemCard({ item }) {
  const { title, id, price, image, quantity } = item;
  const { increaseQuantity, decreaseQuantity, removeItemFromCart } =
    useCartStore();
  const onIncreaseQuantity = (productId: number) => {
    increaseQuantity(productId);
  };

  const onDecreaseQuantity = (productId: number) => {
    decreaseQuantity(productId);
  };
  const onRemoveItem = (productId: number) => {
    removeItemFromCart(productId);
  };
  return (
    <>
      <li className="flex items-center gap-4">
        <img src={image} alt={title} className="size-16 rounded object-cover" />

        <div>
          <h3 className="text-sm text-gray-900 font-semibold">{title}</h3>

          <p className=" text-gray-600 font-medium mt-0.5">$ {price}</p>
        </div>

        <div className="flex flex-1 items-center justify-end gap-2">
          <form>
            <label htmlFor="Line3Qty" className="sr-only">
              {" "}
              Quantity{" "}
            </label>
            <div className="flex items-center text-gray-700">
              <Minus
                onClick={() => onDecreaseQuantity(id)}
                className="cursor-pointer"
              />
              <p className="h-8 w-8 mx-1 rounded border-gray-200 bg-gray-50 p-0 text-center text-gray-600">
                {quantity}
              </p>
              <Plus
                onClick={() => onIncreaseQuantity(id)}
                className="cursor-pointer"
              />
            </div>
          </form>

          <Trash2
            onClick={() => onRemoveItem(id)}
            className="h-5 text-red-600 cursor-pointer "
          />
        </div>
      </li>
    </>
  );
}
