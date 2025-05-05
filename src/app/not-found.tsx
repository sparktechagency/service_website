import Image from "next/image";
import Link from "next/link"
import { FaArrowLeft } from "react-icons/fa"

const NotFoundPage = () => {
  return (
    <>
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 py-12 text-center">
      <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
      <p className="text-gray-500 mb-6 max-w-md">
        Sorry, the page you’re looking for doesn’t exist or has been moved.
      </p>

      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-md font-medium transition duration-200"
      >
        <FaArrowLeft className="text-sm" />
        Back to Home
      </Link>

      <div className="mt-10">
        <Image
          src="/images/notfound.svg"
          alt="404 Illustration"
          className="max-w-md w-full mx-auto"
          width={600}
          height={600}
        />
      </div>
    </div>
    </>
  )
}

export default NotFoundPage;