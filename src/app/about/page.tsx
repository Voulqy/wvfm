import Link from 'next/link'

export default function About() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6 text-gray-800">About</h1>
            <p className="text-lg text-gray-600 mb-8">
            This is an example about page to demonstrate Next.js App Router functionality.
            </p>
            <Link 
            href="/" 
            className="px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
            Back to Home
            </Link>
        </div>
        </main>
    )
}