// import React from 'react';

// import Image from 'next/image';

// const Cart = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
//       <div className="flex flex-col lg:flex-row gap-6">
//         {/* Left Side - Product List */}
//         <div className="flex-1 bg-white shadow-md rounded-md p-4">
//           <div className="flex items-center mb-4">
//             {/* Product Image */}
//            <Image src="/images/logo copy.png" alt="Logo" width={200} height={100} />
//             {/* Product Details */}
//             <div className="flex flex-grow flex-wrap ml-4">
//               <p className="flex-1 font-semibold">Product Name</p>
//               <p className="w-20 text-center">Price</p>
//               <p className="w-20 text-center">Quantity</p>
//               <p className="w-24 text-center">Subtotal</p>
//               <button className="w-20 text-center text-red-500 font-bold">Remove</button>
//             </div>
//           </div>
//           <hr className="my-4" />
//           {/* Repeat for other products */}
//           <div className="flex items-center">
//             <img
//               src="https://via.placeholder.com/100"
//               alt="Product"
//               className="w-24 h-24 object-cover rounded-md"
//             />
//             <div className="flex flex-grow flex-wrap ml-4">
//               <p className="flex-1 font-semibold">Another Product</p>
//               <p className="w-20 text-center">$30.00</p>
//               <p className="w-20 text-center">2</p>
//               <p className="w-24 text-center">$60.00</p>
//               <button className="w-20 text-center text-red-500 font-bold">Remove</button>
//             </div>
//           </div>
//         </div>

//         {/* Right Side - Cart Summary */}
//         <div className="w-full lg:w-1/3 bg-white shadow-md rounded-md p-4">
//           <h2 className="text-xl font-bold mb-4">Cart Total</h2>
//           <div className="mb-4 flex justify-between">
//             <p className="text-gray-600">Subtotal:</p>
//             <p className="font-semibold">$100.00</p>
//           </div>
//           <div className="mb-4 flex justify-between">
//             <p className="text-gray-600">Tax:</p>
//             <p className="font-semibold">$5.00</p>
//           </div>
//           <div className="mb-6 flex justify-between">
//             <p className="text-gray-600">Total:</p>
//             <p className="font-semibold">$105.00</p>
//           </div>
//           <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
//             Checkout
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;

// import React from "react";
// import Image from "next/image";


// const Cart = () => {
//   const { cart, removeFromCart } = useCart();

//   const getTotalPrice = () => {
//     return cart.reduce((total:any, item:any) => total + item.quantity * item.price, 0).toFixed(2);
//   };

//   return (
//     <>
//       <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
//       {cart.length === 0 ? (
//         <p>Your cart is empty</p>
//       ) : (
//         <div className="flex flex-col gap-6">
//           {cart.map((item:any) => (
//             <div key={item.id} className="flex items-center">
//               <Image
//                 src="/images/pro1.jpg"
//                 alt={item.title}
//                 width={100}
//                 height={100}
//                 className="object-cover rounded-md"
//               />
//               <div className="flex-grow ml-4">
//                 <p className="font-semibold">{item.title}</p>
//                 <p>Price: ${item.price.toFixed(2)}</p>
//                 <p>Quantity: {item.quantity}</p>
//               </div>
//               <button
//                 onClick={() => removeFromCart(item.id)}
//                 className="text-red-500 font-bold"
//               >
//                 Remove
//               </button>
//             </div>
//           ))}
//           <div className="mt-4">
//             <h2 className="text-xl font-bold">Total: ${getTotalPrice()}</h2>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Cart;


"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import Footer from "@/components/footer";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity?: number;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const handleAddToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (productId: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
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
          layout="intrinsic"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-black font-bold text-4xl">
          Cart
          <p className="flex items-center text-sm mt-2">
            <Link href="/" className="text-gray-500 hover:underline mr-2">
              Home
            </Link>
            <span className="text-gray-500"> &gt; </span>
            <Link href="/blog" className="text-gray-500 hover:underline ml-2">
              Blog
            </Link>
          </p>
        </div>
      </div>

      {/* Main Cart Section */}
      <div className="min-h-screen bg-gray-100 p-4 sm:p-6">
        <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Shopping Cart</h1>
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
          {/* Left Side - Product List */}
          <div className="flex-1 bg-white shadow-md rounded-md p-4 sm:p-6">
            {/* Sample Product */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4">
              <Image src="/images/pro1.jpg" alt="Product" width={100} height={100} />
              <div className="mt-2 sm:mt-0 sm:ml-4">
                <p className="font-semibold text-sm sm:text-base">Asgaard Sofa</p>
                <p className="text-gray-600 text-sm sm:text-base">$30.00</p>
                <button
                  className="mt-2 bg-blue-500 text-white py-1 px-3 sm:px-4 rounded-md"
                  onClick={() =>
                    handleAddToCart({
                      id: 1,
                      name: "Asgaard Sofa",
                      price: 30,
                      image: "/images/pro1.jpg",
                    })
                  }
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Cart Summary */}
          <div className="w-full lg:w-1/3 bg-white shadow-md rounded-md p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">Cart Summary</h2>
            {cartItems.length === 0 ? (
              <p className="text-gray-600">Your cart is empty.</p>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="mb-2 sm:mb-4">
                  <div className="flex justify-between items-center">
                    <p className="font-semibold text-sm sm:text-base">{item.name}</p>
                    <p className="text-sm sm:text-base">
                      ${item.price} x {item.quantity}
                    </p>
                    <button
                      className="text-red-500 text-xs sm:text-sm"
                      onClick={() => handleRemoveFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))
            )}
            {cartItems.length > 0 && (
              <div className="mt-4">
                <p className="flex justify-between text-sm sm:text-base">
                  <span>Subtotal:</span>
                  <span>
                    ${cartItems.reduce(
                      (total, item) => total + item.price * (item.quantity || 1),
                      0
                    )}
                  </span>
                </p>
                <button className="w-full mt-4 bg-blue-500 text-white py-2 px-4 rounded-md text-sm sm:text-base">
                  <Link href="/checkout" className="text-white">
                    Checkout
                  </Link>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Cart;
