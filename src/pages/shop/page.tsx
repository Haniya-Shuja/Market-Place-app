// import Footer from "@/components/footer";
// import { Header } from "@/components/Header";
// import Hero, { Hero1, CardDetails } from "@/components/hero";
// import { Hero3 } from "@/components/hero";


// import Image from "next/image";

// export default function Home() {
//   return (
//    <div>
  
//     <Header/>
//     <div
//   className="relative w-full sm:w-80 h-48 sm:h-64 bg-[url('/images/hero2.png')] bg-cover bg-center rounded-lg"
// >
//   <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
//     <h3 className="text-lg sm:text-xl font-bold">Welcome</h3>
//     <p className="text-sm sm:text-base mt-2">Discover the Collection</p>
//   </div>
//   </div>
//     <Hero/>
   
//     <Hero1/>
//     <div className='font-bold text-4xl p-10 ml-96 '> <h1>Our Products</h1></div>
//     <CardDetails/>
//     <Hero3/>
    
 
    
//     <br />
//     <Footer/>
//    </div>
//   );
// }
import Footer from "@/components/footer";
import { Header } from "@/components/Header";
import Hero, { Hero1, CardList } from "@/components/hero";
import { Hero3 } from "@/components/hero";


import Image from "next/image";

export default function Home() {
  return (
   <div>


    <Header/>

     <div
  className="relative w-full sm:w-80 h-48 sm:h-64 bg-[url('/images/shop.jpg')] bg-cover bg-center rounded-lg" style={{width:1500 ,height:400}}
>
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white" >
    <h3 className="text-lg sm:text-xl font-bold"></h3>
    <p className="text-sm sm:text-base mt-2"></p>
  </div>
  </div>
  <CardList/>
    <div
  className="relative w-full sm:w-80 h-48 sm:h-64 bg-[url('/images/temp1.jpg')] bg-cover bg-center rounded-lg" style={{width:1300 ,height:200}}
>
  </div>
    
 
    
    <br />
    <Footer/>
   </div>
  );
}