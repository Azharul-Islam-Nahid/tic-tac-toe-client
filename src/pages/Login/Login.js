import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Login = () => {

    const { signIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');

    const handleSignin = e => {


        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;



        setLoginError('')

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log("🚀 ~ file: Login.js ~ line 18 ~ handleLogin ~ user", user)

                toast.success('User Logged in')

            })
            .catch(err => {
                console.error(err.message)
                setLoginError('Enter correct details.')
            })

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
                            <label htmlFor="email" className="block mb-2 font-bold">Email</label>
                            <input type="email" name="email" id="email" placeholder="Type your email here" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" required />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label htmlFor="password" className="font-bold">Password</label>
                            </div>
                            <input type="password" name="password" id="password" placeholder="Type your password here" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" required />
                        </div>
                    </div>
                    <div className="space-y-2">
                        {loginError &&
                            <div>
                                <button type="button" className="w-full px-8 py-3 font-semibold rounded-md bg-red-500 text-gray-50">{loginError}</button>
                            </div>
                        }
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