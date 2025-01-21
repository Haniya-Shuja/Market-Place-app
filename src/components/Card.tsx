

// import React from 'react';
// import Image from 'next/image';

// interface Propstype {
//   img: string;
//   title: string;
//   price: string;
//   rate: string;
// }

// const Card: React.FC<Propstype> = ({ img, title, price, rate }) => {
//   return (
//     <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg">
//       <div className="w-full">
//         <Image 
//           src={img} 
//           alt={`${title} product image`} 
//           width={300} 
//           height={400} 
//           className="rounded-lg bg-[#F5F5F5]" 
//         />
//       </div>
//       <h2 className="font-bold text-xl mt-4">{title}</h2>
//       <p className="text-gray-600">{rate}</p>
//       <p className="text-xl font-bold text-amber-600">{price}</p>
//     </div>
//   );
// };

// export default Card;


import React from 'react';
import Image from 'next/image';

interface ProductProps {
  imageUrl: string;
  title: string;
  price: number;
  discountPercentage: number;
  description: string;
}

const ProductCard: React.FC<ProductProps> = ({ imageUrl, title, price, discountPercentage, description }) => {
  const discountedPrice = price - (price * discountPercentage) / 100;

  console.log(imageUrl)



  return (
    <div className="border p-4 rounded shadow-sm">
      <Image
        src={imageUrl}
        alt={title}
        width={300}
        height={375}
        className="rounded-lg"
      />
      <h2 className="text-xl font-semibold mt-4">{title}</h2>
      {/* <p className="text-gray-700 mt-2 line-clamp-3">{description}</p> */}
      <p className="text-gray-700 mt-2 line-clamp-3">
      {description.slice(0, 80)}...
</p>

      <div className="flex justify-between items-center mt-4">
        <span className="text-lg font-bold text-green-600">${discountedPrice.toFixed(2)}</span>
        {discountPercentage > 0 && (
          <span className="text-sm text-red-500 line-through">${price.toFixed(2)}</span>
        )}
      </div>
    </div>
  );   
};

export default ProductCard;
