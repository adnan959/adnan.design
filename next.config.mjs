/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    silenceDeprecations: ['import'],
  },
  async redirects() {
    return [
      {
        source: '/a-scalable-design-system',
        destination: '/building-a-design-system',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
