

// "

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Header } from "@/components/Header";
import Link from "next/link";

const Billing = () => {
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleSubmit = (e:any) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const orderData = {
      firstName: formData.get("first-name"),
      lastName: formData.get("last-name"),
      company: formData.get("company"),
      region: formData.get("region"),
      address: formData.get("address"),
      town: formData.get("town"),
      province: formData.get("province"),
      zipCode: formData.get("zip-code"),
      email: formData.get("email"),
      products: [
        { name: "Asgaard Sofa", quantity: 1, price: 250 },
        { name: "Another Product", quantity: 2, price: 150 },
      ],
      total: 400,
    };

    localStorage.setItem("orderData", JSON.stringify(orderData));
    setOrderPlaced(true);
    e.target.reset();
  };

  return (
    <>
      <Header />

      {/* Background Section */}
      <div className="relative">
        <Image
          src="/images/backgroundimage1.webp"
          alt="Background Image"
          width={1600}
          height={300}
          className="w-full h-[300px] object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-black font-bold text-4xl">
          Checkout
          <p className="flex items-center text-sm mt-2">
            <Link href="/" className="text-gray-500 hover:underline mr-2">
              Home
            </Link>
            <span className="text-gray-500"> &gt; </span>
            <Link href="/blog" className="text-gray-500 hover:underline ml-2">
              Checkout
            </Link>
          </p>
        </div>
      </div>

      {/* Main Section */}
      <div className="flex flex-col lg:flex-row gap-6 p-6 font-sans">
        {/* Billing Details Section */}
        <div className="flex-1 bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Billing Details</h2>
          {orderPlaced && (
            <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-6">
              Order placed successfully! Check your email for confirmation.
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="first-name" className="font-bold">
                  First Name
                </label>
                <input
                  type="text"
                  id="first-name"
                  name="first-name"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label htmlFor="last-name" className="font-bold">
                  Last Name
                </label>
                <input
                  type="text"
                  id="last-name"
                  name="last-name"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
            </div>

            {/* Company Name */}
            <div>
              <label htmlFor="company" className="font-bold">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Region */}
            <div>
              <label htmlFor="region" className="font-bold">
                Region
              </label>
              <input
                type="text"
                id="region"
                name="region"
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            {/* Address */}
            <div>
              <label htmlFor="address" className="font-bold">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            {/* Town/City and Province */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="town" className="font-bold">
                  Town/City
                </label>
                <input
                  type="text"
                  id="town"
                  name="town"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label htmlFor="province" className="font-bold">
                  Province
                </label>
                <input
                  type="text"
                  id="province"
                  name="province"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
            </div>

            {/* ZIP Code and Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="zip-code" className="font-bold">
                  ZIP Code
                </label>
                <input
                  type="text"
                  id="zip-code"
                  name="zip-code"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="font-bold">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600"
            >
              Place Order
            </button>
          </form>
        </div>

        {/* Order Summary Section */}
        <div className="flex-1 bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
          <div className="flex justify-between border-b pb-2 mb-4">
            <p>Asgaard Sofa * 1</p>
            <p>$250</p>
          </div>
          <div className="flex justify-between border-b pb-2 mb-4">
            <p>Another Product * 2</p>
            <p>$150</p>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <p>Total</p>
            <p>$400</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Billing;