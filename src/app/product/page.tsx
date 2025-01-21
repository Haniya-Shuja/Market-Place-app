
// "use client";

// import React, { useState, useEffect } from "react";
// import { createClient } from "@sanity/client";
// import Link from "next/link";

// const sanityClient = createClient({
//   projectId: "evjl29ge", // Replace with your project ID
//   dataset: "production", // Replace with your dataset name
//   useCdn: true,
//   apiVersion: "2023-01-01",
// });

// const ProductList = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [cart, setCart] = useState<
//     { id: string; title: string; price: number; quantity: number }[] 
//   >([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const query = `*[_type == "product"]{
//           _id,
//           title,
//           price,
//           description,
//           discountPercentage,
//           tags,
//           isNew,
//           "imageUrl": productImage.asset->url
//         }`;
//         const result = await sanityClient.fetch(query);
//         setData(result);
//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching data:", err);
//         setError("Unable to load products. Please try again later.");
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const addToCart = (product: { id: string; title: string; price: number }) => {
//     setCart((prevCart) => {
//       const existingItem = prevCart.find((item) => item.id === product.id);
//       if (existingItem) {
//         return prevCart.map((item) =>
//           item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//         );
//       }
//       return [...prevCart, { ...product, quantity: 1 }];
//     });
//   };

//   const handleRemoveItem = (id: any) => {
//     setCart(cart.filter((item) => item.id !== id));
//   };

//   const getTotalQuantity = () => {
//     return cart.reduce((total, item) => total + item.quantity, 0);
//   };

//   const getTotalPrice = () => {
//     return cart.reduce((total, item) => total + item.quantity * item.price, 0);
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p className="text-red-500">{error}</p>;

//   return (
//     <div className="p-6">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {data.length > 0 ? (
//           data.map((item: any) => (
//             <div key={item._id} className="card border rounded-lg p-4 shadow-md">
//               <img
//                 src={item.imageUrl}
//                 alt={item.title}
//                 className="w-full h-48 object-cover rounded-lg"
//               />
//               <h2 className="text-lg font-bold mt-4">{item.title}</h2>
//               {item.isNew && (
//                 <span className="text-sm text-green-500 font-semibold">New!</span>
//               )}
//               <p className="text-gray-700 mt-2 line-clamp-3">
//                 {item.description.slice(0, 80)}...
//               </p>
//               {/* Displaying Tags */}
//               {item.tags && item.tags.length > 0 && (
//                 <div className="mt-2 flex gap-2 flex-wrap">
//                   {item.tags.map((tag: string, index: number) => (
//                     <span
//                       key={index}
//                       className="bg-gray-200 text-gray-800 text-xs py-1 px-2 rounded-full"
//                     >
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               )}
//               <p className="text-lg font-bold text-[#B88E2F] mt-2">
//                 Price: ${item.price.toFixed(2)}
//               </p>
//               <ul>
//                 <li><Link href="/cart" className="text-black hover:text-gray-700 hover:underline">
//                 <button
//                 className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600"
//                 onClick={() =>
//                   addToCart({ id: item._id, title: item.title, price: item.price })
//                 }
//               >
//                 Add to Cart
//               </button>
//       </Link>
               
//                 </li>
                
//               </ul>
//               <button
//                 className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600"
//                 onClick={() =>
//                   addToCart({ id: item._id, title: item.title, price: item.price })
//                 }
//               >
//                 Add to Cart
//               </button>
//             </div>
//           ))
//         ) : (
//           <p>No products available.</p>
//         )}
//       </div>
 


// <div className="mt-8">
//         <h2 className="text-2xl font-bold">Cart Summary</h2>
//         {cart.length > 0 ? (
//           <div className="mt-4">
//             <table className="min-w-full table-auto border-collapse">
//               <thead>
//                 <tr>
//                   <th className="border px-4 py-2">Title</th>
//                   <th className="border px-4 py-2">Quantity</th>
//                   <th className="border px-4 py-2">Price</th>
//                   <th className="border px-4 py-2">Total</th>
//                   <th className="border px-4 py-2">Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {cart.map((item) => (
//                   <tr key={item.id}>
//                     <td className="border px-4 py-2">{item.title}</td>
                
//                     <td className="border px-4 py-2">{item.quantity}</td>
//                     <td className="border px-4 py-2">${item.price.toFixed(2)}</td>
//                     <td className="border px-4 py-2">${(item.quantity * item.price).toFixed(2)}</td>
//                     <td className="border px-4 py-2">
//                       <button
//                         onClick={() => handleRemoveItem(item.id)}
//                         className="text-red-500 hover:text-red-700"
//                       >
//                         Remove
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//             <div className="mt-4">
//               <p className="font-bold">
//                 Total Items: {getTotalQuantity()} | Total Price: ${getTotalPrice().toFixed(2)}
//               </p>
//             </div>

