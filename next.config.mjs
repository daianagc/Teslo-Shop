// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   compiler: {
//     styledComponents: true,
//   },
//   images: {
//     domains: ["res.cloudinary.com"],
//   },
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;
