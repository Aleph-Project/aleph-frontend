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
    const apiUrl = 'http://music-ms:3002';
    return [
      {
        source: '/api/:path*',
        destination: 'http://music-ms:3002/api/:path*',
      },
      // Ruta alternativa para evitar bloqueos por extensiones
      {
        source: '/_data/:path*',
        destination: 'http://music-ms:3002/api/:path*',
      },
    ];
  },
}

export default nextConfig