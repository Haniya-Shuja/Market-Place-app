import Footer from "@/components/footer";
import { Header } from "@/components/Header";
import Hero, { Hero1} from "@/components/hero";
import { Hero3 } from "@/components/hero";
import ProductList from "../product/page";


import Image from "next/image";

export default function Home() {
  return (
   <>


    <Header/>
     {/* Background Section */}
     <div style={{ position: 'relative' }}>
        <Image
          src="/images/backgroundimage1.webp"
          alt="Background Image"
          width={1600}
          height={300}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-black font-bold text-4xl"
        >
          Shop
          <p className="flex items-center text-sm mt-2">
           
          </p>
        </div>
      </div>

  <ProductList/>
        
     {/* < CardList/> */}
   
    {/* <CardDetails/> */}
    <div className="bg-yellow-100 p-14 h-60">
      <div className="flex justify-around p-4 bg-yellow-100">
        <div className="flex items-start space-x-2">
          {/* <FaCheckCircle className="text-green-500" /> */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-black"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 11l3 3L22 4M4 20h16a2 2 0 002-2V6a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
          <div>
            <h3 className="text-lg font-semibold">High Quality</h3>
            <p className="block">Dedicated support</p>
          </div>
        </div>
        <div className="flex items-start space-x-2">
          {/* <FaCheckCircle className="text-green-500" /> */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-black"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h11m4 0h2a2 2 0 012 2v5a2 2 0 01-2 2h-2M3 10V6a2 2 0 012-2h5l2 2h7a2 2 0 012 2v4m-5 6h2a2 2 0 012-2v-5a2 2 0 00-2-2h-2M3 10v10a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H5a2 2 0 00-2 2v5"></path></svg>
          <div>
            <h3 className="text-lg font-semibold">Warranty Protection</h3>
            <p className="block">Dedicated support</p>
          </div>
        </div>
        <div className="flex items-start space-x-2">
          {/* <FaCheckCircle className="text-green-500" /> */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-black"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m5-9h.01M17 3H7a4 4 0 00-4 4v10a4 4 0 004 4h10a4 4 0 004-4V7a4 4 0 00-4-4z"></path></svg>
          <div>
            <h3 className="text-lg font-semibold">Free Shipping</h3>
            <p className="block">Dedicated support</p>
          </div>
        </div>
        <div className="flex items-start space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-black"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h11m4 0h2a2 2 0 012 2v5a2 2 0 01-2 2h-2M3 10V6a2 2 0 012-2h5l2 2h7a2 2 0 012 2v4m-5 6h2a2 2 0 012-2v-5a2 2 0 00-2-2h-2M3 10v10a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H5a2 2 0 00-2 2v5"></path></svg>
          <div>
            <h3 className="text-lg font-semibold">24/7 Support</h3>
            <p className="block">Dedicated support</p>
          </div>
        </div>
      </div>
    </div>
    
    
 
    
    <br />
    <Footer/>
    </>
  );
}

