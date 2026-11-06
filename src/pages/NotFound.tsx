import { Link } from "react-router-dom";
import PageLayout from "../components/PageLayout";

export default function NotFound() {
  return (
    <PageLayout>
      <section className="min-h-[75vh] flex items-center justify-center px-6 pt-24 pb-16 bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-gray-900 dark:via-black dark:to-gray-900 transition-colors duration-500">
        <div className="max-w-lg text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-cyan-400">
            404
          </p>
          <h1 className="mt-3 text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
            Page not found
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            The page you are looking for does not exist or has been moved.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
            >
              Back to Home
            </Link>
            <Link
              to="/#projects"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-blue-600 text-blue-700 font-semibold hover:bg-blue-50 dark:border-cyan-400 dark:text-cyan-400 dark:hover:bg-gray-800 transition-colors"
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
