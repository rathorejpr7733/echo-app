
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@workspace/ui"],
  devIndicators: false,
  async redirects() {
    return[
      {
        source: '/',
        destination: '/Conversations',
        permanent: false,
      },
    ]
  }
};

export default nextConfig;




















// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   transpilePackages: ["@workspace/ui"],
//   devIndicators: false,
//   async redirects() {
//     return[
//       {
//         source: '/',
//         destination: '/dashboard/conversations',
//         permanent:false,
//       },
//     ]
//   }
// };

// export default nextConfig;
