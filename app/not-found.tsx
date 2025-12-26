import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="text-center px-4">
        <h1 className="text-8xl font-bold text-[#1e3a5f] mb-4">404</h1>
        <h2 className="text-3xl font-bold text-[#0f172a] mb-4">
          Page Not Found
        </h2>
        <p className="text-xl text-slate-600 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-4 bg-[#0d9488] text-white rounded-lg hover:bg-[#14b8a6] transition-colors font-semibold"
          >
            Go Home
          </Link>
          <Link
            href="/services"
            className="px-8 py-4 border-2 border-[#1e3a5f] text-[#1e3a5f] rounded-lg hover:bg-[#1e3a5f] hover:text-white transition-colors font-semibold"
          >
            View Services
          </Link>
        </div>
      </div>
    </div>
  );
}
