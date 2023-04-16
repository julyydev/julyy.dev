/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
    compiler: {
        styledComponents: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'drive.google.com',
                port: '',
                pathname: '/uc',
            },
            {
                protocol: 'https',
                hostname: '**.googleusercontent.com',
            },
        ],
        domains: ['drive.google.com'],
        path: '/_next/image',
        formats: ['image/avif', 'image/webp'],
    },
    output: 'standalone',
};

module.exports = nextConfig;