//             {/* buuton */}
//             <button>
//             <ul>
//             <li className='font-poppins text-[16px] text-center font-normal w-[66px] h-[24px]'><Link href="/cart" className="text-black-500 hover:underline">Checkout
//             </Link></li>
//             </ul>
//             </button>
//           </div>

//         ) : (
//           <p className="text-gray-500 mt-2">Your cart is empty.</p>
//         )}
//       </div>
//       <button className="bg-blue-500 text-white w-full py-2 px-4 rounded hover:bg-blue-600">
//   <ul className="list-none">
//     <li className="font-poppins text-[16px] text-center font-normal">
//       <Link href="/checkout" className="text-black hover:text-gray-700 hover:underline">
//         Checkout
//       </Link>
//     </li>
//   </ul>
// </button>

//     </div>
//   );
// };

// export default ProductList;

"use client";

import React, { useState, useEffect } from "react";
import { createClient } from "@sanity/client";
import Link from "next/link";

const sanityClient = createClient({
  projectId: "evjl29ge", // Replace with your project ID
  dataset: "production", // Replace with your dataset name
  useCdn: true,
  apiVersion: "2023-01-01",
});

const ProductList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [cart, setCart] = useState<
    { id: string; title: string; price: number; quantity: number }[]
  >([]);
// mare pas time nahi   oh sorry abhi tk to sai araha tha pr kya hya phi
  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `*[_type == "product"]{
          _id,
          title,
          price,
          description,
          discountPercentage,
          tags,
          isNew,
          "imageUrl": productImage.asset->url
        }`;
        const result = await sanityClient.fetch(query);
        setData(result);
        setLoading(false);
        console.log(result)
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Unable to load products. Please try again later.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const addToCart = (product: { id: string; title: string; price: number }) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const handleRemoveItem = (id: any) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const getTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.length > 0 ? (
          data.map((item: any) => (
            <div key={item._id} className="card border rounded-lg p-4 shadow-md">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h2 className="text-lg font-bold mt-4">{item.title}</h2>
              {item.isNew && (
                <span className="text-sm text-green-500 font-semibold">New!</span>
              )}
              <p className="text-gray-700 mt-2 line-clamp-3">
                {item.description.slice(0, 80)}...
              </p>
              {/* Displaying Tags */}
              {item.tags && item.tags.length > 0 && (
                <div className="mt-2 flex gap-2 flex-wrap">
                  {item.tags.map((tag: string, index: number) => (
                    <span
                      key={index}
                      className="bg-gray-200 text-gray-800 text-xs py-1 px-2 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <p className="text-lg font-bold text-[#B88E2F] mt-2">
                Price: ${item.price.toFixed(2)}
              </p>
              <ul>
                <li>
                  <Link href="/cart">
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600 w-full sm:w-auto"
                      onClick={() =>
                        addToCart({ id: item._id, title: item.title, price: item.price })
                      }
                    >
                      Add to Cart
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold">Cart Summary</h2>
        {cart.length > 0 ? (
          <div className="mt-4">
            <table className="min-w-full table-auto border-collapse">
              <thead>
                <tr>
                  <th className="border px-4 py-2">Title</th>
                  <th className="border px-4 py-2">Quantity</th>
                  <th className="border px-4 py-2">Price</th>
                  <th className="border px-4 py-2">Total</th>
                  <th className="border px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id}>
                    <td className="border px-4 py-2">{item.title}</td>
                    <td className="border px-4 py-2">{item.quantity}</td>
                    <td className="border px-4 py-2">${item.price.toFixed(2)}</td>
                    <td className="border px-4 py-2">${(item.quantity * item.price).toFixed(2)}</td>
                    <td className="border px-4 py-2">
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-4">
              <p className="font-bold">
                Total Items: {getTotalQuantity()} | Total Price: ${getTotalPrice().toFixed(2)}
              </p>
            </div>

            {/* Checkout Button */}
            <button className="bg-blue-500 text-white w-full py-2 px-4 rounded hover:bg-blue-600 mt-4 sm:w-auto">
              <Link href="/cart" className="text-white text-center">
                Go to Cart
              </Link>
            </button>
          </div>
        ) : (
          <p className="text-gray-500 mt-2">Your cart is empty.</p>
        )}
      </div>

      {/* Checkout Button */}
      <button className="bg-blue-500 text-white w-full py-2 px-4 rounded hover:bg-blue-600 mt-4 sm:w-auto">
        <Link href="/checkout" className="text-white text-center">
          Checkout
        </Link>
      </button>
    </div>
  );
};

export default ProductList;
