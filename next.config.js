/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
    compiler: {
        styledComponents: true,
    },
    images: {
        domains: ['drive.google.com'],
    },
};

module.exports = nextConfig;
