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
                hostname: 's3.ap-northeast-2.amazonaws.com',
                port: '',
                pathname: '/julyy.dev',
            },
        ],
        domains: ['s3.ap-northeast-2.amazonaws.com'],
        path: '/_next/image',
        formats: ['image/avif', 'image/webp'],
    },
    webpack: config => {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });
        return config;
    },
};

module.exports = nextConfig;
