/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'vaqybtnqyonvlwtskzmv.supabase.co',
                port: '',
            },
        ],
    },
};

export default nextConfig;
