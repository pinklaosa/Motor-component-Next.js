import Head from "next/head";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <Head>
        <title>Login</title>
      </Head>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-5/6 max-w-4xl">
          <div className="w-3/5 py-24 text-sky-600">
            <h2 className="text-3xl font-bold mb-2">Join us now</h2>
            <div className="border-2 w-20 border-sky-600 inline-block mb-2"></div>
            <p className="text-gray-400 my-3">
              enter your infomations for new account
            </p>
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 w-64 p-1 flex mt-2 rounded-lg">
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  className="my-2 mx-4 bg-gray-100 outline-none text-sm flex-1"
                />
              </div>
              <div className="bg-gray-100 w-64 p-1 flex mt-2 rounded-lg">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="my-2 mx-4 bg-gray-100 outline-none text-sm flex-1"
                />
              </div>
              <div className="bg-gray-100 w-64 p-1 flex mt-2 rounded-lg">
                <input
                  type="password"
                  name="re-password"
                  placeholder="Confirm Password"
                  className="my-2 mx-4 bg-gray-100 outline-none text-sm flex-1"
                />
              </div>
              {/* <div className="flex w-64 justify-between mt-2">
                <label className="flex items-center text-xs text-gray-300">
                  <input className="mr-1" type="checkbox" name="remember"></input>{" "}
                  Remember me
                </label>
                <a className="flex text-gray-300 text-xs" href="#">Forgot password ?</a>
              </div> */}
              <a
                href="#"
                className="border-2 border-sky-600 rounded-full bg-sky-600 px-12 py-2 
                inline-block font-semibold text-white my-5 hover:bg-white hover:text-sky-600"
              >
                Sign up
              </a>
            </div>
          </div>
          <div className="w-2/5 bg-sky-600 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
            <h2 className="text-3xl font-bold mb-2">Sign in</h2>
            <div className="border-2 w-20 border-white inline-block mb-2"></div>
            <p className="mb-5">Welcome to Motor website</p>
            <div className="flex flex-col items-center">
              <div className="bg-sky-100 w-60 p-1 flex mt-2 rounded-lg text-sky-600">
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  className="my-2 mx-4 bg-sky-100 outline-none text-sm flex-1"
                />
              </div>
              <div className="bg-sky-100 w-60 p-1 flex mt-2 rounded-lg text-sky-600">
              <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="my-2 mx-4 bg-sky-100 outline-none text-sm flex-1"
                />
              </div>
            </div>

            <a
              href="#"
              className="border-2 border-white 
              rounded-full px-12 py-2 
              inline-block font-semibold 
              hover:bg-white hover:text-sky-600 mt-5"
            >
              Sign in
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};
export default Login;
