/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['userauth.pythonanywhere.com', 'technocy.pythonanywhere.com', '127.0.0.1','https://technocy.pythonanywhere.com/'],
  },

}

module.exports = nextConfig
