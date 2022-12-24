import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Register = () => {

    const { user, createUser, updateUser } = useContext(AuthContext);


    const handleSignup = e => {

        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const userName = form.userName.value;
        const email = form.email.value;
        const password = form.password.value;


        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('User registered Successfully');
                const userInfo = {
                    displayName: name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(name, email, userName);
                    })

            })
            .catch(err => {
                console.error(err.message)
            })
            .catch(error => {
                console.log(error)
            });

    }

    const saveUser = (name, email, userName) => {

        console.log(name, email, userName);
        // axios.post(`https://resale-treasury-server-site.vercel.app/users`, {
        //     name: name,
        //     email: email,
        //     userName: userName
        // })
        //     .then(function (response) {
        //         console.log(response);
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     });



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
                        {
                            !user?.email ?
                                <div>
                                    <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-yellow-500 text-white">Register</button>
                                </div>
                                :
                                <div>
                                    <Link to=''>
                                        <button className="w-full px-8 py-3 font-semibold rounded-md bg-green-500 text-white">Congratulations!!! Account created.</button>
                                    </Link>
                                </div>

                        }
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