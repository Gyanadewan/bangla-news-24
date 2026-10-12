
import Link from "next/link";

function NotFoundPage() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-8xl font-extrabold text-red-400">
        404
      </h1>

      <h2 className="mt-4 text-2xl font-bold md:text-3xl">
        Page Not Found!
      </h2>

      <p className="mt-3 max-w-md text-base-content/70">
        Sorry, the page you are looking for does not exist
        or has been moved.
      </p>

      <Link href="/" className="btn btn-primary mt-6">
        Back to Home
      </Link>
    </div>
  );
}

export default NotFoundPage;
