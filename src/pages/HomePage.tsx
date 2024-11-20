import { Link } from "react-router-dom";
import { useToast } from "../components/ui/use-toast";
import { Button } from "../components/ui/button";

export default function HomePage() {
  const { toast } = useToast();
  const show = () => {
    toast({
      variant: "success",
      title: "Toast Working",
    });
  };
  return (
    <>
      <div className="max-w-screen-4xl mx-auto">
        {/* Hero Section */}
        <img src="/hero_banner.jpg" alt="section_banner" />
        {/* Featured Products Section */}
        <section className=" bg-gray-100 text-center">
          <div className="container mx-auto py-20 px-6">
            <h2 className="text-3xl font-semibold mb-8">Featured Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((product) => (
                <div className="group bg-zinc-50 shadow-md hover:shadow-xl transition-all duration-200 ease-in rounded-md max-w-sm  text-left hover:bg-shop-primary/10 ">
                  <Link to={`/product/4`}>
                    <img
                      className="rounded-t-lg p-4  transition-transform duration-300 h-48 mx-auto"
                      src="https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg"
                      alt="product image"
                    />
                  </Link>
                  <div className="px-5 pb-5">
                    <Link to={`/product/5`}>
                      <h3 className="text-gray-900 font-semibold text-xl  ">
                        Apple Watch Series 7 GPS, Aluminium Case, Starlight
                        Sport
                      </h3>
                    </Link>
                    <div className="my-2 text-xs font-medium bg-gray-200 text-gray-700 w-fit px-2 py-0.5 md:text-sm uppercase">
                      TV
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold text-gray-900 ">
                        $ 499
                      </span>
                      <Button className=" text-shop-dark-purple bg-shop-primary hover:bg-black/90 hover:text-gray-100 font-semibold rounded-sm  px-8 py-2.5 text-center transition ease-linear duration-300 ">
                        Add to cart
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Customer Testimonials Section */}
        <section className=" bg-white text-center">
          <div className="container py-20 px-6">
            <h2 className="text-3xl font-semibold mb-8">
              What Our Customers Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((testimonial) => (
                <div
                  key={testimonial}
                  className="p-6 bg-gray-100 rounded-lg shadow-md"
                >
                  <p className="italic mb-4">
                    "This is a fantastic product! Highly recommend to anyone."
                  </p>
                  <h4 className="font-semibold">Customer {testimonial}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Special Offers Section */}
        <section className="bg-blue-50 text-center">
          <div className="container py-20 px-6 ">
            <h2 className="text-3xl font-semibold mb-8">Special Offers</h2>
            <div className="flex flex-col items-center md:flex-row md:space-x-4">
              <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/2">
                <h3 className="text-xl font-semibold mb-2">
                  Seasonal Discount
                </h3>
                <p className="text-gray-600 mb-4">
                  Save up to 30% on select items!
                </p>
                <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition">
                  Grab the Deal
                </button>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/2 mt-4 md:mt-0">
                <h3 className="text-xl font-semibold mb-2">
                  Buy One Get One Free
                </h3>
                <p className="text-gray-600 mb-4">
                  Available for a limited time only.
                </p>
                <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-gray-800 text-white text-center">
          <div className="container py-20 px-6 ">
            <h2 className="text-3xl font-semibold mb-4">Stay Updated!</h2>
            <p className="mb-8">
              Subscribe to our newsletter for the latest updates and promotions.
            </p>
            <div className="flex justify-center space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="py-3 px-4 rounded-l-lg text-gray-700"
              />
              <button className="bg-blue-500 text-white py-3 px-8 rounded-r-lg hover:bg-blue-600 transition">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
