import { Link } from 'react-router-dom';

const Register = () => {

    const handleSignup = e => {

        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        console.log("🚀 ~ file: Register.js:11 ~ handleSignup ~ name", name)
        const userName = form.userName.value;
        console.log("🚀 ~ file: Register.js:13 ~ handleSignup ~ userName", userName)
        const email = form.email.value;
        console.log("🚀 ~ file: Register.js:15 ~ handleSignup ~ email", email)
        const password = form.password.value;
        console.log("🚀 ~ file: Register.js:17 ~ handleSignup ~ password", password)

    }

    return (
        <div>
            <div className="m-auto flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-50 text-gray-800">
                <div className="mb-8 text-start">
                    <p className="text-2xl font-bold">Create account</p>
                    <h1 className="my-3 text-4xl font-extrabold">Let's get to know you better!</h1>
                </div>
                <form onSubmit={handleSignup} action="" className="space-y-12 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block mb-2 font-bold">Your name</label>
                            <input type="text" name="name" id="name" placeholder="Type your name here" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" required />
                        </div>
                        <div>
                            <label htmlFor="userName" className="block mb-2 font-bold">Username</label>
                            <input type="text" name="userName" id="userName" placeholder="Type your username here" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" required />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 font-bold">Email</label>
                            <input type="email" name="email" id="email" placeholder="Type your email here" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" required />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label htmlFor="password" className="font-bold">Password</label>
                            </div>
                            <input type="password" name="password" id="password" placeholder="Type your password here" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-yellow-500 text-white">Register</button>
                        </div>
                        <p className="px-6 text-sm text-center text-gray-600">Already have an account ?
                            <Link to='/signin' className="hover:underline text-sky-600"> Login</Link>.
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;