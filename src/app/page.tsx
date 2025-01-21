import ProductCard from "@/components/Card";
import Footer from "@/components/footer";
import { Header } from "@/components/Header";
import Hero, {  Hero1, } from "@/components/hero";
import { Hero3 } from "@/components/hero";



import Image from "next/image";
import ProductList from "./product/page";

export default function Home() {
  return (
   <div>
  
    <Header/>
    <Hero/>
   
    <Hero1/>
    <div className='font-bold text-4xl py-10 text-center '> <h1>Our Products</h1></div>
    {/* <CardList/> */}
    <ProductList/>
    <Hero3/>
   
    <br />
    <Footer/>
   </div>
  );
}
