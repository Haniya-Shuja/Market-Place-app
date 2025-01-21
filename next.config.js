

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // domains: ['via.placeholder.com'], // Add the domain here
    domains:["cdn.sanity.io"]
  },
};

module.exports = nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'via.placeholder.com', // Add the domain here
//       },
//     ],
//   },
// };

// module.exports = nextConfig;
