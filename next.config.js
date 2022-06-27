/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/home',
      },
    ];
  },
  images: {
    domains: [
      'localhost',
      'pubimg.band.uol.com.br',
      'www.cnet.com',
      'www.zdnet.com',
      'blog.logrocket.com',
      'cdn.pixabay.com',
      'res.cloudinary.com',
      'www.syncfusion.com',
      'dev-to-uploads.s3.amazonaws.com',
    ],
  },
};

export default nextConfig;
