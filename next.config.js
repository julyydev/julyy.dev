/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
    compiler: {
        styledComponents: true,
    },
    images: {
        domains: ['drive.google.com'],
        path: '/_next/image',
    },
};

module.exports = nextConfig;
