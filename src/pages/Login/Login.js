import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const handleSignin = e => {

        e.preventDefault();

        const form = e.target;
        const userName = form.userName.value;
        console.log("🚀 ~ file: Login.js:12 ~ handleSignin ~ userName", userName)
        const password = form.password.value;
        console.log("🚀 ~ file: Login.js:14 ~ handleSignin ~ password", password)

    }


    return (
        <div>
            <div className="m-auto flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-50 text-gray-800">
                <div className="mb-8 text-start">
                    <p className="text-2xl font-bold">Login</p>
                    <h1 className="my-3 text-4xl font-extrabold">Please enter your details</h1>
                </div>
                <form onSubmit={handleSignin} action="" className="space-y-12 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="userName" className="block mb-2 font-bold">Username</label>
                            <input type="text" name="userName" id="userName" placeholder="Type your username here" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" required />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label htmlFor="password" className="font-bold">Password</label>
                            </div>
                            <input type="password" name="password" id="password" placeholder="Type your password here" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" required />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-yellow-500 text-gray-50">Login</button>
                        </div>
                        <p className="px-6 text-sm text-center text-gray-600">Don't have an account yet?
                            <Link to='/signup' className="hover:underline text-sky-600"> Register</Link>.
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;