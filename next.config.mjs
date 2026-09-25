/** @type {import("next").NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/satset/:path*",
        headers: [
          {
            key: "Permissions-Policy",
            value:
              'geolocation=(self "https://script.google.com" "https://script.googleusercontent.com"), camera=(self "https://script.google.com" "https://script.googleusercontent.com"), microphone=(self "https://script.google.com" "https://script.googleusercontent.com")',
          },
        ],
      },
    ];
  },
};

export default nextConfig;