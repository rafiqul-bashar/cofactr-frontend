import React from "react";

const AboutUsPage = () => {
  return (
    <section className="bg-gray-800 text-white">
      <div className="container mx-auto flex flex-col items-center justify-center py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg mb-8">
          We are dedicated to bringing you the best products with exceptional
          quality and service. Our mission is to deliver outstanding value,
          inspiration, and innovation to our customers.
        </p>
        <p className="text-lg mb-8">
          Since our founding, we've been driven by passion and commitment to
          quality, building a trusted platform where customers can discover a
          wide variety of products, carefully curated just for them.
        </p>
        <p className="text-lg mb-8">
          Join us on our journey as we continue to bring you exclusive deals,
          innovative products, and a seamless shopping experience.
        </p>
        <button className="bg-blue-500 text-white py-3 px-8 rounded-lg hover:bg-blue-600 transition">
          Explore Our Products
        </button>
      </div>
    </section>
  );
};

export default AboutUsPage;
