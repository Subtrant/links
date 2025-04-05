import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-xl text-center">
        <h1 className="text-2xl font-bold mb-4">404 - Not Found</h1>
        <p className="mb-6">The URL you're looking for doesn't exist.</p>
        <Link 
          href="/" 
          className="inline-block py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md font-medium text-white"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
