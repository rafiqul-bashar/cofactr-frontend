import React from "react";

const ContactPage = () => {
  return (
    <section className="bg-gray-800 text-white">
      <div className="container mx-auto flex flex-col items-center justify-center py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg mb-8">
          We’re here to help! Reach out to us for any inquiries, feedback, or
          support. Our team is dedicated to providing you with the best possible
          experience.
        </p>
        <div className="text-lg mb-8">
          <p>
            Email:{" "}
            <a
              href="mailto:support@example.com"
              className="text-blue-400 hover:underline"
            >
              support@example.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:+123456789" className="text-blue-400 hover:underline">
              +1 234 567 89
            </a>
          </p>
          <p>Address: 1234 Market Street, Suite 100, City, Country</p>
        </div>
        <div className="flex space-x-4">
          <button className="bg-blue-500 text-white py-3 px-8 rounded-lg hover:bg-blue-600 transition">
            Email Us
          </button>
          <button className="bg-transparent border border-white text-white py-3 px-8 rounded-lg hover:bg-white hover:text-gray-800 transition">
            Call Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
