
          import React from 'react';
          import Link from 'next/link'; 
          import Image from 'next/image';
          import { Header } from '@/components/Header';
          import Footer from "@/components/footer";
          
          const Blog = () => {
            return (
              <>
                <Header />
          
                <div style={{ position: 'relative' }}>
                  <Image
                    src='/images/backgroundimage1.webp'
                    alt="Picture of the author"
                    width={1600}
                    height={300}
                  />
                  <div 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-black font-bold text-2xl"
                  > 
                    Blog
                    <p className="flex items-center text-sm">
                      <Link href="#" className="text-black-500 hover:underline mr-2">Home</Link> 
                      <span className="text-gray-500">{'>'}</span>
                      <Link href="#" className="text-black-500 hover:underline ml-2">Blog</Link>
                    </p>
                  </div>
                </div>
          
                <div className="w-full bg-gray-100 py-10 px-5 flex flex-col lg:flex-row justify-between"> 
                  {/* Categories */}
                  <div className="flex flex-col w-full lg:w1/4 gap-6">
                    <div className="bg-gray-100 rounded-lg p-6 shadow-md ">
                      <h2 className="text-xl font-bold mb-4 ">Categories</h2>
                      <ul className="space-y-4">
                        <li className="flex items-center justify-between text-base">
                          <Link href="/category/crafts"> Crafts </Link> 
                          <span className="text-sm rounded-full bg-gray-300 px-3 py-1">4</span>
                        </li>
                        <li className="flex items-center justify-between text-base">
                          <Link href="/category/design"> Design </Link> 
                          <span className="text-sm rounded-full bg-gray-300 px-3 py-1">3</span>
                        </li>
                        <li className="flex items-center justify-between text-base">
                          <Link href="/category/handmade"> Handmade </Link> 
                          <span className="text-sm rounded-full bg-gray-300 px-3 py-1">1</span>
                        </li>
                        <li className="flex items-center justify-between text-base">
                          <Link href="/category/interior"> Interior </Link> 
                          <span className="text-sm rounded-full bg-gray-300 px-3 py-1">7</span>
                        </li>
                        <li className="flex items-center justify-between text-base">
                          <Link href="/category/wood"> Wood </Link> 
                          <span className="text-sm rounded-full bg-gray-300 px-3 py-1">8</span>
                        </li>
                      </ul>
                    </div>
                  </div>
          
                  {/* Blog Cards */}
                  <div className="w-full lg:w-3/4 mt-10 lg:mt-0"> 
                    <div className="max-w-6xl mx-auto space-y-10">
                      {/* Card 1 */}
                      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div>
                          <img
                            src="/images/blog1.webp"
                            alt="Blog Image 1"
                            className="w-[800px] h-[400px] object-cover mx-auto"
                          />
                        </div>
                        <div className="p-6">
          
                          <div className="flex items-center justify-between text-gray-500 text-sm mb-4">
                            <div className="flex items-center">
                              <span className="material-icons">person</span>
                              <span>Admin</span>
                            </div>
                            <div className="flex items-center">
                              <span className="material-icons">event</span>
                              <span>December 8, 2024</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <Link href="/blog/1">
                              <button>Read more</button>
                            </Link>
                          </div>
          
                        </div>
          
                      </div>
          
                      {/* Card 2 */}
                      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div>
                          <img
                            src="/images/blog2.webp"
                            alt="Blog Image 2"
                            className="w-[800px] h-[400px] object-cover mx-auto"
                          />
                        </div>
                        <div className="p-6">
                          <h2 className="text-2xl font-bold mb-3">Blog Title 2</h2>
          
                          <div className="flex items-center justify-between text-gray-500 text-sm mb-4">
                            <div className="flex items-center">
                              <span className="material-icons">person</span>
                              <span>Admin</span>
                            </div>
                            <div className="flex items-center">
                              <span className="material-icons">event</span>
                              <span>December 9, 2024</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <Link href="/blog/2">
                              <button>Read more</button>
                            </Link>
                          </div>
                        </div>
                      </div>
          
                      {/* Card 3 */}
                      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div>
                          <img
                            src="/images/blog3.webp" 
                            alt="Blog Image 3"
                            className="w-[800px] h-[400px] object-cover mx-auto"
                          />
                        </div>
                        <div className="p-6">
                          <h2 className="text-2xl font-bold mb-3">Blog Title 3</h2>
          
                          <div className="flex items-center justify-between text-gray-500 text-sm mb-4">
                            <div className="flex items-center">
                              <span className="material-icons">person</span>
                              <span>Admin</span>
                            </div>
                            <div className="flex items-center">
                              <span className="material-icons">event</span>
                              <span>December 10, 2024</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <Link href="/blog/3">
                              <button>Read more</button>
                            </Link>
                          </div>
                        </div>
                      </div>
          
                    </div>
                  </div> 
                </div> 


                {/* newthing */}
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
    
                <Footer/>
              </>
            );
          };
          
          export default Blog;


