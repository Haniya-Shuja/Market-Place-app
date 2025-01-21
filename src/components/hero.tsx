

"use client";
import React, { useState, useEffect } from "react";
import { FaAngleRight, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";

// Hero Section
const Hero = () => {
  return (
    <div
      className="relative w-full h-[40rem] sm:h-[50rem] bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero copy.png')" }}
    >
      <div
        className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#FFF3E3] p-6 sm:p-8 rounded-lg"
        style={{ maxWidth: "90%", width: "600px", height: "auto" }}
      >
        <h6 className="text-sm sm:text-lg font-bold text-center sm:text-left">New Arrival</h6>
        <h3 className="text-2xl sm:text-4xl my-2 sm:my-4 font-bold text-[#B88E2F] text-center sm:text-left">
          Discover Our <br /> New Collection
        </h3>
        <p className="text-sm sm:text-base mb-4 sm:mb-6 text-center sm:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque dolore
        </p>
        <div className="flex justify-center sm:justify-start">
          <button className="bg-[#B88E2F] text-white py-2 px-4 sm:py-3 sm:px-6 text-sm sm:text-lg rounded-md">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

// Hero1 Section
export const Hero1 = () => {
  return (
    <div className="flex flex-col gap-4 sm:gap-6 p-4 sm:p-6">
      <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-center">
        Browse The Range
      </h1>
      <p className="text-sm sm:text-base md:text-lg text-center px-4 sm:px-10 md:px-20">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, molestias!
      </p>

      <div className="w-full flex flex-wrap justify-center gap-4 sm:gap-6 mt-4 sm:mt-6">
        {["pic1.jpg", "pic2.jpg", "pic3.jpg"].map((img, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
            <Image
              src={`/images/${img}`}
              alt="hero"
              width={300}
              height={200}
              className="w-full h-auto rounded-lg"
            />
            <p className="text-center text-sm sm:text-lg font-bold mt-2 sm:mt-4">
              {index === 0 ? "Living" : index === 1 ? "Bedroom" : "Dining"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};


// CardDetails Section (Fetch and Render)
export const CardList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://template6-six.vercel.app/api/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) {
    const errorMessage = (error as Error)?.message || "An unexpected error occurred";
    return <p>Error: {errorMessage}</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {data.map((item: any) => (
        <div key={item.id} className="card border rounded-lg p-4">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-48 object-cover rounded-lg"
          />
          <h3 className="text-xl font-bold mt-4">{item.title}</h3>
          <p className="text-gray-600"> {item.description.slice(0, 80)}...</p>
          <p className="text-lg font-bold text-[#B88E2F] mt-2">
            Price: ${item.price}
          </p>
        </div>
      ))}
    </div>
  );
};




export const Hero3 = () => {
  return (
    <div className="p-6 md:p-12 flex flex-col gap-6 justify-center items-center">
      <button className="w-40 p-2 bg-white font-bold border border-amber-600 text-2xl text-amber-600 rounded-lg">
        Show more
      </button>

      <div className="flex flex-col md:flex-row gap-6 justify-center items-center md:items-start mt-6">
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold">50+ Beautiful Rooms</h1>
          <p className="text-base md:text-lg mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
            autem?
          </p>
          <button className="w-40 bg-amber-600 font-bold text-white mt-4">
            Explore more
          </button>
        </div>

        {/* Images section */}
        <div className="flex flex-col md:flex-row gap-6 mt-6 md:mt-0">
          {["tem1.JPG", "tem2.JPG"].map((img, index) => (
            <div key={index} className="w-full md:w-[696px]">
              <Image
                src={`/images/${img}`}
                alt="hero"
                width={300}
                height={200}
                className="w-full h-auto rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};




export default Hero;
