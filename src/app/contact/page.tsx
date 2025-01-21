

"use client";

import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import Footer from "@/components/footer";
import { Header } from "@/components/Header";
import Image from "next/image";
import React from "react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    alert(`Message Sent Successfully! Name: ${data.name}`);
  };

  return (
    <>
      <div>
        <Header />
        <div style={{ position: "relative" }}>
          <Image
            src="/images/backgroundimage1.webp"
            alt="Background Image"
            width={1600}
            height={300}
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-black font-bold text-4xl">
            Contact
          </div>
        </div>
      </div>

<div className="flex flex-col gap-6 px-4 sm:px-6 md:px-8 lg:px-12">
  <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">
    Get In Touch With Us
  </h1>
  <p className="text-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni,
    molestias consectetur adipisicing elit!
  </p>
</div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
        <form
          className="flex-1 bg-white shadow-lg rounded-lg p-6 space-y-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="space-y-4">
            <div>
              <h1>Your name</h1>
              <input
                type="text"
                placeholder="Full name"
                {...register("name", { required: "Name is required" })}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.name && (
                <span className="text-red-500">{errors.name.message}</span>
              )}
            </div>

            <div>
              <h1>E-mail</h1>
              <input
                type="email"
                placeholder="E-mail"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Please enter a valid email",
                  },
                })}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </div>

            <div>
              <h1>Phone number</h1>
              <input
                type="number"
                placeholder="Phone number"
                {...register("phone", {
                  required: "Phone number is required",
                  minLength: {
                    value: 10,
                    message: "Phone number must be at least 10 digits",
                  },
                })}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.phone && (
                <span className="text-red-500">{errors.phone.message}</span>
              )}
            </div>

            <div>
              <h1>Subject</h1>
              <input
                type="text"
                placeholder="Subject"
                {...register("subject", { required: "Subject is required" })}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.subject && (
                <span className="text-red-500">{errors.subject.message}</span>
              )}
            </div>
          </div>

          <div>
            <h1>Message</h1>
            <textarea
              placeholder="Your Message"
              {...register("message", { required: "Message is required" })}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            {errors.message && (
              <span className="text-red-500">{errors.message.message}</span>
            )}
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Submit
            </button>
          </div>
        </form>

        <div className="flex-1 bg-gray-50 shadow-lg rounded-lg p-6 space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-2">Address</h3>
            <p className="text-gray-700">
              123 Main Street, <br />
              Springfield, USA
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Phone</h3>
            <p className="text-gray-700">
              +1 (123) 456-7890 <br />
              Available 9:00 AM - 6:00 PM
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2">Working Hours</h3>
            <p className="text-gray-700">
              Monday - Friday: 9:00 AM - 6:00 PM <br />
              Saturday: 10:00 AM - 4:00 PM
            </p>
          </div>
        </div>
      </div>

      <div className="bg-yellow-100 p-14 h-60">
        <div className="flex justify-around p-4 bg-yellow-100">
          <div className="flex items-start space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8 text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 11l3 3L22 4M4 20h16a2 2 0 002-2V6a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2z"
              ></path>
            </svg>
            <div>
              <h3 className="text-lg font-semibold">High Quality</h3>
              <p className="block">Dedicated support</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactPage;
