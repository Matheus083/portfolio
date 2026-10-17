/** @type {import('next').NextConfig} */
const nextConfig = {
  /* Habilita o modo estrito do React para identificar efeitos colaterais e descontinuações */
  reactStrictMode: true,

  /* Desativa o cabeçalho 'X-Powered-By: Next.js' por boas práticas de segurança (hardened headers) */
  poweredByHeader: false,

  /* Padrão moderno de otimização e permissão para imagens externas (next/image) */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
  },
};

export default nextConfig;