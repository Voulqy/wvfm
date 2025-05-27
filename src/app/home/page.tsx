import Link from 'next/link'

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
            <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-6 text-gray-800">
                Welcome to Next.js with Tailwind
                </h1>
                <p className="text-lg text-gray-600 mb-8">
                This is a production-ready Next.js application with Tailwind CSS and App Router.
                </p>
                <Link 
                href="/about" 
                className="px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                Learn More
                </Link>
            </div>
        </main>
    )
}