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
  // Configura el proxy para redirigir las peticiones API al microservicio usando IP directa
  async rewrites() {
    // Usar la dirección correcta del contenedor songs-ms
    const apiUrl = 'http://172.30.0.2:3001';
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