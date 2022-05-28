import Head from "next/head";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <Head>
        <title>Login</title>
      </Head>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          <div className="w-3/5 py-24 text-green-400">
            <h2 className="text-3xl font-bold mb-2">Sign up to new account</h2>
            <div className="border-2 w-20 border-green-400 inline-block mb-2"></div>
            <p className="text-gray-400 my-3">enter your new account</p>
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
              <div className="flex w-64 justify-between mt-2">
                <label className="flex items-center text-xs text-gray-300">
                  <input className="mr-1" type="checkbox" name="remember"></input>{" "}
                  Remember me
                </label>
                <a className="flex text-gray-300 text-xs" href="#">Forgot password ?</a>
              </div>
              <a
                href="#"
                className="border-2 border-green-400 rounded-full bg-green-400 px-12 py-2 
                inline-block font-semibold text-white my-5 hover:bg-white hover:text-green-400"
              >
                Sign in
              </a>
            </div>
          </div>
          <div className="w-2/5 bg-green-400 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
            <h2 className="text-3xl font-bold mb-2">Sign up</h2>
            <div className="border-2 w-20 border-white inline-block mb-2"></div>
            <p className="mb-10">Welcome to Motor website</p>
            <a
              href="#"
              className="border-2 border-white 
              rounded-full px-12 py-2 
              inline-block font-semibold 
              hover:bg-white hover:text-green-400"
            >
              Sign up
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};
export default Login;
