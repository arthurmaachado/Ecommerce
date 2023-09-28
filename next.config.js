/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.punkapi.com",
      "images.unsplash.com",
      "brewerydb-images.s3.amazonaws.com",
    ],
  },
};

module.exports = nextConfig;
