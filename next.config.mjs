/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'standalone',
  // Configura el proxy para redirigir las peticiones API al microservicio
  async rewrites() {
    // Usar el nombre del servicio en lugar de la IP directa
    const apiUrl = 'http://music-ms:3001';
    return [
      {
        source: '/api/:path*',
        destination: `${apiUrl}/api/:path*`
      },
      {
        source: '/music/:path*',
        destination: `${apiUrl}/music/:path*`
      },
    ]
  },
}

export default nextConfig