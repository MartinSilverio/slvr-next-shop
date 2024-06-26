import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>Main page in progress</h1>
            <p>
                WIP: <Link href="/product/voyager-hoodie">Product page</Link>
            </p>
        </main>
    );
}
