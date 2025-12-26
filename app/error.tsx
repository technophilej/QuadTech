"use client";

import Link from "next/link";

export default function ErrorPage({
  error: _error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">Oops!</h1>
        <p className="text-xl text-gray-600 mb-8">
          Something went wrong. Please try again.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            type="button"
            onClick={reset}
            className="px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors font-semibold"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-full hover:bg-gray-100 transition-colors font-semibold"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
