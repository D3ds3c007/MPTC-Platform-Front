/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
      return [
        {
          source: "/(.*)", // Apply to all routes
          headers: [
            {
              key: "Cross-Origin-Resource-Policy",
              value: "cross-origin", // or "same-origin", "same-site"
            },
            {
              key: "Access-Control-Allow-Origin",
              value: "*", // Adjust as needed
            },
          ],
        },
      ];
    },
  };
  
  export default nextConfig;
  