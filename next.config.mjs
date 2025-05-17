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
  // Configura el proxy para redirigir las peticiones API al API Gateway
  async rewrites() {
    // Direccionar todas las solicitudes a través del API Gateway
    const gatewayUrl = process.env.NEXT_PUBLIC_API_URL || 'http://apigateway:8080/api';
    return [
      {
        source: '/api/:path*',
        destination: `${gatewayUrl}/:path*`
      },
      {
        // Redirige /api/music para que coincida con el patrón del API Gateway
        source: '/api/music/:path*',
        destination: `${gatewayUrl}/music/:path*`
      },
    ]
  },
}

export default nextConfig