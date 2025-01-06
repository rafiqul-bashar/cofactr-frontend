const Service = () => {
  return (
    <section className=" py-4 md:py-16">
      <div className="container text-lg font-bold tracking-wider text-lightGray">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-16 ">
          <div className="min-h-[140px] rounded-sm flex flex-col md:flex-row md:items-center md:justify-center gap-3 bg-warmGray">
            <img
              src="https://ecommerce-fullstack-web-app.netlify.app/static/media/icon-2.622b96aa8375916171721496261f6986.svg"
              alt="ico"
              className="h-16"
            />
            <h5>Best prices & offers</h5>
          </div>
          <div className="min-h-[140px] rounded-sm flex flex-col md:flex-row md:items-center md:justify-center gap-3 bg-zinc-100">
            <img
              src="https://ecommerce-fullstack-web-app.netlify.app/static/media/icon-5.e85986742a6c5c3748db8c239b11dd57.svg"
              alt="ico"
              className="h-16"
            />
            <h5>Fast Delivery</h5>
          </div>
          <div className="min-h-[140px] rounded-sm flex flex-col md:flex-row md:items-center md:justify-center gap-3 bg-zinc-100">
            <img
              src="https://ecommerce-fullstack-web-app.netlify.app/static/media/icon-3.a41b48d5c6678b96129a842057548c86.svg"
              alt="ico"
              className="h-16"
            />
            <h5>Great Deals</h5>
          </div>
          <div className="min-h-[140px] rounded-sm flex flex-col md:flex-row md:items-center md:justify-center gap-3 bg-zinc-100">
            <img
              src="https://ecommerce-fullstack-web-app.netlify.app/static/media/icon-4.84d7a8a08622e302a2d50459d2cddb62.svg"
              alt="ico"
              className="h-16"
            />
            <h5>24 / 7 Customer Service</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
