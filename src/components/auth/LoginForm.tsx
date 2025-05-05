"use client"
const LoginForm = () => {
  return (
    <>
       <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2"
                placeholder="enter your email here"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2"
                placeholder="********"
              />
            </div>

            <div className="flex justify-between items-center">
              <label className="flex items-center text-sm">
                <input type="checkbox" className="mr-2" /> Remember me
              </label>
              <a href="#" className="text-sm text-[#3AB0FF] hover:underline">
                Forgot password?
              </a>
            </div>

            <button className="w-full bg-primary hover:bg-[#2b4773] cursor-pointer text-white py-2 rounded-md font-semibold transition-colors duration-100">
              Sign in
            </button>
          </form>
    </>
  )
}

export default LoginForm