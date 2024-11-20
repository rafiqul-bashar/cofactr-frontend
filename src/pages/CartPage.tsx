import useCartStore from "../store/cart.store";
import { Link } from "react-router-dom";
import CartItemCard from "../components/custom/CartItemCard";
import { Button } from "../components/ui/button";

//  get total fn

const getTotal = (cartItem) => {
  let totalQuantity = 0;
  let totalPrice = 0;
  cartItem.forEach((item) => {
    totalQuantity += item.quantity!;
    totalPrice += item.price! * item.quantity!;
  });
  return { totalPrice, totalQuantity };
};

export default function CartPage() {
  const { cartItems } = useCartStore();

  const cartTotalQuantity = getTotal(cartItems).totalQuantity;
  const cartTotalPrice = getTotal(cartItems).totalPrice;

  if (cartItems && cartItems.length < 1) {
    return (
      <div className=" flex flex-col items-center justify-center py-32">
        <h2 className="text-3xl mt-10 mb-5 font-bold">Your Cart is Empty</h2>
        <Link
          to="/products"
          className="px-6 py-2  text-white bg-gray-800 hover:scale-105 border-0 rounded-sm  transition font-medium "
        >
          Back to Shop
        </Link>
      </div>
    );
  }
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <header className="text-center">
            <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Your Cart
            </h1>
          </header>

          <div className="mt-8">
            <ul className="space-y-4">
              {cartItems?.map((el, i) => (
                <CartItemCard key={i} item={el} />
              ))}
            </ul>

            <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
              <div className="w-screen max-w-lg space-y-4">
                <dl className="space-y-0.5 text-sm text-gray-700">
                  <div className="flex justify-between">
                    <dt>ITEM COUNT</dt>
                    <dd>{cartTotalQuantity}</dd>
                  </div>

                  <div className="flex justify-between">
                    <dt>SUB TOTAL</dt>
                    <dd>
                      <span className="font-bold">
                        {" "}
                        {new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "USD",
                        }).format(cartTotalPrice)}
                      </span>{" "}
                    </dd>
                  </div>
                  <br />
                  <hr />
                  <br />
                  <div className="flex justify-between !text-base font-medium">
                    <dt>To Pay</dt>
                    <dd>
                      {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                      }).format(cartTotalPrice)}
                    </dd>
                  </div>
                </dl>

                <div className="flex justify-end">
                  <Button variant={"secondary"}>Checkout</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
