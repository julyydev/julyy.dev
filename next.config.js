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
            {
                hostname: '142.250.206.206',
                port: '443',
            },
        ],
        domains: ['res.cloudinary.com', 'drive.google.com', '142.250.206.206'],
        path: '/_next/image',
        formats: ['image/avif', 'image/webp'],
    },
    output: 'standalone',
};

module.exports = nextConfig;
