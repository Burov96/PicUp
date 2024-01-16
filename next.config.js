/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
            protocol: 'https',
            hostname: 'jkcphyjjbelqkrwrleog.supabase.co'

            }
        ]
    }
}

module.exports = nextConfig
